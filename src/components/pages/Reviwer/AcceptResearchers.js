import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@material-ui/core';
// import emailjs from 'emailjs-com'

function AcceptResearchers(){
    const params = useParams();

    const [status, setSatus] = useState("");

    useEffect(()=>{
        axios.post("http://localhost:8070/researchers/getwresearchers", {workshopid: params.workshopid}).then(res=>{
            const postData = res.data[0];

            setSatus(postData.status);
        }).catch((err) =>{
            console.log(err)
        })
    }, [])

    // function SendEmail(e){
    //     e.preventDefault();

    //     emailjs.sendForm()
    // }

     
    function EditItems(){
        const updatedItems={
            
            status: status,
            researche_id: params.researche_id
        }
        axios.post("http://localhost:8070/researchers/acceptr", updatedItems).then(res => {
            alert(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div align="center">
            <form onSubmit={EditItems} className="row" style={{ margin:"25px 85px 75px 100px"}}>
                 
                <div className="container">
                    <input type="text" className="form-control" id="status" placeholder="Status" value={status}
                        onChange={(e)=>{
                            setSatus(e.target.value);
                    }}/><br/>
                    
                    <Button variant="contained" color="primary" disableElevation>  Accept </Button>


                </div>
            </form>
        </div>
    )
}
export default AcceptResearchers;