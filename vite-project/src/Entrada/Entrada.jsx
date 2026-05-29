//Gabriel Henrique Fonseca Castro
//Gabriel Abreu Miller Godoi
import { Link } from "react-router-dom";
import { useState } from "react";
import imagemFundo from "../assets/Campinho.png"; 
import logoOraculo from "../assets/Oraculo.png";

import { BancodeDadosTimes } from "../mockdb";


/*function win_condition(time){

}*/

function Entrada() {
  const [Time1, setTime1] = useState("");
  const [Time2, setTime2] = useState("");

  const dadosTime1 = Time1 ? BancodeDadosTimes.find(t => t.nome === Time1) : null;
  const dadosTime2 = Time2 ? BancodeDadosTimes.find(t => t.nome === Time2) : null;


  const handlePrevisao = (e) => {
    e.preventDefault(); 
    if (Time1 && Time2) {
      //https://www.mat.ufmg.br/futebol/matematica/
      const p = Math.floor(Math.random() * (100 - 51 + 1)) + 51;;
      const p_final = Math.floor(Math.random() * (100 - 51 + 1)) + 51;
      if(p_final) {
        alert(`O Oráculo prevê chance de ${p}% vitória do ${Time1} sobre o ${Time2}!`);
      } else {
        alert(`O Oráculo prevê chance de ${p}% de vitória do ${Time2} sobre o ${Time1}!`);
      }
    } else {
      alert("Por favor, selecione os dois times para consultar o Oráculo.");
    }
  };

  // Função auxiliar para renderizar as bolinhas da forma recente
  const renderFormaRecente = (forma) => {
    if(!forma) {
      return(
        <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} style={{
            width: '25px', height: '25px', 
            backgroundColor: '#2c6d42', color: '#fff', 
            borderRadius: '50%', display: 'flex', 
            alignItems: 'center', justifyContent: 'center',
            fontSize: '0.8rem', fontWeight: 'bold'
          }}>-</div>
      ))}
    </div>
      );
    }
  
    return (
      <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
          {forma.map((resultado, index) => {
            
            let corDeFundo = '#555';
            if (resultado === 'V') corDeFundo = '#28a745';
            if (resultado === 'E') corDeFundo = '#ffc107';
            if (resultado === 'D') corDeFundo = '#dc3545';

            return (
              <div key={index} style={{
                width: '25px', height: '25px', 
                backgroundColor: corDeFundo, 
                color: '#fff', 
                borderRadius: '50%', display: 'flex', 
                alignItems: 'center', justifyContent: 'center',
                fontSize: '0.8rem', fontWeight: 'bold'
              }}>
                {resultado}
              </div>
            )
          })}
        </div>
      );
  };

  const renderVED = (dadosTime) => {
    if (!dadosTime) {
      return "0V 0E 0D";
    }

    return `${dadosTime.vitorias}V ${dadosTime.empates}E ${dadosTime.derrotas}D`;
  };

  return (
    <div style={{ 
      backgroundImage: `url(${imagemFundo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'space-between', // Distribui os itens pela tela
      padding: '20px' 
    }}>
      
      {/* Cabeçalho */}
      <div style={{
        backgroundColor: '#2c6d42',
        padding: '20px 40px',
        borderRadius: '10px',
        color: '#ffffff',
        textAlign: 'center',
        marginTop: '20px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
      }}>
        <img src={logoOraculo} alt="Logo do Oráculo" style={{height: '70px', marginBottom: '10px', display: 'block', margin: '0 auto'}} />
        <p style={{ margin: 0, fontSize: '1.1rem' }}>
          Insira os times e preveja todas as estatísticas do jogo!
        </p>
      </div>
      
      {/* Formulário de Interação */}
      <form onSubmit={handlePrevisao} style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        gap: '40px',
        width: '100%',
        maxWidth: '900px'
      }}>
        
        {/* Container dos Cartões e do X */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '20px',
          width: '100%',
          flexWrap: 'wrap'
        }}>
          
          {/* Cartão Time 1 (Casa) */}
          <div style={{ 
            backgroundColor: '#8cb89f9d',
            padding: '30px', 
            borderRadius: '15px',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            width: '280px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}>
            <h2 style={{ color: '#000', marginBottom: '20px' }}>Time da casa:</h2>
            <select 
              value={Time1} 
              onChange={(e) => setTime1(e.target.value)}
              style={{ 
                padding: '12px', borderRadius: '8px', 
                backgroundColor: '#2c6d42', color: '#fff', 
                border: 'none', width: '100%', fontSize: '1rem',
                marginBottom: '20px'
              }}
            >
              <option value="">Selecione um time...</option>
              {BancodeDadosTimes.map((time) => (
                <option key={time.id} value={time.nome} disabled={time.nome === Time2}>
                  {time.nome}
                </option>
              ))}
            </select>
            
            <p style={{ color: '#000', margin: '10px 0 5px 0' }}>Nesta temporada:</p>
            <h1 style={{ color: '#000', margin: '0 0 15px 0', fontSize: '2.5rem' }}>{renderVED(dadosTime1)}</h1>
            
            <p style={{ color: '#000', margin: 0 }}>Forma Recente:</p>
            {renderFormaRecente(dadosTime1?.formaRecente)}
          </div>

          {/* O separador em "X" */}
          <div style={{
            width: '80px', height: '80px',
            backgroundColor: '#8cb89f9d',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '3rem', fontWeight: 'bold', color: '#000',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}>
            X
          </div>

          {/* Cartão Time 2 (Visitante) */}
          <div style={{ 
            backgroundColor: '#8cb89f9d', 
            padding: '30px', 
            borderRadius: '15px',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            width: '280px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}>
            <h2 style={{ color: '#000', marginBottom: '20px' }}>Time visitante:</h2>
            <select 
              value={Time2} 
              onChange={(e) => setTime2(e.target.value)}
              style={{ 
                padding: '12px', borderRadius: '8px', 
                backgroundColor: '#2c6d42', color: '#fff', 
                border: 'none', width: '100%', fontSize: '1rem',
                marginBottom: '20px'
              }}
            >
              <option value="">Selecione um time...</option>
              {BancodeDadosTimes.map((time) => (
                <option key={time.id} value={time.nome} disabled={time.nome === Time1}>
                  {time.nome}
                </option>
              ))}
            </select>

            <p style={{ color: '#000', margin: '10px 0 5px 0' }}>Nesta temporada:</p>
            <h1 style={{ color: '#000', margin: '0 0 15px 0', fontSize: '2.5rem' }}>{renderVED(dadosTime2)}</h1>

            
            <p style={{ color: '#000', margin: 0 }}>Forma Recente:</p>
            {renderFormaRecente(dadosTime2?.formaRecente)}
          </div>

        </div>

        {/* Botão de Submeter */}
        <button type="submit" style={{ 
          padding: '15px 40px', 
          backgroundColor: '#2c6d42', 
          color: '#ffffff', 
          border: 'none', 
          borderRadius: '8px', 
          fontSize: '1.3rem', 
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          marginBottom: '30px'
        }}>
          Consultar o Oráculo
        </button>
      </form>
    </div>
  );
}

export default Entrada;