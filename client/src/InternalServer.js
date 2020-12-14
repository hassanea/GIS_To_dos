import React from 'react';
import {Helmet} from "react-helmet";

const InternalServer = (props) => {
  

    return (

    <div>
     <Helmet>
      <title>500 - Internal Server Error</title>
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
     <div className="w3-row">
     <div className="w3-container w3-center">
          <h1>500</h1>
          <p className="internalServer">500 Internal Server Error, please Contact Administrator!!!</p>
        </div>
        </div>
        </div>

    )
  
};
export default InternalServer;
