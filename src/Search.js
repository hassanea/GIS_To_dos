import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const Search = (props) => {
      
    return (
    <div>
     <Helmet>
       <title>Reroot Task Scheduler - Search Tasks</title> 
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
    <Link to="/" className="close-search">Close</Link>    
    <input className="search-toDos w3-pale-blue w3-wide w3-border w3-round" id="searchInput" type='text' placeholder='Search...' aria-label="Search filter"/>
    <div>
       <ol>             
       </ol>
    </div>    
    </div>
    );
}

export default Search;
