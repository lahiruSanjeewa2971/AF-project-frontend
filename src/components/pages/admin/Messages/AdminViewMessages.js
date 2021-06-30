import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AdminViewMessages(){
    const [postdata, setpostsdata] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8070/message/displaymessages").then((res) => {
            setpostsdata(res.data);
        }).catch((err) => {
            alert(err);
        })
    }, [])

    const ListAllMessages = (props) => {
        return(
            <div className="container">
                <div classsName="p-3">
                <div className="col-md-8  shadow p3 mb-5 bg-white rounded" style={{
                        marginTop: "20px",
                        width: "100%",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        backgroundColor:'red',
                        paddingBottom:'10px',
                        marginLeft: '17%'}}>
                            <h5>{props.record.name}</h5>
                            <h5>{props.record.email}</h5>
                            <h5>{props.record.message}</h5>
                            <Link to={`/editConference/${props.record.conferenceid}`}><li className="btn btn-info">Edit</li></Link>
                    </div>
                </div>
            </div>
        )
    }

    const messagesAll = postdata.map((post) => {
        return(
            <ListAllMessages record = {post}/>
        )
    })


    return(
        <div>
            <h3>List all messages</h3>
            {messagesAll}
        </div>
    )
}
export default AdminViewMessages;