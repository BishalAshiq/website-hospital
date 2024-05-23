import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import logo from "../../Images/Frame 1.png";
import { Button } from "@mui/material";
const Navigation = () => {
  return (
    <div >
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
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">Hospital</Link>
          <NavLink to="/login"><Button color="inherit">Login</Button></NavLink>
        </nav>
      </div>
   </div>
    </div>
  );
};

export default Navigation;
