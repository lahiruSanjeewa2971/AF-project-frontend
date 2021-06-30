import React, { useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@material-ui/core';
// import emailjs from 'emailjs-com'

function AcceptWorkshops(){
    const params = useParams();

    const [status, setStatus] = useState("");

    const history = useHistory();
    
    useEffect(()=>{
        axios.post("http://localhost:8070/workshops/getwworkshops", {workshop_id: params.workshop_id}).then(res=>{
            const postData = res.data[0];

            setStatus(postData.status);

        }).catch((err) =>{
            console.log(err)
        })
    }, [])

    // function SendEmail(e){
    //     e.preventDefault();

    //     emailjs.sendForm()
    // }

     
    function updateStatus(){
        const updateItem={
             status: status
        }
        console.log(updateItem)
        axios.post("http://localhost:8070/workshops/updateworkshopstatus", updateItem).then(res => {
            alert(res.data)
            history.push("/")
        }).catch(err => {
            console.log('Workshop not updated...', err)
            alert(err)
        })
    }

    return (
        <div align="center">
            {params.workshop_id}
            <form onSubmit={updateStatus} className="row" style={{ margin:"25px 85px 75px 100px"}}>
                 
                <div className="container">
                    <input type="text" className="form-control" id="status" placeholder="Status" value={status}
                        onChange={(e)=>{
                            setStatus(e.target.value);
                    }}/><br/>
                    
                    <Button variant="contained" color="primary" disableElevation>  Accept </Button>


                </div>
            </form>
        </div>
    )
}
export default AcceptWorkshops;