import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Grid from "./Grid";
import Form from "./Form";
import GlobalStyle from "../../styles/global";


const Workspace = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800/enviar");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
    <h1>Workspace</h1>
    <Link to="/home">&nbsp;Home</Link>
    <button onClick={() => [signout(), navigate("/")]}>Sair</button>

    <div>
      <h1>Alunos</h1>
        <Form  getUsers={getUsers} />
        <Grid  users={users} setUsers={setUsers} />
      </div>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle/>
    </>
    
  );
};

export default Workspace;