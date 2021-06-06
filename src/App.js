import './App.css';
import React from 'react';
import './App.css';
import Header from "./components/Header";
//import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import RegisterWorkshop from "./components/RegisterWorkshop";
import Contact from "./components/pages/Contact";
import Editor from "./components/pages/Editor/Editor";
import Dashboard from "./components/pages/Editor/DashBoard";
import DisplayWorkshop from "./components/pages/Editor/DisplayWorkshop";
import EditWorkshop from "./components/pages/Editor/EditWorkshop";
import NewConference from "./components/pages/Editor/Conference/NewConference";

import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Route path="/registerworkshop" exact component={RegisterWorkshop} />
        <Route path="/" exact component={Home}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/editor" exact component={Editor}/>
        <Route path="/dashboardEditor" exact component={Dashboard}/>
        <Route path="/displayworkshops" exact component={DisplayWorkshop}/>
        <Route path="/edititem/:workshopid" exact component={EditWorkshop} />
        <Route path="/newConference" exact component={NewConference}/>

      </Router>
    </div>
  );
}

export default App;
