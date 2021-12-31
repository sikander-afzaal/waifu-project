import React, { useEffect } from "react";
import "./App.css";
import Header from "./Layout/Header/Header.js";
import Footer from "./Layout/Footer/Footer.js";
import Hero from "./Components/Hero/Hero.js";
import About from "./Components/About/About.js";
import Roadmap from "./Components/Roadmap/Roadmap.js";
import Team from "./Components/Team/Team.js";
import Faq from "./Components/FAQ/Faq.js";
import Gang from "./Components/Gang/Gang.js";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Roadmap />
      <Team />
      <Faq />
      <Gang />
      <Footer />
    </div>
  );
}

export default App;
