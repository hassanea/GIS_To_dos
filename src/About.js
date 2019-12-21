import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import {Helmet} from "react-helmet";

class About extends React.Component {
  render() {
      
        const backtoHome = {
            float: 'left',
        };
      
       const logoImg = {
           margin: 'auto',
           display: 'block',
       }
      
    return (
        
        <div>
         <Helmet>
           <title>Reroot Task Scheduler - About</title>
         </Helmet>
          <Link to="/" style={backtoHome}>
          <HomeIcon/>
          Home
          </Link>
        <h1>About Task Scheduler:</h1>
        <img src={logo} alt="Reroot Pontiac's Logo" style={logoImg} className="logo w3-padding"/>
        <hr/>
        </div>
        
    );
  }
}

export default About;