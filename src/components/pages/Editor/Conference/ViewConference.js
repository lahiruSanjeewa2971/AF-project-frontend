import axios from 'axios';
import React, {useState, useEffect} from 'react';

function ViewConference(){
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8070/conference/displayall").then((res) => {
            setPostData(res.data);
        })
        .catch((err) => {
            alert(err);
        })
    }, []);

    const AllConference = (props) => {
        return (
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
                            <h2>Status : {props.record.status}</h2>  
                            <a className="btn btn-danger" href={`/editConference/${props.record.conferenceid}`}>Admin acceptance</a>
                    </div>
                </div>
            </div>
            
        )
    }

    const conferenceList = postData.map((post) => {
        return(
            <AllConference record={post}/>
        )
    })

    return(
        <div>{conferenceList}</div>
    )
}
export default ViewConference;