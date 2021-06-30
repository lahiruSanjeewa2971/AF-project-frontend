import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Grid,   } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Box from "@material-ui/core/Box";
 

function ResearcherPosts(){
    const [postData, setPostData] = useState([]);
    //const [postAllData, setPostAllData] = useState([]);

    //take sorted data from db
    useEffect(() => {
        axios.get("http://localhost:8070/researchers/").then((res) => {
            console.log(res.data);
            setPostData(res.data);
        })
        .catch((err)=>{
            alert(err)
        })
    }, []);

   

 
    const Postsr = (props)=>{
        return(
            <div className="card">
                <div className="container_posts">
                    <h2>Title: {props.record.name}</h2>
                    <p>Time :{props.record.researche_id}</p>
                    <p>Category :{props.record.title}</p>
                    <p>Date :{props.record.description}</p>
                    <p>Description :{props.record.contact_name}</p>
                    <p>Category :{props.record.contact_no}</p>
                    <p>Category :{props.record.contact_mail}</p>                    
                    <p>Status: {props.record.status}</p>
                    <button type="button">Accept</button>
                    <button type="button">Delete</button>
                </div>
                 
            </div>
        )
    }
   

    //maps sorted data
    const Listr = postData.map((post)=>{
        return (
            // <posts  record={post}/>
            <Postsr  record={post}/>
        );
    });
    


    return (
        <div>             
             <div>{Listr}</div>
        </div>
    )
}
export default ResearcherPosts;