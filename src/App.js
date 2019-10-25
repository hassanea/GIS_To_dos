import React from 'react';
import './App.css';
import Appbar from './Appbar.js';
import Search from './Search.js';
//import Header from './Header.js';
import Buttonbar from './Buttonbar.js';
import Map from './Map.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      {/* Appbar component */
      }
      <Appbar/>
      {/* Search component */
      }
      <Search/>
      {
      /* Main content */
      }
      <main id="mainContent" tabIndex="-1">
      <div className="w3-row">
       <div className="w3-container w3-col">
      {
      /* Header component */
      }
      {
//      <Header/>
      }
      <Buttonbar/>
      <Map/>
      
      </div>
      </div>
      </main>
      {
      /* Footer component */
      }
      <div className="w3-row">
      <Footer/>
      </div>
    </div>
  );
}

export default App;
