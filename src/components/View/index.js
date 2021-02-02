import React from "react";
import ReactPlayer from "react-player";
import { Button, Grid } from "@material-ui/core";
// import video from './assets/CrystalBallStory1.mp4'
import Header from "../Header";
import Form from './Form'
import {Link} from "react-router-dom";
import '../View/index.css'


const View = () => {
  return (
    <div className="background">
      <Header/>
      <Grid container spacing={3}>
        <Grid item xs={6} style={{paddingTop:"8em", paddingLeft:"8em"}}>
          <Form/>
        </Grid>
        <Grid item xs={6} style={{paddingTop:"8em"}}>
          <div style = {{marginLeft:"80%", padding:"10px"}}>
            <Button variant="outlined" color="black" component={Link} to="/edit" style={{fontSize:"large", fontFamily:"revert", borderWidth: "medium"}}> Edit</Button>
          </div>
          <ReactPlayer url="https://www.meredith.com/sites/default/files/NEWFRONT_2020_CUT_21_CC_NEW_MUSIC_GMAIL_720p30.mp4" playing={false} controls={true}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default View;

