import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
// import emailjs from 'emailjs-com'

function DeleteWorkshops(){
    const [postData, setPostData] = useState([]);
    const history = useHistory();

    function DeleteItems(workshop_id){
        
        axios.post("http://localhost:8070/workshops/deleteW", {workshop_id : workshop_id}).then(res => {
            alert(res.data)
            history.go(0)
        }).catch(err => {
            console.log(err)
        })
    }
    
    const Deleteworkshop = (props)=>{
        return(
            <div>
                <Button variant="contained"
                onClick={() => {
                    DeleteItems(props.record.workshop_id);
                }}
                className="btn btn-danger">Delete</Button>
            </div>
        )
    }
    return (
        <div align="center">
            
        </div>
    )
}
export default DeleteWorkshops;