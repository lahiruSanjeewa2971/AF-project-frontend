import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Grid,   } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Box from "@material-ui/core/Box";
import { useHistory } from 'react-router-dom'
 

function AllWorkshopView(){
    const [postData, setPostData] = useState([]);
    const history = useHistory();

    function DeleteItems(workshop_id){
        
        axios.post("http://localhost:8070/workshops/deletew", {workshop_id : workshop_id}).then(res => {
            alert(res.data)
            history.go(0)
        }).catch(err => {
            console.log(err)
        })
    }

    //take sorted data from db
    useEffect(() => {
        axios.get("http://localhost:8070/workshopsReviewer/displayallW").then((res) => {
            console.log(res.data);
            setPostData(res.data);
        })
        .catch((err)=>{
            alert(err)
        })
    }, []);

   

    //set sorted data by single instant
    const Allworkshops = (props)=>{
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
   

    //maps sorted data
    const List = postData.map((post)=>{
        return (
            <Allworkshops record={post}/>
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
            <br/><h2 style={{fontFamily:'cursive'}}>All Workshop Details</h2><br/>
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
                        {List}            
                    </tbody>
                </table>
            </div>

             
             
 
        </div>
    )
}
export default AllWorkshopView;