import axios from 'axios';
import React,{useState} from 'react'
// import { Component, useState } from 'react'
import {Link} from 'react-router-dom'
import { NavDropdown} from 'react-bootstrap';

function Login(){
    const [user, setUser] = useState({
        email:'', password:''
    })

    const onChangeInput = e => {
        const {name, value} = e.target;
        setUser({...user,[name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try{

            await axios.post('/user/login', {...user})

            //setItem() pass a keyName and a keyvalue, this will add that key to the given storage object or update it if already exist 
            localStorage.setItem('firstLogin', true)

            //used to get the current page address (URL) and to redirect the browser to a new page
            window.location.href= "/";

        }catch(err){

            alert(err.response.data.msg)

        }
    }

    return(
        <div className='login-page'>
            <form onSubmit={loginSubmit}>
                <h2>Login</h2>
                <input type="email" name="email" required 
                placeholder="Email"  value={user.email} onChange={onChangeInput}/> 

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password"  value={user.password} onChange={onChangeInput}/>

                <div className="row">
                    <button type="submit">login</button>
                    {/* <Link to='/register'>Register</Link> */}

                    <Link to='/register'>Register</Link>

                </div>

            </form>
           <div>
           <NavDropdown title="STAFF MEMBERS" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/adminlogin">Admin Login</NavDropdown.Item>
                    <NavDropdown.Item href="/reviewerlogin">Reviewer Login</NavDropdown.Item>
                    <NavDropdown.Item href="/editorlogin">Editor Login</NavDropdown.Item>
                </NavDropdown>
            
           </div>
        </div>
    )
}
export default Login