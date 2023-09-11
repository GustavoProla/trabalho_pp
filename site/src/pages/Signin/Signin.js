import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/workspace");
  };




  return (
    <>
    <h1>Login</h1>

    <form>
        <label >Email</label>
        <input type="email" placeholder="Digite seu E-mail" value={email} onChange={(e) => [setEmail(e.target.value), setError("")]}/>

    
        <label>Senha</label>
        <input type="password" placeholder="Digite sua Senha" value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]} />

        <label>{error}</label>

        <button type="button" onClick={handleLogin}>Entrar</button>
        <label>
        Não tem uma conta?
        <Link to="/signup">&nbsp;Registre-se</Link>
        </label>
        <label>
          Deseja entrar como Guest?
          <Link to="/home">&nbsp;Acesse</Link>
        </label>
    </form>
  </>
    
  );
};

export default Signin;