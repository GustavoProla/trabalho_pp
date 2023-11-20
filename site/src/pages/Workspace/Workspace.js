import React from "react";


import { useEffect, useState,useRef } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Grid from "./Grid";
import Form from "./Form";
import GlobalStyle from "../../styles/global";
import Header from "../../styles/Header";
import Damn from "../../styles/Damn";

const Workspace = () => {
 
  
  const [users, setUsers] = useState([]);
  const ref = useRef();
  

  const getUsersNew = async (email) => {
  
    const user = ref.current;
    const turma = user.turma.value
    try {
      // Adicione os parâmetros 'turma' e 'email' à URL da solicitação
      const res = await axios.get(`http://localhost:8800/enviar?turma=${turma}&email=${email}`);
      
      // Atualize o estado com os dados filtrados por turma e email
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error.message);
    }
    
  };
  const getUsers = async (email) => {
      
        try {
          
          const res = await axios.get(`http://localhost:8800/enviarall?email=${email}`);
          
          setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
        } catch (error) {
          toast.error(error.message);
        }
    }; 
  
    



  useEffect(() => {getUsers();}, [setUsers])
  useEffect(() => {getUsersNew();}, [setUsers])
  
 
  return (
    
    <>
    <Header/>
    
    <h1>Workspace</h1>
    

    <div>
      <h1>Alunos</h1>
      <button type="button" onClick={() => getUsers(JSON.parse(localStorage.getItem("user_token")).email)}>Carregar</button>
      
      <form ref={ref}  >
        <input name="turma" ></input>
        <button type="button" onClick={()=>getUsersNew(JSON.parse(localStorage.getItem("user_token")).email)} >Filtrar</button>
      </form>
      
      


        <Form />
        <Grid  users={users} setUsers={setUsers} />
      </div>
      
      <GlobalStyle/>
    </>
    
  );
};

export default Workspace;