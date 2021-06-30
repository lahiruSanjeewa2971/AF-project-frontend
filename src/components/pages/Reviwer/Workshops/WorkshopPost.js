import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Grid,   } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Box from "@material-ui/core/Box";
// import '../../CSSs/Workshoppost.css';




function WorkshopPost(){
    const [postData, setPostData] = useState([]);
    //const [postAllData, setPostAllData] = useState([]);

    //take sorted data from db
    useEffect(() => {
        axios.get("http://localhost:8070/workshops/checkedW").then((res) => {
            console.log(res.data);
            setPostData(res.data);
        })
        .catch((err)=>{
            alert(err)
        })
    }, []);

   

 
    const Posts = (props)=>{
        return(
            <div className="card">
                <div className="container_posts">
                    <h2>Title: {props.record.title}</h2>
                    <p>Time :{props.record.time}</p>
                    <p>Date :{props.record.date}</p>
                    <p>Description :{props.record.description}</p>
                    <p>Category :{props.record.category}</p>
                    <p>Status: {props.record.status}</p>
                </div>
                 
            </div>
        )
    }
   

    //maps sorted data
    const List = postData.map((post)=>{
        return (
            // <posts  record={post}/>
            <Posts  record={post}/>
        );
    });
    


    return (
        <div>             
             <div>{List}</div>
        </div>
    )
}
export default WorkshopPost;