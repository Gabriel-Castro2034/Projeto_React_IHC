# Oráculo do Futebol (Oráculo 1.0)

O **Oráculo do Futebol** é um sistema preditivo lúdico e interativo voltado para estimar os resultados de partidas de futebol com base no desempenho histórico e recente das equipes da temporada. 

Este projeto foi desenvolvido como parte de estudos práticos na disciplina de **Interação Humano-Computador (IHC)** na Universidade Federal de Ouro Preto (UFOP), com foco na criação de interfaces centradas no usuário, acessibilidade, feedbacks claros e estética moderna.

---

## 🚀 Proposta de IHC (Interação Humano-Computador)

O projeto foi projetado e polido adotando princípios fundamentais de usabilidade, prevenção de erros e design acessível:

- **Prevenção Ativa de Erros:** O sistema impede que o usuário selecione o mesmo time nas duas opções de confronto, desabilitando dinamicamente a opção correspondente e emitindo avisos explicativos para guiar a interação.
- **Clareza de Estados:** Antes de selecionar um time, a interface adota estados inativos claros (ex: marcadores `--` e círculos cinzas neutros para a forma recente), evitando a exibição de dados falsificados (como `0V 0E 0D`) que poderiam confundir o usuário.
- **Acessibilidade:**
  - Plena conformidade de contraste de cores (WCAG AA), incluindo textos pretos sobre fundos claros e legibilidade otimizada nos círculos de resultados (como texto escuro `#333` sobre a cor de empate `#ffc107`).
  - Associação semântica entre os elementos de formulário (`htmlFor` e `id` nos seletores).
  - Tags de leitura aprimorada (`aria-label`) expandindo abreviações para leitores de tela, convertendo exibições compactas como `10V 5E 3D` em uma locução natural: *"10 vitórias, 5 empates e 3 derrotas"*.
- **Feedback Visual & Semântico:** 
  - Alertas de aviso e erro estilizados de forma acolhedora (âmbar) e acompanhados de ícones informativos (⚠️).
  - Exibição de resultados em tempo real de forma inline e animada (`fadeIn`), extinguindo o uso de pop-ups intrusivos do navegador (`alert()`).
  - Representação gráfica intuitiva de chances estimada usando uma elegante barra de progresso pura com gradientes e transições CSS de preenchimento.
- **Estética e Responsividade (Mobile First):** Aplicação universal de `box-sizing: border-box`, layouts flexíveis e transições interativas de hover (`translateY`) e foco que se adaptam perfeitamente a dispositivos móveis e desktops.

---

## 🛠️ Tecnologias Utilizadas

- **Core:** [React 19](https://react.dev/) & [Vite](https://vite.dev/) (para compilação e empacotamento rápido).
- **Roteamento:** [React Router DOM](https://reactrouter.com/) (gerenciamento de navegação).
- **Estilização:** Vanilla CSS (estilos focados e integrados para total responsividade).

---

## 📋 Funcionalidades Principais

1. **Seleção de Confrontos:** Seletores para escolher o Time da Casa (Mandante) e o Time Visitante.
2. **Visualização de Estatísticas:** Cards interativos que exibem em tempo real as vitórias, empates e derrotas do time na temporada atual.
3. **Indicador de Forma Recente:** Sequência visual dos últimos 5 jogos da equipe (Vitória - V, Empate - E, Derrota - D) coloridos por semântica de desempenho.
4. **Consulta ao Oráculo:** Processamento instantâneo da força relativa entre os times, gerando previsões lúdicas com justificativa técnica.
5. **Painel de Resultados:** Feedback visual animado contendo a previsão do vencedor (ou empate), chance estimada de sucesso e barra de progresso temática.
6. **Seção Educativa:** Tela institucional "Sobre" detalhando o objetivo do projeto, a fundamentação teórica de IHC e as especificações acadêmicas.

---

## ⚙️ Estrutura de Diretórios e Instalação

O projeto possui a seguinte estrutura básica:
- `README.md` (Este arquivo explicativo na raiz).
- `package.json` (Dependências básicas de roteamento na raiz).
- `vite-project/` (Diretório onde reside **toda a aplicação ativa**, código-fonte do React/Vite, estilos CSS e scripts de compilação).

> [!IMPORTANT]  
> Para instalar, rodar em desenvolvimento ou gerar builds do projeto, **você deve navegar até o subdiretório `vite-project/`** antes de executar os comandos do terminal.

### 🔌 Passo a Passo para Instalação e Execução:

1. **Acesse a pasta do projeto React:**
   ```bash
   cd vite-project
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento local:**
   ```bash
   npm run dev
   ```
   *Após iniciar, o terminal indicará o endereço local do servidor (geralmente `http://localhost:5173`).*

4. **Gerar build de produção:**
   ```bash
   npm run build
   ```
   *Este comando gerará a pasta `dist/` otimizada para implantação.*

---

## 👥 Autores

- **Gabriel Henrique Fonseca Castro**
- **Gabriel Abreu Miller Godoi**
