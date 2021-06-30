import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Grid,   } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Box from "@material-ui/core/Box";
 

function CheckedResearcher(){
    const [postData, setPostData] = useState([]);
    //const [postAllData, setPostAllData] = useState([]);

    //take sorted data from db
    useEffect(() => {
        axios.get("http://localhost:8070/researchers/checkedR").then((res) => {
            console.log(res.data);
            setPostData(res.data);
        })
        .catch((err)=>{
            alert(err)
        })
    }, []);

   

    //set sorted data by single instant
    const Checkedresearchers = (props)=>{
        return(
            <tr>
                <td>{props.record.name}</td>
                <td>{props.record.researche_id}</td>
                <td>{props.record.title}</td>
                <td>{props.record.description}</td>
                <td>{props.record.contact_name}</td>
                <td>{props.record.contact_no}</td>
                <td>{props.record.contact_mail}</td>
                <td>{props.record.status}</td>
                 
            </tr>
        )
    }
   

    //maps sorted data
    const List = postData.map((post)=>{
        return (
            <Checkedresearchers record={post}/>
        );
    });
    


    return (
        <div>
            <div>
            <Box 
                borderColor="primary.main" 
                borderTop={4} 
                borderBottom={4}
                >
                <h1>Review research papers & Workshops</h1>
            </Box>
            <br/><h2 style={{fontFamily:'cursive'}}>Accepted Researcher Details</h2><br/>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Contact Name</th>
                            <th>Contact Number</th>
                            <th>Contact Mail</th>
                            <th>Status</th>
                             
                        </tr>
                    </thead>
                    <tbody>
                        {List}            
                    </tbody>
                </table>
            </div>

             
             
 
        </div>
    )
}
export default CheckedResearcher;