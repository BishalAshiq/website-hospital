import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/Home/About/About";
import Navigation from "./Shared/Navigation/Navigation";
import Footer from "./Shared/Footer/Footer";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Login from "./Pages/Login/Login/Login";
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
