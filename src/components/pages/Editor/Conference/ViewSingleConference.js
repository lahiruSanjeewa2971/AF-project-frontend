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
    const [time, setTime] = useState("");
    const [category, setCategory] = useState("");
    const [researcher, setResearcher] = useState('');

    const history = useHistory();

    useEffect(() => {
        axios.post("http://localhost:8070/adminConference/getSingleConference", {conferenceid: params.conferenceid}).then(res => {
            const postdata = res.data[0];
            setTitle(postdata.title);
            setDate(postdata.date);
            setLocation(postdata.location);
            setDescription(postdata.description);
            setNote(postdata.note);
            setTime(postdata.time);
            setCategory(postdata.category);
            setResearcher(postdata.researcher);
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    function setConferenceData(){
        const updateItem={
            title: title,
            date: date,
            location: location,
            description: description,
            note: note,
            time: time,
            category: category,
            researcher: researcher,
            conferenceid: params.conferenceid
        }
        console.log(updateItem)
        axios.post("http://localhost:8070/adminConference/updateconference", updateItem).then(res => {
            alert(res.data)
            history.push("/")
        }).catch(err => {
            console.log('Conference data not updated...', err)
            alert(err)
        })
    }


    return (
        <div>
            <h3>Edit Conference Details</h3><br/>
            <form onSubmit={setConferenceData}>
                <div className="container">
                    <input type="text" className="form-control" value={title} 
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}/><br/>
                </div>
                <div className="container">
                    <input type="text" className="form-control" value={date} 
                    onChange={(e) => {
                        setDate(e.target.value);
                    }}/><br/>
                </div>
                <div className="container">
                    <input type="text" className="form-control" value={location} 
                    onChange={(e) => {
                        setLocation(e.target.value);
                    }}/><br/>
                </div>
                <div className="container">
                    <input type="text" className="form-control" value={researcher} 
                    onChange={(e) => {
                        setResearcher(e.target.value);
                    }}/><br/>
                </div>
                <div className="container">
                    <input type="text" className="form-control" value={description} 
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}/>
                </div><br/>
                <div className="container">
                    <input type="text" className="form-control" value={note} 
                    onChange={(e) => {
                        setNote(e.target.value);
                    }}/>
                </div><br/>
                <div className="container">
                    <input type="text" className="form-control" value={time} 
                    onChange={(e) => {
                        setTime(e.target.value);
                    }}/><br/>
                </div>
                <div className="container">
                    <input type="text" className="form-control" value={category} 
                    onChange={(e) => {
                        setCategory(e.target.value);
                    }}/><br/>
                </div>
                <button className="btn btn-outline-primary">Submit Conference Details</button>
            </form>
        </div>
    )
}
export default ViewSingleConference;