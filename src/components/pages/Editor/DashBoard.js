import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';
import '../../CSSs/dashboardEditor.css';
import EditorAllConferenceView from './Conference/EditorAllConferenceView';

function DashBoard(){
    return(
        <div className="main">
            <Grid container xs={11} className="maingrid">
                <Grid item xs={3} className="secondgrid">
                    <Link to="#"><button className="btn btn-outline-primary">Research papers</button><br/><br/><br/></Link>
                    <Link to="/viewallworkshopseditor"><button className="btn btn-outline-primary">Workshops</button><br/><br/><br/></Link>
                    {/*<button className="btn btn-outline-primary">Researchers</button><br/><br/><br/>*/}
                    <Link to="/editorViewResearchers"><button className="btn btn-outline-primary">Researchers</button><br/><br/><br/></Link>
                    
                    
                </Grid>
                <Grid item xs={8} className="thirdgrid">
                    <Link to="/newConference"><button className="btn btn-outline-primary">New Conference</button></Link><br/>
                    
                    {/*<Link to="/editor"><button className="btn btn-outline-primary">Create workshop</button><br/><br/><br/></Link>*/}
                    {/*<ViewConference/>*/}
                    {<EditorAllConferenceView/>}
                </Grid>
                {/*<Grid item xs={1}>
                    <Link to="/displayUsers"><button className="btn btn-outline-primary">Users</button></Link><br/>
                </Grid>*/}
            </Grid>
        </div>
    )
}
export default DashBoard;