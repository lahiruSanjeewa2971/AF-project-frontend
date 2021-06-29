import React, {useState, useEffect} from 'react';
import axios from 'axios';
//import { Link } from '@material-ui/core';

function ViewWorkshop(){
    const [postData, setPostData] = useState([]);
    
    //take sorted data from db
    useEffect(() => {
        axios.get("http://localhost:8070/workshops/").then((res) => {
            console.log(res.data);
            setPostData(res.data);
        })
        .catch((err)=>{
            alert(err)
        })
    }, []);

    //set sorted data by single instant
    const Sortedworkshop = (props)=>{
        return(
            <tr>
                <td>{props.record.title}</td>
                <td>{props.record.time}</td>
                <td>{props.record.date}</td>
                <td>{props.record.description}</td>
                <td>{props.record.category}</td>
                <td>{props.record.status}</td>
                <td>
                    <a href={`/editSingleWorkshop/${props.record.workshop_id}`}>Click</a>
                </td>
            </tr>
        )
    }
    //maps sorted data  /${props.record.workshop_id}
    const workshoList = postData.map((post)=>{
        return (
            <Sortedworkshop record={post}/>
        );
    });


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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workshoList}            
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ViewWorkshop;