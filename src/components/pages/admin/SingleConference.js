import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

function SingleConference(){
    const params = useParams();
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [date, setdate] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [note, setNote] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        axios.post("http://localhost:8070/adminConference/getSingleConference", {conferenceid: params.conferenceid}).then(res => {
            const postdata = res.data[0];
            console.log(res.data);
            setTitle(postdata.title);
            setdate(postdata.date);
            setLocation(postdata.location);
            setDescription(postdata.description);
            setNote(postdata.note);
            setStatus(postdata.status);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    function setConferencedata(){
        const updateItem={
            status: status,
            conferenceid: params.conferenceid
        }
        axios.post("http://localhost:8070/adminConference/updateConferenceStatus", updateItem).then(res => {
            alert(res.data)
            history.pushState("/")
        }).catch(err => {
            console.log('Conference status not updated ')
        })
    }

    return (
        <div>
        <form onSubmit={setConferencedata}>
            <div className="container">
                <input type="text" className="form-control" value={title} 
                onChange={(e) => {
                    setTitle(e.target.value);
                }}/>
            </div>
            <div className="container">
                <input type="text" className="form-control" value={date} 
                onChange={(e) => {
                    setdate(e.target.value);
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
            </div>
            <div className="conatiner">
                <button className="btn btn-outline-primary">Accept or Reject</button>
            </div>
        </form>
        </div>
    )
}
export default SingleConference