import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';
import '../../CSSs/dashboardEditor.css';

function DashBoard(){
    return(
        <div className="main">
            <Grid container xs={11} className="maingrid">
                <Grid item xs={2} className="secondgrid">
                    <Link to="#"><button className="btn btn-outline-primary">Research papers</button><br/><br/><br/></Link>
                    <Link to="/displayworkshops"><button className="btn btn-outline-primary">Workshops</button><br/><br/><br/></Link>
                    <button className="btn btn-outline-primary">Research-activities</button><br/><br/><br/>
                    
                </Grid>
                <Grid item xs={9} className="thirdgrid">
                    <Link to="/newConference"><button className="btn btn-outline-primary">New Conference</button></Link><br/>
                    {/*<Link to="/editor"><button className="btn btn-outline-primary">Create workshop</button><br/><br/><br/></Link>*/}
                </Grid>
            </Grid>
        </div>
    )
}
export default DashBoard;