import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import { login } from "../../services/auth";
import { Form, Container } from "./styles";
const SignIn = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();

  async function handleSignIn(e) {
    e.preventDefault();
    if (!usuario || !senha) {
      alert("Preencha e-mail e senha para continuar!");
    } else {
      try {
        console.log("try entrou asnodhdallkdasçda")
        const response = await api.post("/sign-in", {
          username: usuario,
          password: senha,
        });
        console.log(response.data)
        login(response.data);
        console.log("pos login")
        history.push("/home");
      } catch (err) {
        console.log("bollcate entrou asnodhdallkdasçda")
        alert("Houve um problema com o login, verifique suas credenciais. T.T");
      }
    }
  }
  return (
    <Container>
    <Form onSubmit={handleSignIn}>
      <input
        data-testid="userName"
        type="text"
        placeholder="Nome de usuário"
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        data-testid="userPassword"
        type="password"
        placeholder="Senha"
        onChange={(e) => setSenha(e.target.value)}
      />
      <button data-testid="loginButton" type="submit">Entrar</button>
      <hr />
      <Link to="/signup">Criar Conta</Link>
    </Form>
  </Container>
  );
};
export default SignIn;
