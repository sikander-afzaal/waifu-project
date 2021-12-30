import "./App.css";
import Header from "./Layout/Header/Header.js";
import Hero from "./Components/Hero/Hero.js";
import About from "./Components/About/About.js";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
