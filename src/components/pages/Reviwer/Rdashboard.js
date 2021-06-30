import React from "react";
import { Grid,borderColor  } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Box from "@material-ui/core/Box";
import WorkshopPost from './Workshops/WorkshopPost'



function dashBoard(){
    return(
        <div>
            <Box 
                borderColor="primary.main" 
                borderTop={4} 
                borderBottom={4}
                >
                <h1>Review research papers & Workshops</h1>
            </Box>
                     
            <Grid container alignItems="center" justify="center">             
                <Grid item xs={2} className="secondgrid" >
                        <Link to="/listworkshops"><button className="btn btn-outline-primary">Check Workshops</button><br/><br/><br/></Link>
                        <Link to="/listresearchers"><button className="btn btn-outline-primary">Check Research papers</button></Link><br/>
                     
                    
                </Grid>
                 
                                 
            </Grid>
             
            
                    
        </div>
         
    )
}
export default dashBoard;