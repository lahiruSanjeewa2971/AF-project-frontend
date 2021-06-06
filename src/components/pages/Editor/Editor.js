import React, {useState, useEffect} from 'react';
import axios from 'axios';
//import SingleMessage from "./SingleMessage";
import { Grid } from '@material-ui/core';
import { Form, Button } from 'react-bootstrap';
import uniqid from "uniqid";

export default function Editor(){
    const [postdata, setPostdata] = useState([]);

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');
    const [guestSpeaker, setGuestSpeaker] = useState('');


    useEffect(() => {
        axios.get("http://localhost:8070/message/").then((res) => {
            console.log(res.data);
            setPostdata(res.data);
        })
        .catch((err)=>{
            alert(err)
        })
    }, []);

    function setData(e) {
        e.preventDefault();
        const newWorkshop = {
            name,
            title,
            place,
            guestSpeaker,
            workshopid: uniqid(),
        };
        axios.post("http://localhost:8070/workshop/addworkshop", newWorkshop)
            .then(() => {
                alert("Workshop posted");
            }).catch((err) => {
                alert(err);
            });
    }
    const Allmessage = (props) => {
        return(<tr>
            <td>{props.record.name}</td>
            <td>{props.record.email}</td>
        </tr>)
    };

    
    
    const messageList = postdata.map((post)=>{
        return(
                //<SingleMessage post={post}/>
                <Allmessage record={post}/>
        );
    });
    

    return (
        <div>
            <Grid container xs={11}>
                <Grid item xs={8}>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messageList}
                            
                        </tbody>
                    </table>
                    
                </Grid>
                <Grid item xs={3}>
                    <Form>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Workshop Name" 
                            onChange={(e) => {
                                setName(e.target.value);
                              }}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Title of the Workshop" 
                            onChange={(e) => {
                                setTitle(e.target.value);
                              }}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Place, the workshop to be conducted" 
                            onChange={(e) => {
                                setPlace(e.target.value);
                              }}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Guest speaker." 
                            onChange={(e) => {
                                setGuestSpeaker(e.target.value);
                              }}/>
                        </Form.Group>
                        <Button variant="outlined" color="primary" size="large" onClick={setData} className="btn btn-outline-primary">
                            Add Item
                        </Button>
                    </Form>
                </Grid>
            </Grid>
            
        </div>
    )
}