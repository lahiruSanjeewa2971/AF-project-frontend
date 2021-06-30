import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
// import emailjs from 'emailjs-com'

function DeleteResearcher(){
    const [postData, setPostData] = useState([]);
    const history = useHistory();

    function DeleteItems(researche_id){
        
        axios.delete("http://localhost:8070/researchers/deleteR", {researche_id : researche_id}).then(res => {
            alert(res.data)
            history.go(0)
        }).catch(err => {
            console.log(err)
        })
    }
     
    return (
        <div align="center">
            
        </div>
    )
}
export default DeleteResearcher;