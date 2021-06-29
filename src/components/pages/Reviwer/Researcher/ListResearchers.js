import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Grid,   } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Box from "@material-ui/core/Box";

function ListResearchers(){
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

   

    //set sorted data by single instant
    const Sresearch = (props)=>{
        return(
            <tr>
                 
                <td>{props.record.name}</td>
                <td>{props.record.status}</td>
                <td>
                    <a href={`/edititem/${props.record.workshopid}`}>Click</a>
                </td>
            </tr>
        )
    }
   

    //maps sorted data
    const Listresearch = postData.map((post)=>{
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
                            <th>Status</th>
                            {/* <th>Email</th> */}
                             
                        </tr>
                    </thead>
                    <tbody>
                        {Listresearch}            
                    </tbody>
                </table>
            </div>

            <Grid container alignItems="center" justify="center">             
                <Grid item xs={2} className="secondgrid" >
                        <Link to="#"><button className="btn btn-outline-primary">All Research Ppapers</button><br/><br/><br/></Link>
                        <Link to="#"><button className="btn btn-outline-primary">Research papers</button></Link><br/>
                     
                    
                </Grid>
                                 
            </Grid>
 
        </div>
    )
}
export default ListResearchers;