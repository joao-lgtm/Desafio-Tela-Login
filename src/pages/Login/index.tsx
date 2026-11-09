import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { useAuth } from "../../contexts/auth";
import { AuthError } from "../../services/auth";

import { Container, LoginContainer, Column, Spacing, Title, Subtitle, FormAlert, Hint } from "./styles";
import { defaultValues, IFormLogin } from "./types";
import { loginSchema } from "./schema";

const Login = () => {
  const { signIn } = useAuth();
  const [authError, setAuthError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<IFormLogin>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues,
  });

  const onSubmit: SubmitHandler<IFormLogin> = async (data) => {
    setAuthError(null);
    try {
      await signIn(data);
    } catch (error) {
      setAuthError(
        error instanceof AuthError
          ? error.message
          : "Não foi possível entrar. Tente novamente."
      );
    }
  };

  return (
    <Container>
      <LoginContainer>
        <Column as="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Title>Login</Title>
          <Subtitle>Acesse sua conta para continuar</Subtitle>
          <Spacing />

          {authError && <FormAlert role="alert">{authError}</FormAlert>}

          <Input<IFormLogin>
            name="email"
            label="E-mail"
            type="email"
            placeholder="seu@email.com"
            autoComplete="email"
            control={control}
            errorMessage={errors.email?.message}
          />
          <Spacing />
          <Input<IFormLogin>
            name="password"
            label="Senha"
            type="password"
            placeholder="Sua senha"
            autoComplete="current-password"
            control={control}
            errorMessage={errors.password?.message}
          />
          <Spacing />
          <Button
            type="submit"
            title="Entrar"
            disabled={!isValid}
            loading={isSubmitting}
          />
          <Hint>
            Usuário de teste: <strong>dio@dio.me</strong> / <strong>123456</strong>
          </Hint>
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
