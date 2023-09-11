import React from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const Grid = ({ users, setUsers }) => {

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/deletar" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

  };

  return (  
    <>
      <table>
        <thead>
          <tr>
          <th>Nome</th>
            <th>Email</th>
            <th >Fone</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {users.map((item, i) => (
            <tr key={i}>
              <td>{item.nome}</td>
              <td>{item.email} </td>
              <td>{item.fone}</td>
              <td><FaTrash onClick={() => handleDelete(item.id)}/></td>
            </tr>))}
        </tbody>
      </table>
    </>
    
  );
};

export default Grid;