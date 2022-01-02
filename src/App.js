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
import Collection from "./Components/Collection/Collection.js";
import Powered from "./Components/Powered/Powered.js";
import Launch from "./Components/Launch/Launch.js";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Collection />
      <Roadmap />
      <Launch />
      <Team />
      <Faq />
      <Powered />
      <Gang />
      <Footer />
    </div>
  );
}

export default App;
