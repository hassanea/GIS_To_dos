import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import MoreIcon from '@material-ui/icons/MoreVert';
import EcoIcon from '@material-ui/icons/Eco';
import InfoIcon from '@material-ui/icons/Info';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import HelpIcon from '@material-ui/icons/Help';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
    title: {
    display: 'none',
    flexGrow: 1,
    color: "lime",
    textShadow: "2px 2px 4px #000000",
    textAlign: "center",  
    animation: "animatezoom 0.8s",  
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  leafIcon: {
    color: "#8bc34a",
},    
  linkBtn: {
    textDecoration: "none",
    textAlign: "center"
},  
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },    
}));


export default function ButtonAppBar() {
  const classes = useStyles();
      const mr = {
    marginRight: '10px',  
}; 
  const headingTitle = "Reroot Task Scheduler";       
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Tooltip title="FAQs" aria-label="FAQs" placement="left">
      <MenuItem><Link to="/faqs" className={classes.linkBtn}><span style={mr}><QuestionAnswerIcon/></span>FAQs</Link>
      </MenuItem>
      </Tooltip>
      <Tooltip title="Help" aria-label="Help page" placement="left">
      <MenuItem><Link to="/help" className={classes.linkBtn}><span style={mr}><HelpIcon/></span>Help</Link>
      </MenuItem>
      </Tooltip>
      <Tooltip title="About" aria-label="About" placement="left">
      <MenuItem><Link to="/about" className={classes.linkBtn}><span style={mr}><EcoIcon/></span>About</Link>
      </MenuItem>
      </Tooltip>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <InfoIcon/>
        </IconButton>
        <p>Info</p>
      </MenuItem>
    </Menu>
  );  
    
  return (
    
    <nav aria-label="Navigation">
      <a href="#mainContent" className="skip-link" title="Skip to main content" aria-label="Skip to main content">Skip to main content</a>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Tooltip title="Home" aria-label="Home">
          <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="Menu" href="/">
            <EcoIcon fontSize="large" className={classes.leafIcon}/>
          </IconButton>
          </Tooltip>
          <Typography variant="h5" className={classes.title}>
            {headingTitle}
          </Typography>
          <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
            <Tooltip title="Info" aria-label="Reroot Info">
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <InfoIcon />
            </IconButton>
            </Tooltip>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
    </nav>      
  );
}
