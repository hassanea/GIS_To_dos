import React from 'react';
import Appbar from './Appbar.js';
import Search from './Search.js';
import Main from './Main.js';
import Footer from './Footer.js';

class Scheduler extends React.Component {
  render() {
      
    return (
            
    <div className="App-theme">
      {/* Appbar component */
      }    
      <Appbar/>
      {/* Search component */
      }    
      <Search/>
      {/* Main content component */
      }    
      <Main/>
      {/* Footer component */
      }    
      <Footer/>
    </div>  
    );
  }
}

export default Scheduler;