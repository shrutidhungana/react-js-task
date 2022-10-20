import React from "react";
import { Link } from "react-router-dom";
import { Nav, List } from "./NavbarStyles";
import "./Navbar.css";

const NavBar = () =>{

  

  return (
    <Nav>
      <List>
        
          <div>
            <li>
              <Link to="/">Table</Link>
            </li>
          </div>
        
    
          <div>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
              </div>
          </List>
          </Nav>
              )
  }
        

export default NavBar;