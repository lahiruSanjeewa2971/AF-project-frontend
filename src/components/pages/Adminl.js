import axios from 'axios';
import React,{useState} from 'react'
// import { Component, useState } from 'react'
//import {Link} from 'react-router-dom'
//import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

function Adminl(){
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

            await axios.post('/user/adminlogin', {...user})

            //setItem() pass a keyName and a keyvalue, this will add that key to the given storage object or update it if already exist 
            localStorage.setItem('firstLogin', true)

            //used to get the current page address (URL) and to redirect the browser to a new page
            window.location.href= "/admindashboard";

        }catch(err){

            alert(err.response.data.msg)

        }
    }

    return(
        <div className='login-page'>
            <form onSubmit={loginSubmit}>
                <h2>Admin Login</h2>
                {/* <input type="email" name="email" required 
                placeholder="Admin Email"  value={user.email} onChange={onChangeInput}/>  */}

                <input type="password" name="password" required autoComplete="on"
                placeholder="Admin Password"  value={user.password} onChange={onChangeInput}/>

                <div className="container">
                    <button type="submit">login</button>
                    

                </div>

            </form>
           <div>
          
            
           </div>
        </div>
    )
}
export default Adminl