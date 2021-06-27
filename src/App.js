import './App.css';
import React from 'react';
import './App.css';
import Header from "./components/Header";
//import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import RegisterWorkshop from "./components/RegisterWorkshop";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Adminl from "./components/pages/Adminl"
import Reviewerl from "./components/pages/Reviewerl"
import Editorl from "./components/pages/Editorl"
import Researcherl from "./components/pages/Researcherl"
import Workshopl from "./components/pages/Workshopl";
import Editor from "./components/pages/Editor/DashBoard";
import WorkshopDetails from './components/pages/Workshop/WorkshopDetails';
import WorkshopsN from './components/WorkshopsN/WorkshopsN';
import Researcher from './components/Researcher/Researcher';
import Test from './Test'

import Register from "./components/pages/Register";

import { BrowserRouter as Router, Route } from "react-router-dom";
import {DataProvider} from '../src/components/State'
import DetailWorkshop from './components/pages/detailWorkshop/DetailWorkshop'


function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
        <Navbar/>
        {/* <Header/> */}

        <Route path="/registerworkshop" exact component={RegisterWorkshop} />
        <Route path="/" exact component={Home}/>
        <Route path="/contact" exact component={Contact}/>
        
        {/* //Path for register user and login user */}
        <Route path="/login" exact component={Login}/>
        <Route path="/adminlogin" exact component={Adminl}/>
        <Route path="/reviewerlogin" exact component={Reviewerl}/>
        <Route path="/editorlogin" exact component={Editorl}/>
        <Route path="/researcherlogin" exact component={Researcherl}/>
        <Route path="/workshoplogin" exact component={Workshopl}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/editor" exact component={Editor}/>
        <Route path="/worshopDetails" exact component={WorkshopDetails} />
        <Route path="/workshopsN" exact component={WorkshopsN}/>
        <Route path="/researcher" exact component={Researcher}/>
        <Route path="/detail/:id" exact component={DetailWorkshop} />
        <Route path="/test" exact component={Test}/>
        

      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
