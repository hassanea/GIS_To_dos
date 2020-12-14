import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
    marginTop: "15px",  
    marginBottom: "50px",  
  },
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
    fontWeight: 'bolder',
      
  },
}));



export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" to="/" className={classes.link}>
          <HomeIcon className={classes.icon} />
          Home
        </Link>
      
        <Link color="inherit" to="/overview" className={classes.link}>
          <FormatListBulletedIcon className={classes.icon} />
          Task Overview
        </Link>
      
        <Link color="inherit" to="/create" className={classes.link}>
          <AddCircleIcon className={classes.icon} />
          Create Task
        </Link>
      </Breadcrumbs>
    </Paper>
  );
}