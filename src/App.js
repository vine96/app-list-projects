import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
     <>
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/empresa">Empresa</Link>
        <Link to="/novoprojeto">Novo Projeto</Link>
     </>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/empresa" element={<Company/>}/>
          <Route path="/contato" element={<Contact/>}/>
          <Route path="/novoprojeto" element={<NewProject/>}/>
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
