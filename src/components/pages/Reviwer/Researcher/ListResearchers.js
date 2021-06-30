import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Grid,   } from "@material-ui/core";
import { Link, useHistory } from 'react-router-dom';
import Box from "@material-ui/core/Box";
import ResearcherPosts from  './ResearcherPosts'

function ListResearches(){
    const [postData, setPostData] = useState([]);
    //const [postAllData, setPostAllData] = useState([]);
    const history = useHistory();

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

    function DeleteItems(researche_id){
        
        axios.post("http://localhost:8070/researchers/deleteR", {researche_id : researche_id}).then(res => {
            console.log(researche_id)
            alert(res.data)
            history.go(0)
        }).catch(err => {
            console.log(err)
        })
    }

   

    //set sorted data by single instant
    const Sresearch = (props)=>{
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
                <td>
                    <a href={`/acceptresearchers/${props.record.researche_id}`}>Accept</a>
                </td>
                {/* <td>
                    <a href={`/deleteresearchers/${props.record.workshopid}`}>Delete</a>
                </td> */}
                <td>
                    <button type="button" onClick={() => DeleteItems(props.record.researche_id)}>Delete</button>
                </td>
            </tr>
        )
    }
   

    //maps sorted data
    const ListRe = postData.map((post)=>{
        return (
            <Sresearch record={post}/>
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
            <br/><h2 style={{fontFamily:'cursive'}}>Research Paper Details.</h2><br/>
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
                            <th>status</th>
                            <th>Accept</th>
                            <th>Delete</th>                             
                        </tr>
                    </thead>
                    <tbody>
                        {ListRe}            
                    </tbody>
                </table>
            </div>
            
            <Grid>
               <ResearcherPosts/> 
            </Grid>
            <Grid container alignItems="center" justify="center">             
                <Grid item xs={2} className="secondgrid" >
                        <Link to="/allresearcherview"><button className="btn btn-outline-primary">All Research Ppapers</button><br/><br/><br/></Link>
                        <Link to="/checkedresearcher"><button className="btn btn-outline-primary">Checked Research papers</button></Link><br/>
                     
                    
                </Grid>
                                 
            </Grid>
 
        </div>
    )
}
export default ListResearches;