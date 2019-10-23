import React from 'react';
import './App.css';
import Appbar from './Appbar.js';
import Search from './Search.js';
import Header from './Header.js';
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
       <div className="w3-container">
      {
      /* Header component */
      }
      <Header/>
      </div>
      </main>
      {
      /* Footer component */
      }
      <Footer/>
    </div>
  );
}

export default App;
