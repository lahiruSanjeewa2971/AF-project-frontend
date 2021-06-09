import './App.css';
import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import RegisterWorkshop from "./components/RegisterWorkshop";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Adminl from "./components/pages/Adminl"
import Reviewerl from "./components/pages/Reviewerl"
import Editorl from "./components/pages/Editorl"

import Register from "./components/pages/Register";

import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Route path="/registerworkshop" exact component={RegisterWorkshop} />
        <Route path="/" exact component={Home}/>
        <Route path="/contact" exact component={Contact}/>
        
        {/* //Path for register user and login user */}
        <Route path="/login" exact component={Login}/>
        <Route path="/adminlogin" exact component={Adminl}/>
        <Route path="/reviewerlogin" exact component={Reviewerl}/>
        <Route path="/editorlogin" exact component={Editorl}/>
        <Route path="/register" exact component={Register}/>

      </Router>
      
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
