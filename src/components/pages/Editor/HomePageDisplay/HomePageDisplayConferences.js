import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
}));

function HomePageDisplayConferences(){
    const classes = useStyles();
    const [postdata, setPostdata] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8070/conferences/displayconferences").then((res) => {
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
                <Card style={{width:'50%'}}>
                    <CardHeader title={props.record.title}/>
                </Card> 
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
                </CardContent>
            </div>
        )
    }

    const conferenceAll = postdata.map((post) => {
        return (
            <ListAllConferences record = {post}/>
        )
    })

    return(
        <div>{conferenceAll}</div>
    )
}
export default HomePageDisplayConferences;