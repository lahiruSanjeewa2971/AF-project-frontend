import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Deleteicon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router-dom';

function EditorAllConferenceView(){
    const [postdata, setPostdata] = useState([]);
    const history = useHistory();

    function deleteItem(conferenceid){
        axios.post('http://localhost:8070/conferences/delete', {conferenceid: conferenceid}).then(res => {
            alert(res.data)
            history.go(0)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        axios.get("http://localhost:8070/conferences/displayconferences").then((res) => {
            setPostdata(res.data);
            console.log(postdata)
        }).catch((err) => {
            alert(err);
        })
    }, [])

    //display part
    const ListAllConferences = (props) => {
        return(
            <div className="container">
                <div className="p-3">
                <div className="col-md-8  shadow p3 mb-5 bg-white rounded" style={{
                        marginTop: "20px",
                        width: "100%",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        backgroundColor:'red',
                        paddingBottom:'10px',
                        marginLeft: '17%'}}>
                            <h2>{props.record.title}</h2>
                            <h2>{props.record.date}</h2>
                            <h2>{props.record.location}</h2>
                            <h2>{props.record.description}</h2>
                            <h2>{props.record.note}</h2>
                            <h2>{props.record.time}</h2>
                            <h2>{props.record.category}</h2>
                            <h2>{props.record.researcher}</h2>
                            <h2>Status : {props.record.status}</h2>  
                            {/*<a className="btn btn-danger" href={`/editConference/${props.record.conferenceid}`}>Admin acceptance</a>
                            <Link to={`/editConf/${props.record.conferenceid}`}><button className="btn btn-outline-primary">New Conference</button></Link><br/>
                            <Link to={`/editConf/${props.record.conferenceid}`}><li className="btn btn-info">Edit</li></Link>*/}
                            <Link to={`/editConference/${props.record.conferenceid}`} style={{marginRight:'8px'}}><li className="btn btn-info">Edit Conference details</li></Link>
                            {/*<Link to={`/editConference/${props.record.conferenceid}`}><li className="btn btn-danger">Delete Conference details</li></Link>*/}
                            <Button startIcon={<Deleteicon/>} variant="contained" color="secondary" 
                                onClick={() => {
                                    deleteItem(props.record.conferenceid);
                                }}
                            className="btn btn-danger">Delete</Button>
                    </div>
                </div>
            </div>
        )
    }

    const conferenceAll = postdata.map((post) => {
        return (
            <ListAllConferences record = {post}/>
        )
    })

    return(
        <div>{conferenceAll}</div>
    )
}
export default EditorAllConferenceView;