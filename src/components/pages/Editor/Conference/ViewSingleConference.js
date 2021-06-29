import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";

function ViewSingleConference(){
    const params = useParams();

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [note, setNote] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        axios.post("http://localhost:8070/adminConference/getSingleConference", {conferenceid: params.conferenceid}).then(res => {
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
    return (
        <div>
            <h3>Edit Conference details.</h3><br/>
            <form>
                <div className="container">
                    <input type="text" className="form-control" value={title} 
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}/>
                </div>
                <div className="container">
                    <input type="text" className="form-control" value={date} 
                    onChange={(e) => {
                        setDate(e.target.value);
                    }}/>
                </div>
                <div className="container">
                    <input type="text" className="form-control" value={location} 
                    onChange={(e) => {
                        setLocation(e.target.value);
                    }}/>
                </div>
                <div className="container">
                    <input type="text" className="form-control" value={description} 
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}/>
                </div>
                <div className="container">
                    <input type="text" className="form-control" value={note} 
                    onChange={(e) => {
                        setNote(e.target.value);
                    }}/>
                </div>
                <div className="container">
                    <input type="text" className="form-control" value={status} 
                    onChange={(e) => {
                        setStatus(e.target.value);
                    }}/>
                </div><br/>
                <button className="btn btn-outline-primary" >ADD new Conference</button>
            </form>
        </div>
    )
}
export default ViewSingleConference;