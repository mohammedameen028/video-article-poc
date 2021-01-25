import React from "react";
import Header from "../Header";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Paper, ButtonBase } from "@material-ui/core";
import {data} from './images.json'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    padding: theme.spacing(4),
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

  return (
    <>
      <Header />
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            {data.map((item, key) => {
              return (
                <Grid item xs={3}>
                  <Paper name={item.name} className={classes.paper}>
                    <ButtonBase
                      key={key}
                    >
                      <img
                        className="imageScr"
                        alt={item.name}
                        src={item.logo}
                        width="200px"
                        height="180px"
                      />
                    </ButtonBase>
                    {/* <Typography gutterBottom variant="subtitle1">
                          {item.name}
                        </Typography> */}
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Edit;
