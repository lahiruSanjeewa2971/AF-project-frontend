import React, {useState, useEffect} from 'react';
import axios from 'axios';
 

function ListConference(){
    const [postData, setPostData] = useState([]);
    //const [postAllData, setPostAllData] = useState([]);

    //take sorted data from db
    useEffect(() => {
        axios.get("http://localhost:8070/conferences/").then((res) => {
            console.log(res.data);
            setPostData(res.data);
        })
        .catch((err)=>{
            alert(err)
        })
    }, []);

   

    //set sorted data by single instant
    const Sconference = (props)=>{
        return(
            <tr>
                <td>{props.record.title}</td>
                <td>{props.record.date}</td>
                <td>{props.record.location}</td>
                <td>{props.record.description}</td>
                <td>{props.record.note}</td>
                <td>{props.record.status}</td>
                <td>
                    <a href={`/edititem/${props.record.workshopid}`}>Click</a>
                </td>
            </tr>
        )
    }
   

    //maps sorted data
    const ListConferences = postData.map((post)=>{
        return (
            <Sconference record={post}/>
        );
    });
    


    return (
        <div>
            <div>
            <br/><h2 style={{fontFamily:'Gabriola'}}>Workshop Details.</h2><br/>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Description</th>
                            <th>note</th>
                            <th>Status</th>                         
                             
                        </tr>
                    </thead>
                    <tbody>
                        {ListConferences}            
                    </tbody>
                </table>
            </div>
 
        </div>
    )
}
export default ListConference;