import "./App.css";
import Header from "./Layout/Header/Header.js";
import Hero from "./Components/Hero/Hero.js";
import About from "./Components/About/About.js";
import Team from "./Components/Team/Team.js";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Team />
    </div>
  );
}

export default App;
