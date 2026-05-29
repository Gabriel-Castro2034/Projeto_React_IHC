//Gabriel Henrique Fonseca Castro
//Gabriel Abreu Miller Godoi
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Entrada from "./Entrada/Entrada";
import Sobre from "./Sobre/Sobre";
import Rodape from "./rodape/rodape";

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