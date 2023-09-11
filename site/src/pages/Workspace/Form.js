import axios from "axios";
import React, { useRef } from "react";
import { toast } from "react-toastify";

const Form = ({ getUsers }) => {
  const ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.fone.value ||
      !user.data_nascimento.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }
    
      await axios
        .post("http://localhost:8800/adicionar", {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    

    user.nome.value = "";
    user.email.value = "";
    user.fone.value = "";
    user.data_nascimento.value = "";

    getUsers();
  };

  return (
    <>
      <form ref={ref} onSubmit={handleSubmit}>
        <label>Nome</label>
        <input name="nome" ></input>
        <label>E-mail</label>
        <input name="email" type="email" ></input>
        <label>Telefone</label>
        <input name="fone" ></input>
        <label>Data de Nascimento</label>
        <input name="data_nascimento" type="date" ></input>

        <button type="submit">SALVAR</button>
      </form>
    </>
  );
};

export default Form;
