import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <>
    <h1>Cadastro</h1>
    <form>
        <label >Email</label>
        <input type="email" placeholder="Digite seu E-mail" value={email} onChange={(e) => [setEmail(e.target.value), setError("")]}/>
        
        <label >Confirmar Email</label>
        <input type="email" placeholder="Digite seu E-mail" value={emailConf} onChange={(e) => [setEmailConf(e.target.value), setError("")]}/>

    
        <label>Senha</label>
        <input type="password" placeholder="Digite sua Senha" value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]} />

        <label>{error}</label>

        <button type="button" onClick={handleSignup}>Inscrever-se</button>
        
        <label>
        Já tem uma conta?
        <Link to="/">&nbsp;Entre</Link>
        </label>
    </form>
    </>
  );
};

export default Signup;