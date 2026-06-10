//Gabriel Henrique Fonseca Castro
//Gabriel Abreu Miller Godoi
import { Link } from "react-router-dom";
import { useState } from "react";
import imagemFundo from "../assets/Campinho.png"; 
import logoOraculo from "../assets/Oraculo.png";

import { BancodeDadosTimes } from "../mockdb";

/**
 * Componente principal da Tela de Entrada (Entrada).
 * Gerencia a lógica de seleção de dois times de futebol, calcula a previsão de resultados
 * com base nos dados estatísticos e renderiza o layout interativo da página inicial do Oráculo.
 */
function Entrada() {
  const [Time1, setTime1] = useState("");
  const [Time2, setTime2] = useState("");
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState("");

  const dadosTime1 = Time1 ? BancodeDadosTimes.find(t => t.nome === Time1) : null;
  const dadosTime2 = Time2 ? BancodeDadosTimes.find(t => t.nome === Time2) : null;

  /**
   * Calcula um índice de força pontual para um determinado time.
   * Utiliza a fórmula simples: (vitórias * 3) + empates - derrotas.
   * 
   * @param {Object} time - Objeto contendo dados do time (vitórias, empates, derrotas).
   * @returns {number} O valor numérico que representa a força/desempenho recente do time.
   */
  const calcularForca = (time) => {
    return time.vitorias * 3 + time.empates - time.derrotas;
  };

  /**
   * Manipula a ação de submissão do formulário para consultar o Oráculo.
   * Valida se os dois times foram selecionados e se são diferentes.
   * Realiza a análise estatística comparando as forças calculadas de cada equipe,
   * define as chances percentuais e gera o feedback em texto do resultado.
   * 
   * @param {Event} e - O evento de envio do formulário.
   */
  const handlePrevisao = (e) => {
    e.preventDefault(); 
    setErro("");
    setResultado(null);

    if (Time1 && Time2) {
      if (Time1 === Time2) {
        setErro("Selecione times diferentes para consultar o Oráculo.");
        return;
      }

      const forca1 = calcularForca(dadosTime1);
      const forca2 = calcularForca(dadosTime2);
      
      const diferenca = Math.abs(forca1 - forca2);
      let mensagem = "";
      let justificativa = "";
      let chance = 0;

      if (diferenca <= 3) {
        mensagem = "O jogo será muito equilibrado, grande chance de empate!";
        justificativa = "A força atual das duas equipes é muito similar.";
        chance = 50;
      } else if (forca1 > forca2) {
        chance = Math.min(50 + diferenca * 2, 95);
        mensagem = `O Oráculo prevê a vitória do ${Time1}!`;
        justificativa = `${Time1} vem fazendo uma campanha superior ao ${Time2} nesta temporada.`;
      } else {
        chance = Math.min(50 + diferenca * 2, 95);
        mensagem = `O Oráculo prevê a vitória do ${Time2}!`;
        justificativa = `${Time2} vem fazendo uma campanha superior ao ${Time1} nesta temporada.`;
      }

      setResultado({
        mensagem,
        chance,
        justificativa
      });

    } else {
      setErro("Por favor, selecione os dois times para consultar o Oráculo.");
    }
  };

  /**
   * Renderiza os sinalizadores visuais circulares com o histórico de jogos recentes de um time.
   * As cores representam: Verde (Vitória - V), Amarelo (Empate - E), Vermelho (Derrota - D).
   * 
   * @param {Array<string>} forma - Array com a sequência recente de resultados (Ex: ['V', 'E', 'D', 'V', 'V']).
   * @returns {JSX.Element} Conjunto de elementos HTML estilizados representando a forma recente.
   */
  const renderFormaRecente = (forma) => {
    if(!forma) {
      return(
        <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }} aria-label="Forma recente não disponível">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} style={{
            width: '25px', height: '25px', 
            backgroundColor: '#e0e0e0', color: '#888', 
            borderRadius: '50%', display: 'flex', 
            alignItems: 'center', justifyContent: 'center',
            fontSize: '0.8rem', fontWeight: 'bold'
          }} aria-hidden="true">-</div>
      ))}
    </div>
      );
    }
  
    return (
      <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }} aria-label={`Forma recente: ${forma.join(', ')}`}>
          {forma.map((resultado, index) => {
            
            let corDeFundo = '#555';
            let corDoTexto = '#fff';
            if (resultado === 'V') corDeFundo = '#28a745';
            if (resultado === 'E') {
              corDeFundo = '#ffc107';
              corDoTexto = '#333';
            }
            if (resultado === 'D') corDeFundo = '#dc3545';

            return (
              <div key={index} style={{
                width: '25px', height: '25px', 
                backgroundColor: corDeFundo, 
                color: corDoTexto, 
                borderRadius: '50%', display: 'flex', 
                alignItems: 'center', justifyContent: 'center',
                fontSize: '0.8rem', fontWeight: 'bold'
              }} title={resultado === 'V' ? 'Vitória' : resultado === 'E' ? 'Empate' : 'Derrota'}>
                {resultado}
              </div>
            )
          })}
        </div>
      );
  };

  /**
   * Formata e exibe de forma concisa as estatísticas de Vitórias, Empates e Derrotas do time selecionado.
   * 
   * @param {Object} dadosTime - Dados estatísticos do time (ou null caso não selecionado).
   * @returns {string} String formatada no padrão "Xv Ye Zd" ou "--" se inválido/nulo.
   */
  const renderVED = (dadosTime) => {
    if (!dadosTime) {
      return "--";
    }

    return `${dadosTime.vitorias}V ${dadosTime.empates}E ${dadosTime.derrotas}D`;
  };

  return (
    <main className="main-container" style={{ backgroundImage: `url(${imagemFundo})` }}>
      
      <header className="header-oraculo">
        <img src={logoOraculo} alt="Logo do Oráculo: Uma bola de cristal de futebol" style={{height: '70px', marginBottom: '10px', display: 'block', margin: '0 auto'}} />
        <h1 style={{ fontSize: '1.8rem', marginBottom: '5px' }}>Oráculo do Futebol</h1>
        <p style={{ margin: 0, fontSize: '1.1rem', opacity: 0.9 }}>
          Selecione os times abaixo para que o Oráculo analise o desempenho recente e preveja o resultado do confronto!
        </p>
      </header>
      
      <section style={{ width: '100%', maxWidth: '900px', marginTop: '30px' }}>
        <form onSubmit={handlePrevisao} style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: '30px'
        }}>
          
          {erro && (
            <div role="alert" style={{
              backgroundColor: '#fff3cd',
              color: '#856404',
              padding: '15px 20px',
              borderRadius: '10px',
              width: '100%',
              maxWidth: '640px',
              textAlign: 'center',
              fontWeight: '600',
              border: '1px solid #ffeeba',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              margin: '0 auto'
            }}>
              <span style={{ fontSize: '1.2rem' }}>⚠️</span>
              <span>{erro}</span>
            </div>
          )}

          <div style={{ 
            display: 'flex', 
            alignItems: 'stretch', 
            justifyContent: 'center',
            gap: '20px',
            width: '100%',
            flexWrap: 'wrap'
          }}>
            
            <article className="time-card">
              <label htmlFor="selectTime1" style={{ color: '#333', marginBottom: '10px', fontWeight: 'bold', fontSize: '1.2rem' }}>Time da casa:</label>
              <select 
                id="selectTime1"
                className="select-oraculo"
                value={Time1} 
                onChange={(e) => {
                  setTime1(e.target.value);
                  setResultado(null);
                  setErro("");
                }}
              >
                <option value="">Selecione um time...</option>
                {BancodeDadosTimes.map((time) => (
                  <option key={time.id} value={time.nome} disabled={time.nome === Time2}>
                    {time.nome}
                  </option>
                ))}
              </select>
              
              <p style={{ color: '#555', margin: '10px 0 5px 0', fontSize: '0.9rem' }}>Nesta temporada:</p>
              <p aria-label={dadosTime1 ? `Estatísticas da temporada: ${dadosTime1.vitorias} vitórias, ${dadosTime1.empates} empates e ${dadosTime1.derrotas} derrotas` : "Nenhum time selecionado"} style={{ color: '#111', margin: '0 0 15px 0', fontSize: '2.2rem', fontWeight: 'bold' }}>{renderVED(dadosTime1)}</p>
              
              <p style={{ color: '#555', margin: 0, fontSize: '0.9rem' }}>Forma Recente:</p>
              {renderFormaRecente(dadosTime1?.formaRecente)}
            </article>

            <div style={{
              width: '60px', height: '60px',
              backgroundColor: '#ffc107',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2rem', fontWeight: 'bold', color: '#333',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              alignSelf: 'center'
            }} aria-hidden="true">
              X
            </div>

            <article className="time-card">
              <label htmlFor="selectTime2" style={{ color: '#333', marginBottom: '10px', fontWeight: 'bold', fontSize: '1.2rem' }}>Time visitante:</label>
              <select 
                id="selectTime2"
                className="select-oraculo"
                value={Time2} 
                onChange={(e) => {
                  setTime2(e.target.value);
                  setResultado(null);
                  setErro("");
                }}
              >
                <option value="">Selecione um time...</option>
                {BancodeDadosTimes.map((time) => (
                  <option key={time.id} value={time.nome} disabled={time.nome === Time1}>
                    {time.nome}
                  </option>
                ))}
              </select>

              <p style={{ color: '#555', margin: '10px 0 5px 0', fontSize: '0.9rem' }}>Nesta temporada:</p>
              <p aria-label={dadosTime2 ? `Estatísticas da temporada: ${dadosTime2.vitorias} vitórias, ${dadosTime2.empates} empates e ${dadosTime2.derrotas} derrotas` : "Nenhum time selecionado"} style={{ color: '#111', margin: '0 0 15px 0', fontSize: '2.2rem', fontWeight: 'bold' }}>{renderVED(dadosTime2)}</p>

              <p style={{ color: '#555', margin: 0, fontSize: '0.9rem' }}>Forma Recente:</p>
              {renderFormaRecente(dadosTime2?.formaRecente)}
            </article>

          </div>

          <button type="submit" className="btn-oraculo">
            Consultar o Oráculo
          </button>
        </form>

        {resultado && (
          <div className="resultado-card" role="status" aria-live="polite">
            <h2 style={{ color: '#2c6d42', marginBottom: '15px', fontSize: '1.8rem' }}>Resultado da Previsão</h2>
            <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
              {resultado.mensagem}
            </p>
            {resultado.chance > 0 && (
              <div style={{ marginBottom: '20px' }}>
                <p style={{ fontSize: '1.2rem', color: '#2c6d42', marginBottom: '8px', fontWeight: 'bold' }}>
                  Chance estimada: {resultado.chance}%
                </p>
                <div style={{
                  width: '100%',
                  maxWidth: '400px',
                  backgroundColor: '#e9ecef',
                  borderRadius: '10px',
                  height: '12px',
                  margin: '0 auto',
                  overflow: 'hidden',
                  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
                }}>
                  <div style={{
                    width: `${resultado.chance}%`,
                    backgroundColor: '#2c6d42',
                    backgroundImage: 'linear-gradient(45deg, #2c6d42 0%, #45a465 100%)',
                    height: '100%',
                    borderRadius: '10px',
                    transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                  }} />
                </div>
              </div>
            )}
            <p style={{ fontSize: '1.1rem', color: '#555', fontStyle: 'italic', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ffc107' }}>
              {resultado.justificativa}
            </p>
          </div>
        )}
      </section>

      <footer style={{ marginTop: '50px', marginBottom: '20px' }}>
        <Link to="/Sobre" className="btn-sobre-pill">
          Sobre o Projeto
        </Link>
      </footer>
    </main>
  );
}

export default Entrada;