import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EcoIcon from '@material-ui/icons/Eco';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#ffc107",
    textShadow: "2px 2px 4px #000000",
  },
  leafIcon: {
    color: "#8bc34a",
},    
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const headingTitle = "Reroot Task Scheduler";    
    
  return (
    
    <div>
      <a href="#mainContent" className="skip-link" title="Skip to main content">Skip to main content</a>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="Menu" href="/">
            <EcoIcon fontSize="large" className={classes.leafIcon}/>
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            {headingTitle}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    </div>      
  );
}
