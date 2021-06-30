import React, { useState, useEffect} from 'react';
import axios from 'axios';

function EditorViewAllWorkshops(){
    const [postdata, setPostdata] = useState([]);

    //take data from db
    useEffect(() => {
        axios.get("http://localhost:8070/workshops/displayAllWorkshops").then((res) => {
            setPostdata(res.data);
        }).catch((err) => {
            alert(err);
        })
    }, []);

    //set sorted data by single instant
    const ListAllWorkshops = (props)=>{
        return(
            <tr>
                <td>{props.record.title}</td>
                <td>{props.record.time}</td>
                <td>{props.record.date}</td>
                <td>{props.record.description}</td>
                <td>{props.record.category}</td>
                <td>{props.record.status}</td>
                
            </tr>
        )
    }
    
    const workshopList = postdata.map((post) => {
        return (
            <ListAllWorkshops record = {post}/>
        )
    })

    return (
        <div>
            <div>
            <br/><h2 style={{fontFamily:'Gabriola'}}>New Workshop Details.</h2><br/>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workshopList}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default EditorViewAllWorkshops;