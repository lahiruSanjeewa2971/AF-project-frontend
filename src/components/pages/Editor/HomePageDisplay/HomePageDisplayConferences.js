import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function HomePageDisplayConferences(){
    
    const [postdata, setPostdata] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8070/conferences/displaySortedconferences").then((res) => {
            setPostdata(res.data);
            console.log(postdata)
        }).catch((err) => {
            alert(err);
        })
    }, [])

    //display part
    const ListAllConferences = (props) => {
        return(
            <div>
                <Card style={{backgroundColor:'#e0f7fa'}}>
                    <CardHeader title={props.record.title}/>
                    <CardContent>
                        <Typography>
                            {props.record.date}
                        </Typography>
                        <Typography style={{paddingBottom:'3px'}}>
                            {props.record.note}
                        </Typography>
                        {/*<button className="btn btn-outline-primary">Click for more Details</button>*/}
                        {/*<Link to="/viewmoredetails">Click for more Details</Link>*/}
                        <Link to={`/viewmoredetails/${props.record.conferenceid}`} style={{marginRight:'8px'}}>Click for more Details</Link>
                        
                    </CardContent>
                </Card>
            </div>
        )
    }

    const conferenceAll = postdata.map((post) => {
        return (
            <div className="row justify-content-center" style={{padding:'30px 30px 30px 30px'}}>
                <Grid item style={{width:'600px'}}>
                    <ListAllConferences record = {post}/>
                </Grid>
            </div>
        )
    })

    return(
        <div>
            <h2>Upcoming Events.</h2>
            <Grid container spacing={2} className="row justify-content-center">
                {conferenceAll}
            </Grid>
        </div>
    )
}
export default HomePageDisplayConferences;