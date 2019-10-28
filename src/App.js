import React from 'react';
import './App.css';
import Appbar from './Appbar.js';
import Search from './Search.js';
import Main from './Main.js';
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
      <Main/>
      {
      /* Footer component */
      }
      <Footer/>
    </div>
  );
}

export default App;
