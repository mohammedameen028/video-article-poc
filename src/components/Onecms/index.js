import React, {useState} from "react";
import Header from "../Header";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { DataGrid } from '@material-ui/data-grid';
import Button from "@material-ui/core/Button";
import {useHistory} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  AppBarCss : {
      backgroundColor:'black'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'thumbnail', headerName: 'THUMBNAIL', width: 200,
    renderCell: (params) =>(
          <img src={(params.value)}/>
    )
    },
    { field: 'headline', headerName: 'HEADLINE', width: 1000,
    renderCell: (params) =>(
        <a href={(params.value)}>{(params.value)}</a>
  )
 }
  ];
  
  const rows = [
    { id: 1, headline: 'https://people.com/royals/prince-harrys-friend-tom-bradby-opens-up-about-harrys-heartbreak-and-royal-family-tensions/', thumbnail:"https://imagesvc.timeincapp.com/v3/mm/image?url=https://dev-static.onecms.io/wp-content/uploads/sites/6/2020/12/29/meghan-markle-prince-harry-150x150.jpg&w=64&h=64&c=sc&poi=auto&q=60"},
    { id: 2, headline: 'https://www.foodandwine.com/recipes/simple-smoked-turkey', thumbnail: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/9/2020/09/11/how-to-carve-a-turkey-FT-BLOG0920-150x150.jpg&w=64&h=64&c=sc&poi=auto&q=60' },
    { id: 3, headline: 'https://www.foodandwine.com/wine/sweet-wines', thumbnail: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https://dev-static.onecms.io/wp-content/uploads/sites/9/2019/10/sweet-wines-Taylor-Fladgate-30-Year-Old-Tawny-Port-FT-BLOG1019-150x150.jpg&w=64&h=64&c=sc&poi=auto&q=60' },
    { id: 4, headline: 'https://www.myrecipes.com/how-to/replace-vanilla-extract-with-bourbon', thumbnail: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https://dev-static.onecms.io/wp-content/uploads/sites/19/2018/10/31/vanilla-beans-getty-150x150.jpg&w=64&h=64&c=sc&poi=auto&q=60' },
    { id: 5, headline: 'https://www.myrecipes.com/news/favorite-holiday-candy-by-state-2019', thumbnail: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https://dev-static.onecms.io/wp-content/uploads/sites/19/2019/12/04/JCBMHC17-RKM_1-150x150.png&w=64&h=64&c=sc&poi=auto&q=60' },
    { id: 6, headline: 'https://ew.com/podcasts/prince-harry-meghan-markle-first-podcast-episode', thumbnail:"https://imagesvc.timeincapp.com/v3/mm/image?url=https://dev-static.onecms.io/wp-content/uploads/sites/6/2020/12/29/meghan-markle-prince-harry-150x150.jpg&w=64&h=64&c=sc&poi=auto&q=60"},
    { id: 7, headline: 'https://ew.com/tv/joe-biden-jill-biden-new-years-rockin-eve-2021', thumbnail: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https://dev-static.onecms.io/wp-content/uploads/sites/6/2020/12/30/joe-and-jill-biden-150x150.jpg&w=64&h=64&c=sc&poi=auto&q=60' },
    { id: 8, headline: 'https://www.foodandwine.com/wine/sweet-wines', thumbnail: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https://dev-static.onecms.io/wp-content/uploads/sites/9/2019/10/sweet-wines-Taylor-Fladgate-30-Year-Old-Tawny-Port-FT-BLOG1019-150x150.jpg&w=64&h=64&c=sc&poi=auto&q=60' },
    { id: 9, headline: 'https://www.myrecipes.com/how-to/replace-vanilla-extract-with-bourbon', thumbnail: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https://dev-static.onecms.io/wp-content/uploads/sites/19/2018/10/31/vanilla-beans-getty-150x150.jpg&w=64&h=64&c=sc&poi=auto&q=60' },
    { id: 10, headline: 'https://www.myrecipes.com/news/favorite-holiday-candy-by-state-2019', thumbnail: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https://dev-static.onecms.io/wp-content/uploads/sites/19/2019/12/04/JCBMHC17-RKM_1-150x150.png&w=64&h=64&c=sc&poi=auto&q=60' },
  ];

function Onecms() {
  const history = useHistory();
  const classes = useStyles();

  const [state, setstate] = useState({urlClicked: 0})

  const handleclick = (e) => {
    console.log("inside!!!!", e.row.id);
    setstate((prevState) => {
      return{
        ...prevState,
        urlClicked: e.row.id
      }
    })
  }

  const handleProceed = (state) => {
    history.push({
      pathname: `/Template`,
      state: {urlClicked:state.urlClicked}
    })
  }

  return (
    <>
    <Header/>
    <div className={classes.root}>
      <AppBar className={classes.AppBarCss} position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            OneCms PlatForm
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} onRowClick={(e) => handleclick(e)}/>
      </div>
      <div style={{marginLeft:"40%", padding:"1em"}}>
        <Button variant="contained" color="primary" onClick={(e) => handleProceed(state)}>
          Proceed to Edit
        </Button>
        </div>
    </div>
    </>
  );
}

export default Onecms;
