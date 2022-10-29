import React, {  useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./auth";
const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  const contextAuth = useContext(AuthContext);
  return (
    <nav className="primary-nav">
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}
      <NavLink style={navLinkStyle} to="/home">
        Home
      </NavLink>{" "}
      {/* have to add home also with / as it is showing always active to the home component */}
      <NavLink style={navLinkStyle} to="/about">
        About
      </NavLink>{" "}
      {/* applied styling to it in the index.js can also do styling by destructring props */}
      <NavLink style={navLinkStyle} to="/products">
        Products
      </NavLink>
      <NavLink style={navLinkStyle} to="/profile">
        Profile
      </NavLink>
      {/* <NavLink style={navLinkStyle} to ="/login">login</NavLink> */}
      {!contextAuth.user && (
        <NavLink style={navLinkStyle} to="/login">
          Login
        </NavLink>
        
      )}
      <NavLink style={navLinkStyle} to= "/users">
          Users
        </NavLink>
    </nav>
  );
};
export default Navbar;
