import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";
import Paper from '@material-ui/core/Paper';

function ViewMoreDetails(){
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


    return (
        <div>
            <div className="container" style={{marginTop:'5%'}}>
            <Paper style={{width:'100%'}}>
                <h2 style={{fontFamily:'Gabriola', color:'#01579b'}}>Title is {title}</h2><br/><hr/>
                <div style={{color:'#0288d1'}}>
                <h4>It will be held on {date}</h4><br/>
                <h4>The location, {location}</h4><br/>
                <h4>{description}</h4><br/>
                <h4>{note}</h4><br/>
                <h4>Conference time, {time}</h4><br/>
                <h4>Belongos to {category}</h4><br/>
                <h4>{researcher} will be attend to our conference</h4><br/>
                </div>
                
                <a href="/" className='btn btn-outline-dark m-5' style={{width:'40%', alignItems:'center'}}>Back to Home</a>
            </Paper>
            </div>
            
            
        </div>
    )
}
export default ViewMoreDetails;