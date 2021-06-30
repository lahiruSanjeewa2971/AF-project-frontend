import React, {useContext} from "react"; 
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './CSSs/Header.css';
import {State} from '../../src/components/State';
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function NavBar(){
    // const stateHeader = useContext(State)
    // console.log(stateHeader)

    const state = useContext(State)
    const [unLogged, setunLogged] = state.guestAPI.unLogged
    const [isAttendee, setIsAttendee] = state.guestAPI.isAttendee
    const [isResearcher, setIsResearcher] = state.guestAPI.isResearcher
    const [isConductor, setIsConductor] = state.guestAPI.isConductor
    const [cart] = state.guestAPI.cart

    const logoutUser = async () =>{
        await axios.get('user/logout')
        localStorage.clear()
        setunLogged(false)
        setIsAttendee(false)
        setIsResearcher(false)
        setIsConductor(false)
    }

    const loggedRouter = () =>{
        return(
            <>
                
                
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
                
            </>
        )
    }

    
    
    const researcherRouter = () =>{
        return(
            <>
                 <li className= "nav-item"><a class="nav-link" href="/CreateResearcher">
                 Add Researches
                 </a></li>

                 <li className= "nav-item"><a class="nav-link" href="/researcher">
                 All Researches
                 </a></li>

                 <li className= "nav-item"><a class="nav-link" href="/cart">
                     <span>{cart.length}</span>
                 Cart
                 </a></li>


                
            </>
        )
    }

    const attendeeRouter = () =>{
        return(
            <>
                <li className= "nav-item"><a class="nav-link" href="/workshopsN">
                            Workshops
                        </a></li>


                        <li className= "nav-item"><a class="nav-link" href="/workshopsN">
                            Research Papers
                        </a></li>

                </>
        )
    }

   const conductorRouter = () =>{
        return(
            <>
                <li className= "nav-item"><a class="nav-link" href="/workshopsN">
                            Workshops
                        </a></li>


                        <li className= "nav-item"><a class="nav-link" href="/createWorkshopsN">
                            Add Workshop
                        </a></li>

                
                
                
            </>
        )
    }
    return(
        
        <div>
            <Navbar bg="light" expand="lg">
            <a class="navbar-brand" id="logo" href="/">
                ICAF
            </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={{fontFamily: 'monospace', fontSize: '22px'}}>
                <Nav.Link href="/">Home</Nav.Link>

                {isAttendee && attendeeRouter()}
                {isResearcher && researcherRouter()}
                {isConductor && conductorRouter()}

                {
                    unLogged ? loggedRouter() :  
                    <> 
                    <Nav.Link href="#link">KeyNotes</Nav.Link>
                    <NavDropdown title="Workshop" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/registerworkshop">Register</NavDropdown.Item>
                        <NavDropdown.Item href="/worshopDetails">Workshops</NavDropdown.Item>
                        <NavDropdown.Item href="/test">TEST</NavDropdown.Item>
                    </NavDropdown>
                    
                    <Nav.Link href="#link">Committee</Nav.Link>
                    <Nav.Link href="#link">Past Proceedings</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
    
    
    
                        <NavDropdown title="Login|Register" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                        <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                        <NavDropdown.Item href="/researcherlogin">Researcher Login</NavDropdown.Item>
                        <NavDropdown.Item href="/workshoplogin">Workshop Conductor Login</NavDropdown.Item>
                    </NavDropdown>
                    </>
                }
               
                {/* <Nav.Link href="#link">KeyNotes</Nav.Link>
                <NavDropdown title="Workshop" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/registerworkshop">Register</NavDropdown.Item>
                    <NavDropdown.Item href="/worshopDetails">Workshops</NavDropdown.Item>
                    <NavDropdown.Item href="/test">TEST</NavDropdown.Item>
                </NavDropdown>
                
                <Nav.Link href="#link">Committee</Nav.Link>
                <Nav.Link href="#link">Past Proceedings</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>



                    <NavDropdown title="Login|Register" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                    <NavDropdown.Item href="/researcherlogin">Researcher Login</NavDropdown.Item>
                    <NavDropdown.Item href="/workshoplogin">Workshop Conductor Login</NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            
            </Navbar.Collapse>
            </Navbar>
        </div>
        
    )
}