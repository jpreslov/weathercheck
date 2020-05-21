import React, { useState, useEffect } from "react";
import { Button, Navbar } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

let Header = () => {
 

  return (
    <React.Fragment>
      <Navbar bg="light">
        <Navbar.Brand href="#home">Weathercheck</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          
        </Navbar.Collapse>
      
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
