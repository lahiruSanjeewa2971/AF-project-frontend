import React, {useState, useContext} from "react";
import "bootstrap/dist/css/bootstrap.css";
import './CSSs/Header.css';
import {Navbar,  NavDropdown} from 'react-bootstrap';
import {State} from '../../src/components/State'
import {Link} from 'react-router-dom'



function Header() {

    const stateHeader = useContext(State)
    console.log(stateHeader)
  return (
    <div className="main">
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" id="logo" href="/">
                ICAF
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">
                            Home <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            KeyNotes
                        </a>
                    </li>
                    <li class="nav-item">
                    <NavDropdown title="Workshop" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Register</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Workshops</NavDropdown.Item>
                    </NavDropdown>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            Registrations
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            Commiittee
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            Past Proceedings
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            Contact
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            Login|Register
                        </a>
                    </li>
            </ul>
          </div>
        </Navbar>
      
    </div>
  );
}
export default Header;
