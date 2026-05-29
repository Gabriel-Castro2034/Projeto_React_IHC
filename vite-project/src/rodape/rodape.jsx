//Gabriel Henrique Fonseca Castro
//Gabriel Abreu Miller Godoi
import { Link } from "react-router-dom";

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