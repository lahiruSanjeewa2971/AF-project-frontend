import axios from 'axios';
import React,{useState} from 'react'
// import { Component, useState } from 'react'
import {Link} from 'react-router-dom'

function Register(){
    const [user, setUser] = useState({
        name:'', email:'',mobile:'', password:'',role:''
    })

    const onChangeInput = e => {
        const {name, value} = e.target;
        setUser({...user,[name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try{

            await axios.post('/user/register', {...user})

            //setItem() pass a keyName and a keyvalue, this will add that key to the given storage object or update it if already exist 
            localStorage.setItem('firstLogin', true)

            //used to get the current page address (URL) and to redirect the browser to a new page
            if(user.role == 1){
                window.location.href= "/researcherlogin";
            }

            else if(user.role == 2){
                window.location.href= "/workshoplogin";
            }
            else{
                window.location.href= "/";
            }
            // window.location.href= "/login";

        }catch(err){

            alert(err.response.data.msg)

        }
    }

    return(
        <div className='login-page'>
            <form onSubmit={registerSubmit}>
                <h2>Register</h2>

                <input type="text" name="name" required 
                placeholder="Name"  value={user.name} onChange={onChangeInput}/>

                <input type="email" name="email" required 
                placeholder="Email"  value={user.email} onChange={onChangeInput}/> 

                <input type="number" name="mobile" required 
                placeholder="Mobile Number"  value={user.mobile} onChange={onChangeInput}/> 

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password"  value={user.password} onChange={onChangeInput}/>

                <input type="number" name="role" required autoComplete="on"
                placeholder="Role"  value={user.role} onChange={onChangeInput}/>  

{/* <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value={user.role} onChange={onChangeInput}>One</option>
  <option value={user.role} onChange={onChangeInput}>Two</option>
  <option value={user.role} onChange={onChangeInput}>Three</option>
</select> */}

                <div className="list">
                    <h5>Role List</h5>
                    <li>
                    <ul>0 - Attendee </ul> </li>
                   <li> <ul>1 - Researcher </ul></li>
                  <li>  <ul>2 - Workshop Conductor</ul>
                    </li>
                    </div>  

                
               
                

                <div className="row">
                    <button type="submit">Register</button>
                    <Link to='/login'>Login</Link>

                </div>

            </form>
        </div>
    )
}
export default Register