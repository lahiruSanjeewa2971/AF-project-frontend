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
import Editor from "./components/pages/Editor/DashBoard";
import AdminDashBoard from "./components/pages/admin/adminDashboard";
import Register from "./components/pages/Register";

import { BrowserRouter as Router, Route } from "react-router-dom";
import DisplayWorkshop from './components/pages/Editor/DisplayWorkshop';
import EditWorkshop from './components/pages/Editor/EditWorkshop';
import ConferenceList from './components/pages/admin/conferenceList';
import ConferenceView from './components/pages/admin/ConferenceView';
import EditConference from './components/pages/admin/EditConference';
import SingleConference from './components/pages/admin/SingleConference';


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
        <Route path="/editor" exact component={Editor}/>
        <Route path="/admindashboard" exact component={AdminDashBoard}/>
        <Route path="/conference" exact component={ConferenceList}/>
        <Route path="/conference/:conferenceid" exact component = {ConferenceView}/>
        <Route path="/displayworkshops" exact component={DisplayWorkshop}/>
        <Route path="/edititem/:workshopid" exact component={EditWorkshop}/>
        <Route path="/editConference/:conferenceid" exact component={EditConference} />
        <Route path="/singleConference/:conferenceid" exact component={SingleConference} />

      </Router>
    </div>
  );
}

export default App;
