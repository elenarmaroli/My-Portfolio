import Navbar from "./components/Navbar.jsx";
import "./App.css";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import ArrowUp from "./components/ArrowUp.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Work />
      <Contact />
      <ArrowUp />
      <Footer />
    </div>
  );
}

export default App;
