import { Link } from "react-router-dom";
import { useState } from "react";
import imagemOraculo from "../assets/eye.png"; 

function Entrada() {

  return (
    <div style={{ 
      backgroundColor: '#f9e4b7', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '20px' 
    }}>
      <h1 style={{ 
        fontSize: '4rem', 
        fontFamily: 'serif', 
        textAlign: 'center', 
        color: '#8b4513', 
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)', 
        marginBottom: '20px' 
      }}>Oráculo</h1>

      <p>O Oráculo vai receber o nome de dois times de futebol e prever o resultado da partida, escanteios e cartões </p>
      
      {/* Imagem*/}
      <img src={imagemOraculo} alt="Logo Oráculo" style={{ maxWidth: '300px', marginBottom: '1px' }} />

      {/* Gabriel Henrique Fonseca Castro*/}
      {/* Gabriel Abreu Miller Godoi*/}
      <div style={{ marginTop: '20px', fontWeight: 'bold', textAlign: 'center' }}>
        <p>Autores:<br/>Gabriel Henrique Fonseca Castro<br/> Gabriel Abreu Miller Godoi
        </p>
      </div>

      <br/>
      <Link to="/Sobre" style={{ color: '#8b4513', textDecoration: 'none', fontWeight: 'bold' }}>Clique para saber mais</Link>
    </div>
  );
}

export default Entrada;