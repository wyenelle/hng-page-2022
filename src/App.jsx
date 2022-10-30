import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/Home/Home";
import Logo from "./components/picture/picture";

function App() {
  return (
    <div className="App">
      
      <div className="App-sec">
        <Home />
        <Logo />
      </div>

      <Footer />
    </div>
  );
}

export default App;
