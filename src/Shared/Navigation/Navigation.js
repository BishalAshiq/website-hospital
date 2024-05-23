import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import logo from "../../Images/Frame 1.png";
import { Button } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

const Navigation = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div>
      <div className="navigation">
        <Link to="/">
          <img className="img-nav" src={logo} alt="" />
        </Link>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <nav className="nav-right">
            <Link to="/">Home</Link>
            <Link to="/about">Hospital</Link>
           <div>
           {isLoggedIn ? (
              <span className="logout-text" onClick={logout}>Logout</span>
            ) : (
              <NavLink to="/login">
                <span className="logout-text">Login</span>
              </NavLink>
            )}
           </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
