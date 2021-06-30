import React, { useState, useEffect} from 'react';
import axios from 'axios';

function EditorViewAllResearchers(){
    const [postdata, setPostdata] = useState([]);

    //take data from db
    useEffect(() => {
        axios.get("http://localhost:8070/manageResearchers/displayAll").then((res) => {
            setPostdata(res.data);
        }).catch((err) => {
            alert(err);
        })
    }, []);

    //set sorted data by single instant
    const ListAllWorkshops = (props)=>{
        return(
            <tr>
                <td>{props.record.name}</td>
                <td>{props.record.title}</td>
                <td>{props.record.description}</td>
                <td>{props.record.contact_name}</td>
                <td>{props.record.contact_no}</td>
                <td>{props.record.contact_mail}</td>
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
            <div style={{marginRight:'40px', marginLeft:'40px'}}>
            <br/><h2 style={{fontFamily:'Gabriola'}}>Researchers.</h2><br/>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Contact Name</th>
                            <th>Contact No</th>
                            <th>Contact Mail</th>
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
export default EditorViewAllResearchers;