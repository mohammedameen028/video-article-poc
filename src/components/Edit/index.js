// import React, {useState} from "react";
// import Header from "../Header";
// import { makeStyles } from "@material-ui/core/styles";
// import { Grid, Paper, ButtonBase } from "@material-ui/core";
// import data from "./images";
// import Input from "@material-ui/core/Input";
// import MenuItem from "@material-ui/core/MenuItem";
// import Typography from "@material-ui/core/Typography";
// import Select from "@material-ui/core/Select";
// import Button from "@material-ui/core/Button";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/Inbox";
// import EditIcon from '@material-ui/icons/Edit';
// import {useHistory} from 'react-router-dom'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 2,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//     //backgroundColor:"#8a8aff"
//   },
//   appBar: {
//     borderBottom: `1px solid ${theme.palette.divider}`,
//   },
//   toolbar: {
//     flexWrap: "wrap",
//   },
//   toolbarTitle: {
//     flexGrow: 1,
//   },
//   link: {
//     margin: theme.spacing(1, 1.5),
//   },
// }));

// const Edit = () => {
//   const classes = useStyles();
//   const history = useHistory();
//   const [state, setState] = useState({ loading:true, showButton: true})

//   const handleClick = (e, name, key) => {
//     console.log("inside!!!",data[key]);
//    // data[key].selected = !data[key].selected
//     setState(prevState => ({
//       ...prevState,
//       showButton : !data[key].selected
//     }))
//     state.showButton ? console.log("shoule show") : console.log("not show");
//   }

//   return (
//     <>
//       <Header />
//       <div className={classes.root}>
//         <List component="nav" aria-label="main mailbox folders">
//           <ListItem button style={{ backgroundColor: "#d5d5d585" }}>
//             <ListItemIcon>
//               <InboxIcon />
//             </ListItemIcon>
//             <ListItemText primary="Images" />
//           </ListItem>

//           <Grid container>
//             <Grid container item xs={10} spacing={3}>
//               {data.map((item, key) => {
//                 return (
//                   <Grid item xs={2.5}>
//                     <Paper name={item.name} className={classes.paper}>
//                       <ButtonBase key={key} onClick={(e) => {handleClick(e, item.name, key)}}>
//                         <img
//                           className="imageScr"
//                           alt={item.name}
//                           src={item.logo}
//                           width="180px"
//                           height="150px"
//                         />
//                       </ButtonBase>
//                       <Typography gutterBottom variant="subtitle1">
//                         {item.name}
//                       </Typography>
//                     </Paper>
//                   </Grid>
//                 );
//               })}
//             </Grid>
//           </Grid>
//           <ListItem
//             button
//             style={{ backgroundColor: "#d5d5d585", marginTop: "2em" }}
//           >
//             <ListItemIcon>
//               <EditIcon />
//             </ListItemIcon>
//             <ListItemText primary="Details" />
//           </ListItem>
//           <Paper elevation={3} style={{ width: "40%", marginTop: "10px" , marginLeft:"10px"}}>
//             <div class="panel panel-default">
//               <div class="panel-body">
//                 <div style={{ marginLeft: "20px", padding: "10px" }}>
//                   <strong>Title:</strong>
//                   <Input
//                     placeholder="Title"
//                     inputProps={{ "aria-label": "description" }}
//                     style={{ marginLeft: "10px" }}
//                   />
//                 </div>
//                 <div style={{ marginLeft: "20px", padding: "10px" }}>
//                   <strong>Title Image:</strong>
//                   <Input
//                     placeholder="Title Image"
//                     inputProps={{ "aria-label": "description" }}
//                     style={{ marginLeft: "10px" }}
//                   />
//                 </div>
//                 <div style={{ marginLeft: "20px", padding: "10px" }}>
//                   <strong>Duration:</strong>
//                   <Input
//                     placeholder="20 mins"
//                     inputProps={{ "aria-label": "description" }}
//                     style={{ marginLeft: "10px" }}
//                   />
//                 </div>
//                 <div style={{ marginLeft: "20px", padding: "10px" }}>
//                   <strong>Music:</strong>
//                   <Select
//                     displayEmpty
//                     className={classes.selectEmpty}
//                     inputProps={{ "aria-label": "Without label" }}
//                   >
//                     <MenuItem value="">
//                       <em>None</em>
//                     </MenuItem>
//                     <MenuItem value={10}>Audio 1</MenuItem>
//                     <MenuItem value={20}>Audio 2</MenuItem>
//                     <MenuItem value={30}>Audio 3</MenuItem>
//                     <MenuItem value={30}>Audio 4</MenuItem>
//                     <MenuItem value={30}>Audio 5</MenuItem>
//                   </Select>
//                 </div>
//               </div>
//             </div>
//           </Paper>
//         </List>
//         <div style={{marginLeft:"40%", padding:"1em"}}>
//         <Button variant="contained" color="primary" onClick={() => history.push('/View')}>
//           Save
//         </Button>
//         <Button variant="outlined" style={{marginLeft:"20px"}}>Cancel</Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Edit;

//2
import React from 'react';
import Header from "../Header";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import Redo from '@material-ui/icons/Redo';
import Close from '@material-ui/icons/Close';
import Done from '@material-ui/icons/Done';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AdjustIcon from '@material-ui/icons/Adjust';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ReactPlayer from "react-player";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';
import CropRotateIcon from '@material-ui/icons/CropRotate';
import BrightnessAutoIcon from '@material-ui/icons/BrightnessAuto';
import PhotoFilterIcon from '@material-ui/icons/PhotoFilter';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router-dom';
import { Button } from "@material-ui/core";
import FaceIcon from '@material-ui/icons/Face';
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import Slider from '@material-ui/core/Slider';
import PlayCircleFilledSharpIcon from '@material-ui/icons/PlayCircleFilledSharp';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import FastForwardIcon from '@material-ui/icons/FastForward';
import editImage from './images/edit.png'
import TextEdit from './images/TextEdit.png'
import Modal from '@material-ui/core/Modal';
import test from '../View/assets/test.mp4'
import video2 from '../View/assets/recipetest.mp4'



const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
  AppBarCss: {
    backgroundColor: 'black'
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

function valuetext(value) {
  return `${value}°C`;
}

function Edit(props) {
  const classes = useStyles();
  const history = useHistory();

  const { urlClicked } = props.location.state;

  console.log("urlClicked last:::", urlClicked);
  const [value, setValue] = React.useState(0);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [time, setTime] = React.useState([20, 37]);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <img src={TextEdit} style={{ width: '100%', height: '100%' }} />
    </div>
  );
  const handleChanges = (event, newValue) => {
    setTime(newValue);
  };
  return (
    <>
      <Header />
      <div>
        <AppBar className={classes.AppBarCss} position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="off"
            aria-label="scrollable prevent tabs example"
          >
            <Tab icon={<AddAPhotoIcon />} aria-label="AddAPhotoIcon" {...a11yProps(0)} />
            <Tab icon={<AdjustIcon />} aria-label="AdjustIcon" {...a11yProps(1)} />
            <Tab icon={<AudiotrackIcon />} aria-label="AudiotrackIcon" {...a11yProps(2)} />
            <Tab icon={<BlurCircularIcon />} aria-label="BlurCircularIcon" {...a11yProps(3)} />
            <Tab icon={<CropRotateIcon />} aria-label="CropRotateIcon" {...a11yProps(4)} />
            <Tab icon={<BrightnessAutoIcon />} aria-label="BrightnessAutoIcon" {...a11yProps(5)} />
            <Tab icon={<PhotoFilterIcon />} aria-label="PhotoFilterIcon" {...a11yProps(6)} />
            <Tab icon={<FaceIcon />} aria-label="FaceIcon" {...a11yProps(7)} />
            <Tab icon={<FormatSizeIcon />} aria-label="FormatSizeIcon" {...a11yProps(8)} onClick={handleOpen} />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          Add Photos/Videos
      </TabPanel>
        <TabPanel value={value} index={1}>
          Auto Adjust
      </TabPanel>
        <TabPanel value={value} index={2}>
          Add Audio track
      </TabPanel>
        <TabPanel value={value} index={3}>
          Blur  Circular
      </TabPanel>
        <TabPanel value={value} index={4}>
          Crop/Rotate
      </TabPanel>
        <TabPanel value={value} index={5}>
          Brightness
      </TabPanel>
        <TabPanel value={value} index={6}>
          Photo/Movie Filter
      </TabPanel>
        <TabPanel value={value} index={7}>
          Face
      </TabPanel>
        <TabPanel value={value} index={8}>
          Add Text
      </TabPanel>
      </div>
      {urlClicked === 1 ?
      <ReactPlayer url={test} playing={false} controls={true} width='100%' />
      :
      <ReactPlayer url={video2} playing={false} controls={true} width='100%' />
      }
      
      <div>
        <img src={editImage} style={{ width: '100%', height: '100%' }} />
        {/* <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
          style={{width: 'auto'}}
        >
          <BottomNavigationAction label="Undo" icon={<RestoreIcon />} aria-label="Undo"/>
          <BottomNavigationAction label="Redo" icon={<Redo />} aria-label="Redo"/>
          <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} aria-label="Favorite"/>
          <BottomNavigationAction label="Add Location" icon={<LocationOnIcon />} aria-label="Add Location"/>
          <BottomNavigationAction label="Done" icon={<Done />} aria-label="Done"/>
          <BottomNavigationAction label="Close" icon={<Close />} aria-label="Close"/>
        </BottomNavigation> */}
      </div>
      {/* <div className={classes.root} style={{marginLeft:"30%", padding:"1em"}} >
      <Typography id="range-slider" gutterBottom>
      <Tab icon={<FastRewindIcon/>} aria-label="FastRewindIcon"/>
      <Tab icon={<PlayCircleFilledSharpIcon />} aria-label="PlayCircleFilledSharpIcon"/>
      <Tab icon={<FastForwardIcon/>} aria-label="FastForwardIcon"/>
      </Typography>
      <Slider
        value={time}
        onChange={handleChanges}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div> */}
      <div style={{ marginLeft: "40%", padding: "1em" }}>
        <Button variant="contained" color="primary" onClick={() => history.push('/View')}>
          Preview
        </Button>
      </div>
    </>
  );
}

export default Edit;
