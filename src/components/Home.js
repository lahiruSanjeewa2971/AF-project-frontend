import React from 'react';
import "./CSSs/Home.css";
import Background from "../images/Background.jpeg";
import { Card, Grid } from '@material-ui/core';


var sectionStyle = {
    width: "100%",
    height: "440px",
    backgroundImage: `url(${Background})`,
};
var setColor = {
    color: "white",
    backgroundColor: "black",
    width: "820px",
    height: '200px'
    
}

function Home(){
    return(
        <div>
            <section style={sectionStyle}>
                <Grid xs={6} container style={{paddingTop:'110px', paddingLeft:'20px'}}>
                    <Card style={setColor}>
                        Sri Lanka Institue of Information Technology (SLIIT) is organizing an academic conference where researchers present results, workshops, and 
                        other activities. It is named “International Conference on Application Frameworks” – ICAF. 
                        Here, researchers will present their latest findings and implementations of different programming languages 
                        including Java, JavaScript, Python, ... 
                        Conference will be physically held at SLIIT. Only registered participants can attend the event.
                    </Card>
                </Grid>
            </section>
            
        </div>
    )
}
export default Home;