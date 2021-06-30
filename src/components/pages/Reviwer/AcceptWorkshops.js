import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";
import emailjs from 'emailjs-com'

function AcceptWorkshops(){
    const params = useParams();

    const [status, setStatus] = useState("");

    const history = useHistory();

    useEffect(() => {
        axios.post("http://localhost:8070/workshopsReviewer/getwworkshops", {workshop_id: params.workshop_id}).then(res => {
            const postdata = res.data[0];
            setStatus(postdata.status);
        }).catch((err) => {
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

    function setWorkshopData(){
        const updateItem={
            status: status,
            workshop_id: params.workshop_id
        }
        console.log(updateItem)
        axios.post("http://localhost:8070/workshopsReviewer/updateworkshopstatus", updateItem).then(res => {
            alert(res.data)
            history.push("/")
        }).catch(err => {
            console.log('Workshop data not updated...', err)
            alert(err)
        })
    }


    return (
        <div>
            <h3>Edit workshop Detail</h3><br/>
            <form onSubmit={setWorkshopData}>
                <div className="container">
                    <input type="text" className="form-control" value={status} 
                    onChange={(e) => {
                        setStatus(e.target.value);
                    }}/><br/>
                </div>
                
                <button className="btn btn-outline-primary">Accept Workshop Details</button>
            </form>
        </div>
    )
}
export default AcceptWorkshops;

