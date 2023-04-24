import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Container from "./layout/Container";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import Projects from "./components/Projects";

function App() {
  return (
      <Router>
        <NavBar></NavBar>
        <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
        </Container>
        <Footer></Footer>
      </Router>
  );
}

export default App;

