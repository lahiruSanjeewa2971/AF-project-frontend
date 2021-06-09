import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
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
            <Nav className="mr-auto" style={{fontFamily: 'monospace', fontSize: '22px'}}>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">KeyNotes</Nav.Link>
                <NavDropdown title="Workshop" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/registerworkshop">Register</NavDropdown.Item>
                    <NavDropdown.Item href="#">Workshops</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Registrations</Nav.Link>
                <Nav.Link href="#link">Committee</Nav.Link>
                <Nav.Link href="#link">Past Proceedings</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <NavDropdown title="Login|Register" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}