import React from 'react';
import Appbar from './Appbar.js';
import SearchPlace from './SearchPlace.js';
import Main from './Main.js';
import Footer from './Footer.js';

const Scheduler = (props) => {
      
    return (
            
    <div className="App-theme">
      {/* Appbar component */
      }    
      <Appbar/>  
      {/* Search component */
      }    
      <SearchPlace/>
      {/* Main content component */
      }    
      <Main/>
      {/* Footer component */
      }    
      <Footer title="© Reroot Task Scheduler 2019-2020"/>
    </div>  
    );
}

export default Scheduler;