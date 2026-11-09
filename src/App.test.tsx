import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { AuthProvider } from "./contexts/auth";

const renderApp = () =>
  render(
    <AuthProvider latency={0}>
      <App />
    </AuthProvider>
  );

beforeEach(() => localStorage.clear());

test("botão Entrar começa desabilitado", () => {
  renderApp();
  expect(screen.getByRole("button", { name: "Entrar" })).toBeDisabled();
});

test("mostra erros de validação", async () => {
  renderApp();
  userEvent.type(screen.getByLabelText("E-mail"), "invalido");
  userEvent.type(screen.getByLabelText("Senha"), "123");
  expect(await screen.findByText("E-mail inválido")).toBeInTheDocument();
  expect(await screen.findByText("No mínimo 6 caracteres")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Entrar" })).toBeDisabled();
});

test("mostra erro com credenciais incorretas", async () => {
  renderApp();
  userEvent.type(screen.getByLabelText("E-mail"), "dio@dio.me");
  userEvent.type(screen.getByLabelText("Senha"), "senhaerrada");
  const button = screen.getByRole("button", { name: "Entrar" });
  await waitFor(() => expect(button).toBeEnabled());
  userEvent.click(button);
  expect(await screen.findByText("E-mail ou senha incorretos")).toBeInTheDocument();
});

test("autentica e faz logout", async () => {
  renderApp();
  userEvent.type(screen.getByLabelText("E-mail"), "dio@dio.me");
  userEvent.type(screen.getByLabelText("Senha"), "123456");
  const button = screen.getByRole("button", { name: "Entrar" });
  await waitFor(() => expect(button).toBeEnabled());
  userEvent.click(button);
  expect(await screen.findByText("Olá, Aluno!")).toBeInTheDocument();
  userEvent.click(screen.getByRole("button", { name: "Sair" }));
  expect(await screen.findByRole("button", { name: "Entrar" })).toBeInTheDocument();
});
