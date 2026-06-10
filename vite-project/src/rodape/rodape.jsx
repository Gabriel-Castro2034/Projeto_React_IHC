//Gabriel Henrique Fonseca Castro
//Gabriel Abreu Miller Godoi
import { Link } from "react-router-dom";

/**
 * Componente funcional do Rodapé (Rodape).
 * Renderiza a seção inferior (footer) global de todas as telas,
 * contendo a identificação dos autores do projeto e um atalho de navegação para a página "Sobre".
 */
function Rodape() {
  return (
    <footer className="rodape-global">
      <div className="rodape-content">
        <div className="autores">
          <p><strong>Autores:</strong></p>
          <p>Gabriel Henrique Fonseca Castro</p>
          <p>Gabriel Abreu Miller Godoi</p>
        </div>
        
        <nav className="rodape-links">
          <Link to="/Sobre">SOBRE</Link>
        </nav>
      </div>
      <p className="copyright">Projeto IHC</p>
    </footer>
  );
}

export default Rodape;