import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/Home/About/About";
import Navigation from "./Pages/Navigation/Navigation";
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
