import React, { useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@material-ui/core';
import emailjs from 'emailjs-com'

function AcceptResearchers(){
    const params = useParams();

    const [status, setSatus] = useState("");

    const history = useHistory();

    

    useEffect(()=>{
        axios.post("http://localhost:8070/researchers/getresearchers", {researche_id: params.researche_id}).then(res=>{
            const postData = res.data[0];

            setSatus(postData.status);
        }).catch((err) =>{
            console.log(err)
        })
    }, [])

     function Notification(e){
         e.preventDefualt();

         emailjs.sendForm('service_erpcm66', 'template_f90dssf',
          e.target, 
          'user_d495GYFrmkdQBsemWVvP0').then(res=>{
              console.log(res);
          }).catch(err=> console.log(err));
     }
     
    function setResearcherData(){
        const updatedItems={            
            status: status,
            researche_id: params.researche_id
        }
        axios.post("http://localhost:8070/researchers/updateresearchopstatus", updatedItems).then(res => {
            alert(res.data)
            history.push("/")
        }).catch(err => {
            console.log('Research data not updated...', err)
            alert(err)
        })
    }

    return (
        <div>
            <h3>Edit Researcher Details.</h3>
            <form onSubmit={setResearcherData}>
                 
                <div className="container">
                    <input type="text" className="form-control" value={status}
                        onChange={(e)=>{
                            setSatus(e.target.value);
                    }}/><br/>
                    
                    <button className="btn btn-outline-primary" >  Accept </button>


                </div>
            </form>
        </div>
    )
}
export default AcceptResearchers;