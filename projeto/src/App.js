import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Experience from "./components/pages/Experience";
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Tecnology from "./components/pages/Tecnology";

function App() {
  return (
      <Router>
        <NavBar></NavBar>
        <Container customClass="min-height">
        <Routes>
          <Route path="/PortfolioRaphaelReact" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Contact/" element={<Contact />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Tecnology" element={<Tecnology />} />
        </Routes>
        </Container>
        <Footer></Footer>
      </Router>
  );
}

export default App;

