import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import './CSSs/Header.css';

export default function NavBar(){
    return(
        <div>
            <Navbar bg="light" expand="lg">
            <a class="navbar-brand" id="logo" href="/">
                ICAF
            </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={{fontFamily: 'monospace', fontSize: '24px'}}>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Workshop" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/registerworkshop">Register</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Workshops</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}