import { Link } from "react-router-dom";
import { useState } from "react";
import imagemOraculo from "../assets/eye.png"; 

function Entrada() {
  // Estados para armazenar os times selecionadas
  const [Time1, setTime1] = useState("");
  const [Time2, setTime2] = useState("");

  // Lista provisória de times (Mockup para testar a interface)
  const Times = [
    "Palmeiras", "Flamengo","Fluminense", "São Paulo",
    "Athletico Paranaense", "Bahia", "Coritiba", "Botafogo",
    "Bragantino", "Vasco", "Grêmio", "Cruzeiro",
    "Vitória", "Corinthians", "Atlético Mineiro", "Internacional",
    "Santos", "Mirassol", "Remo", "Chapecoense"
  ];

  // Função para lidar com o clique no botão
  const handlePrevisao = (e) => {
    e.preventDefault(); // Evita que a página recarregue
    
    if (Time1 && Time2) {
      // Aqui, futuramente, faremos o envio dos dados para o motor em Python
      alert(`O Oráculo está calculando as probabilidades para: ${Time1} vs ${Time2}!`);
    } else {
      alert("Por favor, selecione os dois times para consultar o Oráculo.");
    }
  };

  return (
    <div style={{ 
      backgroundColor: '#45A465', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '20px' 
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)', 
        marginBottom: '20px'
      }}>Oráculo</h1>

      <p style={{ textAlign: 'center', maxWidth: '600px', marginBottom: '30px' }}>
        O Oráculo vai receber o nome de dois times de futebol e prever o resultado da partida, escanteios e cartões.
      </p>
      
      <img src={imagemOraculo} alt="Logo Oráculo" style={{ maxWidth: '250px', marginBottom: '30px' }} />

      {/* Formulário de Interação */}
      <form onSubmit={handlePrevisao} style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '20px', 
        alignItems: 'center', 
        marginBottom: '40px',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        padding: '20px',
        borderRadius: '10px'
      }}>
        
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Seleção do time 1*/}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontWeight: 'bold', color: '#8b4513', marginBottom: '5px' }}>Time da Casa:</label>
            <select 
              value={Time1} 
              onChange={(e) => setTime1(e.target.value)}
              style={{ padding: '10px', borderRadius: '5px', border: '1px solid #8b4513', fontSize: '1rem' }}
            >
              <option value="">Selecione um time</option>
              {Times.map((time, index) => (
                // Desativa a opção se já estiver selecionada na outra caixa
                <option key={index} value={time} disabled={time === Time2}>{time}</option>
              ))}
            </select>
          </div>

          {/* Seleção do time 2 */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontWeight: 'bold', color: '#8b4513', marginBottom: '5px' }}>Time Visitante:</label>
            <select 
              value={Time2} 
              onChange={(e) => setTime2(e.target.value)}
              style={{ padding: '10px', borderRadius: '5px', border: '1px solid #8b4513', fontSize: '1rem' }}
            >
              <option value="">Selecione um time</option>
              {Times.map((time, index) => (
                // Desativa a opção se já estiver selecionada na outra caixa
                <option key={index} value={time} disabled={time === Time1}>{time}</option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" style={{ 
          padding: '12px 30px', 
          backgroundColor: '#8b4513', 
          color: '#f9e4b7', 
          border: 'none', 
          borderRadius: '5px', 
          fontSize: '1.2rem', 
          fontWeight: 'bold',
          cursor: 'pointer',
          marginTop: '10px'
        }}>
          Consultar o Oráculo
        </button>
      </form>

      <div style={{ marginTop: '10px', fontWeight: 'bold', textAlign: 'center', color: '#5a2d0c' }}>
        <p>Autores:<br/>Gabriel Henrique Fonseca Castro<br/>Gabriel Abreu Miller Godoi</p>
      </div>

      <br/>
      <Link to="/Sobre" style={{ color: '#8b4513', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
        Clique para saber mais
      </Link>
    </div>
  );
}

export default Entrada;