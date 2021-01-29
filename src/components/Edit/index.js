import React, {useState} from "react";
import Header from "../Header";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, ButtonBase } from "@material-ui/core";
import data from "./images";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import AudioPlay from "./AudioPlay.js";
import SimpleAccordion from "./Accordian";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import EditIcon from '@material-ui/icons/Edit';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    //backgroundColor:"#8a8aff"
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const Edit = () => {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = useState({ loading:true, showButton: true})

  const handleClick = (e, name, key) => {
    console.log("inside!!!",data[key]);
   // data[key].selected = !data[key].selected
    setState(prevState => ({
      ...prevState,
      showButton : !data[key].selected
    }))
    state.showButton ? console.log("shoule show") : console.log("not show");
  }

  return (
    <>
      <Header />
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button style={{ backgroundColor: "#d5d5d585" }}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Images" />
          </ListItem>

          <Grid container>
            <Grid container item xs={10} spacing={3}>
              {data.map((item, key) => {
                return (
                  <Grid item xs={2.5}>
                    <Paper name={item.name} className={classes.paper}>
                      <ButtonBase key={key} onClick={(e) => {handleClick(e, item.name, key)}}>
                        <img
                          className="imageScr"
                          alt={item.name}
                          src={item.logo}
                          width="180px"
                          height="150px"
                        />
                      </ButtonBase>
                      <Typography gutterBottom variant="subtitle1">
                        {item.name}
                      </Typography>
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <ListItem
            button
            style={{ backgroundColor: "#d5d5d585", marginTop: "2em" }}
          >
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Details" />
          </ListItem>
          <Paper elevation={3} style={{ width: "40%", marginTop: "10px" , marginLeft:"10px"}}>
            <div class="panel panel-default">
              <div class="panel-body">
                <div style={{ marginLeft: "20px", padding: "10px" }}>
                  <strong>Title:</strong>
                  <Input
                    placeholder="Title"
                    inputProps={{ "aria-label": "description" }}
                    style={{ marginLeft: "10px" }}
                  />
                </div>
                <div style={{ marginLeft: "20px", padding: "10px" }}>
                  <strong>Title Image:</strong>
                  <Input
                    placeholder="Title Image"
                    inputProps={{ "aria-label": "description" }}
                    style={{ marginLeft: "10px" }}
                  />
                </div>
                <div style={{ marginLeft: "20px", padding: "10px" }}>
                  <strong>Duration:</strong>
                  <Input
                    placeholder="20 mins"
                    inputProps={{ "aria-label": "description" }}
                    style={{ marginLeft: "10px" }}
                  />
                </div>
                <div style={{ marginLeft: "20px", padding: "10px" }}>
                  <strong>Music:</strong>
                  <Select
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Audio 1</MenuItem>
                    <MenuItem value={20}>Audio 2</MenuItem>
                    <MenuItem value={30}>Audio 3</MenuItem>
                    <MenuItem value={30}>Audio 4</MenuItem>
                    <MenuItem value={30}>Audio 5</MenuItem>
                  </Select>
                </div>
              </div>
            </div>
          </Paper>
        </List>
        <div style={{marginLeft:"40%", padding:"1em"}}>
        <Button variant="contained" color="primary" onClick={() => history.push('/View')}>
          Save
        </Button>
        <Button variant="outlined" style={{marginLeft:"20px"}}>Cancel</Button>
        </div>
      </div>
    </>
  );
};

export default Edit;
