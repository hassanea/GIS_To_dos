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
           <meta charset="utf-8" />  
           <meta name="viewport" content="width=device-width, initial-scale=1"/>
           <meta name="author" content="Evan H." />  
           <meta name="theme-color" content="#ffffff"/>
           <meta name="description" content="Reroot Pontiac's Task Scheduler"/>
           <meta name="keywords" content="Reroot Pontiac, Etc." /> 
           <meta name="og:title" content="Reroot Task Scheduler"/>
           <meta name="og:type" content="article"/>
           <meta name="og:url" content="https://www.reroot-task-scheduler.com"/>
           <meta name="og:site_name" content="Reroot Task Scheduler"/>
           <meta name="og:description" content=""/>
           <meta name="og:phone_number" content="248-703-0288"/>
           <meta name="og:email" content="info@rerootgi.com"/>
           <meta name="og:street-address" content="76 Henderson Street"/>
           <meta name="og:postal-code" content="48341"/>
           <meta name="og:locality" content="Pontiac"/>
           <meta name="og:region" content="MI"/>
           <meta name="og:country-name" content="USA"/>   
           <link rel="canonical" href="https://www.reroot-task-scheduler.com"/> 
         </Helmet>
          <Link to="/" style={backtoHome}>
          <HomeIcon/>
          Home
          </Link>
        <h1>About Task Scheduler:</h1>
        <img src={logo} alt="Reroot Pontiac's Logo" style={logoImg} className="logo w3-padding"/>
        <hr/>
        <p>Reroot Pontiac's Task Scheduler</p>
        </div>
        
    );
  }
}

export default About;