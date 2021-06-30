import './App.css';
import React from 'react';
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
import AdminDashBoard from "./components/pages/admin/adminDashboard";
import Register from "./components/pages/Register";



import WorkshopPost from './components/pages/Reviwer/Workshops/WorkshopPost'
import Reviewer from './components/pages/Reviwer/Rdashboard';
import Listworkshops from "./components/pages/Reviwer/Workshops/ListWorkshops";
import ListResearches from "./components/pages/Reviwer/Researcher/ListResearchers";
import AcceptWorkshops from "./components/pages/Reviwer/AcceptWorkshops";
import AcceptResearchers from "./components/pages/Reviwer/AcceptResearchers" ;
import AllWorkshopView from  "./components/pages/Reviwer/Workshops/AllWorkshopView";
import AllResearcherView from  "./components/pages/Reviwer/Researcher/AllResearcherView";
import CheckedWorkshops from  "./components/pages/Reviwer/Workshops/CheckedWorkshops";
import CheckedResearcher from  "./components/pages/Reviwer/Researcher/CheckedResearcher";
import DeleteWorkshops from  "./components/pages/Reviwer/Workshops/DeleteWorkshops";


import { BrowserRouter as Router, Route } from "react-router-dom";
import DisplayWorkshop from './components/pages/Editor/DisplayWorkshop';
import EditWorkshop from './components/pages/Editor/EditWorkshop';
import ConferenceList from './components/pages/admin/conferenceList';
import ConferenceView from './components/pages/admin/ConferenceView';
import SingleConference from './components/pages/admin/SingleConference';
import WorkshopDetails from './components/pages/Workshop/WorkshopDetails';
import WorkshopsN from './components/WorkshopsN/WorkshopsN';
import Researcher from './components/Researcher/Researcher';
import CreateResearcher from './components/Item/createResearcher/CreateResearcher';
import CreateWorkshopsN from './components/Item/createWorkshopN/CreateWorkshopsN'
import Cart from './cart/Cart'
import Test from './Test'
import AdminViewWorkshopsAll from './components/pages/admin/Workshops/AdminViewWorkshopsAll';



import {DataProvider} from '../src/components/State'
import DetailWorkshop from './components/pages/detailWorkshop/DetailWorkshop'

//import EditConference from './components/pages/Editor/Conference/EditConference';
import NewConference from './components/pages/Editor/Conference/NewConference';

import DisplayUsers from './components/pages/Editor/UsersDisplay/DisplayUsers';
import ViewSingleConference from './components/pages/Editor/Conference/ViewSingleConference';
import EditorViewAllWorkshops from './components/pages/Editor/Workshop/EditorViewAllWorkshops';
import ViewMoreDetails from './components/pages/Editor/HomePageDisplay/ViewMoreDetails';
import AdminViewAllUsers from './components/pages/admin/Users/AdminViewAllUsers';
import AcceptConference from './components/pages/admin/AcceptConference';
import EditorViewAllResearchers from './components/pages/Editor/Researches/EditorViewAllResearchers';


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
        <Route path="/admindashboard" exact component={AdminDashBoard}/>
        <Route path="/conference" exact component={ConferenceList}/>
        <Route path="/conference/:conferenceid" exact component = {ConferenceView}/>
        <Route path="/displayworkshops" exact component={DisplayWorkshop}/>
        <Route path="/edititem/:workshopid" exact component={EditWorkshop}/>
        <Route path="/singleConference/:conferenceid" exact component={SingleConference} />
        <Route path="/worshopDetails" exact component={WorkshopDetails} />
        <Route path="/workshopsN" exact component={WorkshopsN}/>
        <Route path="/researcher" exact component={Researcher}/>
        <Route path="/createResearcher" exact component={CreateResearcher}/>
        <Route path="/createWorkshopsN" exact component={CreateWorkshopsN}/>
        <Route path="/cart" exact component={Cart}/>
        <Route path="/detail/:id" exact component={DetailWorkshop} />
       
        <Route path="/test" exact component={Test}/>
        <Route path="/editConference/:conferenceid" exact component={ViewSingleConference} />
        <Route path="/newConference" exact component={NewConference}/>
        <Route path="/displayUsers" exact component={DisplayUsers}/>
        <Route path="/viewallworkshopseditor" exact component={EditorViewAllWorkshops} />        
        <Route path="/viewmoredetails/:conferenceid" exact component={ViewMoreDetails} />
        <Route path="/viewworkshops" exact component={AdminViewWorkshopsAll} />
        <Route path="/adminviewAllUsers" exact component={AdminViewAllUsers} />
        <Route path= "/acceptconference/:conferenceid" exact component={AcceptConference}/>
       
        <Route path="/editorViewResearchers" exact component={EditorViewAllResearchers} />


        <Route path="/reviewer" exact component={Reviewer}/>
        <Route path="/allworkshopview" exact component={AllWorkshopView} />
        <Route path="/allresearcherview" exact component={AllResearcherView} />
        <Route path="/checkedworkshops" exact component={CheckedWorkshops} />
        <Route path="/checkedresearcher" exact component={CheckedResearcher} />
        <Route path="/listworkshops" exact component={Listworkshops}/>
        <Route path="/workshoppost" exact component={WorkshopPost}/>
        {/* <Route path="/listconferences" exact component={ListConference}/> */}
        <Route path="/listresearchers" exact component={ListResearches}/>        
        <Route path="/acceptworkshops/:workshop_id" exact component={AcceptWorkshops}/>
        <Route path="/acceptresearchers/:researche_id" exact component={AcceptResearchers}/>
        <Route path="/deleteworshops/" exact component={DeleteWorkshops}/>

      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
