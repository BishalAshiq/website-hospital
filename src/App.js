// src/App.js
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/Home/About/About";
import Navigation from "./Shared/Navigation/Navigation";
import Register from "./Pages/Login/Register/Register";
import Footer from "./Shared/Footer/Footer";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Login from "./Pages/Login/Login/Login";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
