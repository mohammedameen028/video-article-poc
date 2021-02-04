import React from "react";
import Header from "../Header";
import { makeStyles } from '@material-ui/core/styles';
import templateData from './templateData';
import {useHistory} from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: '70%',
//     height: '100%',
//   },
//   icon: {
//     color: 'rgba(255, 255, 255, 0.54)',
//   },
// }));

// const Template = () => {
//   const history = useHistory();
//   const classes = useStyles();
//      return (
//      <>
//     <Header />
//     <div className={classes.root}>
//       <GridList cellHeight={200} className={classes.gridList}>
//         <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
//           <ListSubheader >SELECT TEMPLATES</ListSubheader>
//         </GridListTile>
//         {templateData.map((tile) => (
//           <GridListTile key={tile.img}><Button
//           variant="contained"
//           startIcon={<Avatar src= {tile.img} />}
//         >
//         </Button>
//             <img src={tile.img} alt={tile.title} style={{ height: '50%', width: '50%'}} />
//             <GridListTileBar
//               title={tile.title}
//               subtitle={<span>Duration: {tile.duration} </span>}
//               actionIcon={
//                 <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
//                   <InfoIcon />
//                 </IconButton>
//               }
//             />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//     <div style={{marginLeft:"40%", padding:"1em"}}>
//         <Button variant="contained" color="primary" onClick={() => history.push('/View')}>
//           Save/Export
//         </Button>
//         </div>
//     </>
//   );
//   };
  
//   export default Template;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    //backgroundColor:"#8a8aff"
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    fontSize:'large',
    fontWeight:'bold',
    top: 50,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  AppBarCss : {
    backgroundColor:'black'
},
}));

function Template(props) {
  const classes = useStyles();
  const history = useHistory();
  const { urlClicked } = props.location.state;

  console.log("userClicjed:::", urlClicked);
  return (
    <>
    <Header />
    <AppBar className={classes.AppBarCss} position="static">
    <Toolbar>
    <Typography className={classes.title} variant="h6" noWrap>
            Select Templates
    </Typography>
    </Toolbar>
    </AppBar>
    <div style={{marginLeft:"30%"}}>
    <Grid container spacing={3}>
            <Grid container item xs={8} spacing={5}>
                {templateData.map((item,key) => {
                  return (
                    <Grid item xs={4}>
                      <Paper name={item.title} className={classes.paper}>
                        <ButtonBase
                          key={key}
                          onClick={() =>
                            history.push({
                              pathname: "/Edit",
                              state: { urlClicked: urlClicked },
                            })
                          }
                        >
                          <img
                            className="imageScr"
                            alt={item.title}
                            src={item.img}
                            width="150px"
                            height="140px"
                          />
                        </ButtonBase>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          color="inherit"
                        >
                          {item.title}({item.duration})
                          <span className={classes.imageMarked} />
                        </Typography>
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
</div>



    {/* <div className={classes.root}>
      {templateData.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
          onClick={() => history.push({
            pathname: '/Edit',
            state: {urlClicked:urlClicked}
          })}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.img})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              ({image.duration})
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div> */}
    </>
  );
}

export default Template;


