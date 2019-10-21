import React from 'react';
import './App.css';
import Nav from './Nav.js';
import Header from './Header.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      {/* Navbar component */
      }
      <Nav/>
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
