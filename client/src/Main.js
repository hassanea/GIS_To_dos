import React from 'react';
import { Link } from 'react-router-dom';
import Buttonbar from './Buttonbar.js';
import Map from './Map.js';

const Main = (props) => {

      
    return (
            
      <main id="mainContent" tabIndex="-1">
       <div className="w3-row">
        <div className="w3-container w3-col">
         <Buttonbar/>
         <Map/>
         <div className="open-search">
              <Link to="/search" title="Search Tasks">Find tasks</Link>    
        </div>
      </div>
      </div>
      </main>
        
    );
}

export default Main;