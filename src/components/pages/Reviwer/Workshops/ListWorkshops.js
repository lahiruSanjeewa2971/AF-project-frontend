import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Grid,   } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Box from "@material-ui/core/Box";
 

function ListWorkshops(){
    const [postData, setPostData] = useState([]);
    //const [postAllData, setPostAllData] = useState([]);

    //take sorted data from db
    useEffect(() => {
        axios.get("http://localhost:8070/workshopsReviewer/").then((res) => {
            console.log(res.data);
            setPostData(res.data);
        })
        .catch((err)=>{
            alert(err)
        })
    }, []);

   

    //set sorted data by single instant
    const Sworkshop = (props)=>{
        return(
            <tr>
                <td>{props.record.title}</td>
                <td>{props.record.time}</td>
                <td>{props.record.date}</td>
                <td>{props.record.description}</td>
                <td>{props.record.category}</td>
                <td>{props.record.status}</td>
                <td>
                    <a href={`/acceptworkshops/${props.record.workshop_id}`}>Accept</a>
                </td>
                {/* <td>
                    <a href={`/deleteworshops/${props.record.workshop_id}`}>Delete</a>
                </td> */}
            </tr>
        )
    }
   

    //maps sorted data
    const List = postData.map((post)=>{
        return (
            <Sworkshop record={post}/>
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
            <br/><h2 style={{fontFamily:'cursive'}}>Workshop Details</h2><br/>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Accept</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {List}            
                    </tbody>
                </table>
            </div>

            <Grid container alignItems="center" justify="center">             
                <Grid item xs={2} className="secondgrid" >
                        <Link to="/allworkshopview"><button className="btn btn-outline-primary">All Workshops</button><br/><br/><br/></Link>
                        <Link to="/checkedworkshops"><button className="btn btn-outline-primary">Accepted Workshops</button></Link><br/>
                     
                    
                </Grid>
                                 
            </Grid>
             
 
        </div>
    )
}
export default ListWorkshops;