import React, {useContext} from "react";
import "bootstrap/dist/css/bootstrap.css";
import './CSSs/Header.css';
import {Navbar,  NavDropdown} from 'react-bootstrap';
import {State} from '../../src/components/State'
import {Link} from 'react-router-dom'
import axios from 'axios'



function Header() {

    // const stateHeader = useContext(State)
    // console.log(stateHeader)

    const state = useContext(State)
    const [unLogged, setunLogged] = state.guestAPI.unLogged
    const [isResearcher, setIsResearcher] = state.guestAPI.isResearcher

    const logoutUser = async () =>{
        await axios.get('user/logout')
        localStorage.clear()
        setunLogged(false)
        setIsResearcher(false)
    }


    const researcherRouter = () =>{
        return(
            <>
                <li><Link to="/create_research">Add Research</Link></li>
                <li><Link to="/researcher">All Researches</Link></li>
                
            </>
        )
    }

    const attendeeRouter = () =>{
        return(
            <>
                <li><Link to="/workshopsN">Workshops</Link></li>
                <li><Link to="/researcher">All Researches</Link></li>
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
                
            </>
        )
    }
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

                    {isResearcher && researcherRouter()}
                    {
                        unLogged ? attendeeRouter() :    <li class="nav-item">
                        <a class="nav-link" href="/">
                            Login|Register
                        </a>
                    </li>
                    }

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
