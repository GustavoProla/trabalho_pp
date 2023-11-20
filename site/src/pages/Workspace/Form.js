import axios from "axios";
import React, { useRef } from "react";
import { toast } from "react-toastify";

const Form = () => {
  const ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.turma.value 
 
    ) {
      return toast.warn("Preencha todos os campos!");
    }
    
      await axios
        .post("http://localhost:8800/adicionar", {
          nome: user.nome.value,
          email: JSON.parse(localStorage.getItem("user_token")).email,
          turma: user.turma.value,
          info: "Nada",
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    
    user.nome.value = "";
    user.turma.value = "";
  
  
  };
  

  return (
    <>
      <form ref={ref} onSubmit={handleSubmit}>
        <label>Nome</label>
        <input name="nome" ></input>
        <label>Turma</label>
        <input name="turma"  ></input>
        <button type="submit">SALVAR</button>
      </form>
      
    </>
  );
};

export default Form;
