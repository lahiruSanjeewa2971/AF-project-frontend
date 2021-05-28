import './App.css';
import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import RegisterWorkshop from "./components/RegisterWorkshop";
import Contact from "./components/pages/Contact";

import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Route path="/registerworkshop" exact component={RegisterWorkshop} />
        <Route path="/" exact component={Home}/>
        <Route path="/contact" exact component={Contact}/>

      </Router>
      
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
