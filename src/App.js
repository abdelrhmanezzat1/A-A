import "./app.scss";
import About from "./components/About/About";
import Home from "./components/HeroSection/Home";
import Navbar from "./components/Navbar/Navbar";
import ProJects from "./components/projgects/ProJects";
import Testmonials from "./components/Testmonials/Testmonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ToggleMode from "./components/toggleMode/ToggleMode";
import { useContext } from "react";
import { darkTheme } from "./Toggle";
function App() {
  const Mode = useContext(darkTheme);
  const toggle = Mode.state.dark;
  return (
    <div className={toggle ? "app Dark" : "app"}>
      <ToggleMode />
      <Navbar />
      <Home />
      <About />
      <ProJects />
      <Testmonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
