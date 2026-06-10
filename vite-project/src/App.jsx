//Gabriel Henrique Fonseca Castro
//Gabriel Abreu Miller Godoi
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Entrada from "./Entrada/Entrada";
import Sobre from "./Sobre/Sobre";
import Rodape from "./rodape/rodape";

/**
 * Componente principal da aplicação (App).
 * Define a estrutura de rotas do projeto utilizando o `react-router-dom`.
 * Mapeia o caminho "/" para a tela de Entrada e "/Sobre" para a tela Sobre.
 * O componente de rodapé global (Rodape) é exibido em todas as páginas.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entrada />} />
        <Route path="/Sobre" element={<Sobre />} />
      </Routes>
      <Rodape />
    </BrowserRouter> 
  ); 
}

export default App;