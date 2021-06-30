
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory, useParams} from 'react-router-dom';

export default function AcceptConference(props){
       
        axios.post("http://localhost:8070/conferences/updatestatusaccepted",{conference:props.conferenceid }).then(res => {
            alert(res.data)
        }).catch(err => {
            console.log(err)
        })
    
    return(
        <div>
           <h1>props.conferenceid</h1>
        </div>
    )
    
    
} 