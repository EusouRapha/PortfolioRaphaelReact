import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Experience from "./components/pages/Experience";

function App() {
  return (
      <Router>
        <NavBar></NavBar>
        <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Experience" element={<Experience />} />
        </Routes>
        </Container>
        <Footer></Footer>
      </Router>
  );
}

export default App;

