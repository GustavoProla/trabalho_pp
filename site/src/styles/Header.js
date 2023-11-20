import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';

const Header = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();
  
    const headerStyle = {
      backgroundColor: '#734E4E',
      padding: '20px',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.4)', // Sombra suave
    marginBottom: '20px', // Espaçamento na parte inferior
    
    };
  
    const linkStyle = {
      marginRight: '30px',
      textDecoration: 'none',
      color: '#fff',
      fontSize: '16px',
    };
  
    const botaoStyle = {
      backgroundColor: '#734E4E',
      color: '#ffffff',
      border: '2px solid #734E4E',
      cursor: 'pointer',
      fontSize: '16px',
      marginRight: '30px',
      marginLeft: '120px',
    };
  
    const estiloParagrafo = {
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: '#ffffff',
      margin: 0,
      padding: 0,
      fontSize: '2em',
      lineHeight: 1.5,
      marginLeft: '48vh'
    };
  
    return (
      <div style={headerStyle}>
        <button
          style={botaoStyle}
          onClick={() => [signout(), navigate("/")]}
        >
          Sair
        </button>
        <Link to="/workspace" style={linkStyle}>&nbsp;Workspace</Link>
        <Link to="/home" style={linkStyle}>&nbsp;Home</Link>
        <p style={estiloParagrafo}>PsyManage</p>
      </div>
    );
  };
export default Header;