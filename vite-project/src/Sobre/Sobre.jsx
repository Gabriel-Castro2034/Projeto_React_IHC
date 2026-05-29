//Gabriel Henrique Fonseca Castro
//Gabriel Abreu Miller Godoi
import { Link } from "react-router-dom";

function Sobre() {
  return (
    <main style={{
      backgroundColor: '#f4f7f6',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div className="sobre-card">
        <h1 style={{ color: '#2c6d42', borderBottom: '2px solid #2c6d42', paddingBottom: '10px', marginBottom: '20px' }}> 
          Sobre o Oráculo 1.0
        </h1>
        
        <section style={{ marginBottom: '20px', color: '#444', lineHeight: '1.6' }}>
          <h2 style={{ fontSize: '1.2rem', color: '#333' }}>Objetivo</h2>
          <p>
            O Oráculo 1.0 é um sistema preditivo lúdico focado em estimar resultados de partidas de futebol com base no desempenho atual das equipes.
          </p>
          
          <h2 style={{ fontSize: '1.2rem', color: '#333', marginTop: '15px' }}>Proposta de IHC (Interação Humano-Computador)</h2>
          <p>
            Este projeto visa aplicar princípios fundamentais de IHC, incluindo <strong>acessibilidade</strong> (uso de cores contrastantes, labels adequados e navegação por teclado), <strong>clareza e feedback</strong> (mensagens de erro amigáveis e resultados explicativos em vez de alertas intrusivos) e <strong>estética moderna</strong> (design responsivo e limpo, sem poluição visual).
          </p>

          <h2 style={{ fontSize: '1.2rem', color: '#333', marginTop: '15px' }}>Autores</h2>
          <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
            <li>Gabriel Henrique Fonseca Castro</li>
            <li>Gabriel Abreu Miller Godoi</li>
          </ul>
        </section>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/" className="btn-voltar">
            ← Voltar para a Tela Inicial
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Sobre;