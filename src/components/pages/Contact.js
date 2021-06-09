import React from 'react';
import {Grid} from '@material-ui/core';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import uniqid from "uniqid";
import axios from "axios";


export default function Contact(){
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function setData(e) {
        e.preventDefault();
        const newMessage = {
            name,
            email,
            message,
            messageid: uniqid(),
        };
        axios.post("http://localhost:8070/message/addnewmessage", newMessage)
            .then(() => {
                alert("Message posted");
            }).catch((err) => {
                alert(err);
            });
    }

    // axios.post("http://localhost:8070/message/addnewmessage", newMessage)
    //   .then(() => {
    //     alert("Service added");
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });
      

    return(
        <div>
            <Grid container spacing={4}>
                <Grid item container>
                    Contact us
                </Grid>
                
                <Grid item xs={6} style={{paddingLeft:'10%', paddingTop:'5%'}}>
                    <Form>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Your name" 
                            onChange={(e) => {
                                setname(e.target.value);
                              }}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" 
                            onChange={(e) => {
                                setEmail(e.target.value);
                              }}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={5} 
                            onChange={(e) => {
                                setMessage(e.target.value);
                              }}/>
                        </Form.Group>
                        <Button variant="outlined" color="primary" size="large" onClick={setData} className="btn btn-outline-primary">
                            Add Item
                        </Button>

                    </Form>
                </Grid>
                <Grid item xs={6}>
                    
                </Grid>
                
            </Grid>
        </div>
    )
}