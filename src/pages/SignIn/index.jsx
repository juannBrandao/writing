import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";
import { login } from "../../services/auth";

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
        const response = await api.post("/sign-in", {
          username: usuario,
          password: senha,
        });
        login(response.data);
        history.push("/home");
      } catch (err) {
        alert("Houve um problema com o login, verifique suas credenciais. T.T");
      }
    }
  }
  return (
    <div>
      <form onSubmit={handleSignIn}>
        <input
          type="text"
          placeholder="Usuário"
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Entrar</button>
        <Link to="/signup">Criar conta grátis</Link>
      </form>
    </div>
  );
};
export default SignIn;
