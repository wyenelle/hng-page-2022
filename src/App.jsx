import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/Home/Home";
import {Routes,Route} from 'react-router-dom'
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
