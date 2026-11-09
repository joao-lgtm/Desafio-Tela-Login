import Button from "../../components/Button";
import { useAuth } from "../../contexts/auth";
import { Container, LoginContainer, Column, Spacing, Title, Subtitle } from "../Login/styles";

const Home = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Olá, {user?.name.split(" ")[0]}!</Title>
          <Subtitle>Você está autenticado como {user?.email}</Subtitle>
          <Spacing />
          <Button title="Sair" variant="secondary" onClick={signOut} />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Home;
