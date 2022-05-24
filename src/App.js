import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/Home/About/About";
import Navigation from "./Shared/Navigation/Navigation";
import Contacts from "./Pages/Contacts/Contacts";
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contacts/>}/>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
