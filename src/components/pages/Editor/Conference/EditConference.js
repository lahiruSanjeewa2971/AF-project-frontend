import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";


function EditConference(){
    const params = useParams();

    //const [servicename, setServicename] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [note, setNote] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        axios.post("http://localhost:8070/conference/getConference", {conferenceid: params.conferenceid}).then(res => {
            
            const postdata = res.data[0];
            setTitle(postdata.title);
            setDate(postdata.date);
            setLocation(postdata.location);
            setDescription(postdata.description);
            setNote(postdata.note);
            setStatus(postdata.status);

        }).catch((err) => {
            console.log(err)
        })

    }, [])

    return(
        <div>
            
            <form>
                <div className="container">
                    <input type="text" className="form-control" id="note" placeholder="Notes" value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }}/><br/>
                </div>
                <div className="container">
                    <input type="text" className="form-control" id="note" placeholder="Notes" value={date}
                    onChange={(e)=>{
                        setDate(e.target.value);
                    }}/><br/>
                </div>
                <div className="container">
                    <input type="text" className="form-control" id="note" placeholder="Notes" value={location}
                    onChange={(e)=>{
                        setLocation(e.target.value);
                    }}/><br/>
                </div>
                <div className="container">
                    <input type="text" className="form-control" id="note" placeholder="Notes" value={description}
                    onChange={(e)=>{
                        setDescription(e.target.value);
                    }}/><br/>
                </div>
                <div className="container">
                    <input type="text" className="form-control" id="note" placeholder="Notes" value={note}
                    onChange={(e)=>{
                        setNote(e.target.value);
                    }}/><br/>
                </div>
                <div className="container">
                    <input type="text" className="form-control" id="note" placeholder="Notes" value={status}
                    onChange={(e)=>{
                        setStatus(e.target.value);
                    }}/><br/>
                </div>
            </form>
            
        </div>
    )
}
export default EditConference