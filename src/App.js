import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Scheduler from './Scheduler.js';
import Create from './Create.js';
import Modify from './Modify.js';
import Overview from './Overview.js';
import About from './About.js';
//import NotFound from './NotFound.js';


function App() {
  return (
    <div className="App">
      {/* Scheduler component */
      }
      <Route exact path='/' render={() => (
        <Scheduler/>
        )}/>
      
       <Route path='/create' render={() => (
        <Create/>
        )}/>
      
        <Route path='/modify' render={() => (
        <Modify/>
        )}/>
      
        <Route path='/overview' render={() => (
        <Overview/>
        )}/>
      
        <Route path='/about' render={() => (
        <About/>
        )}/>
      
      { //        <Route path="*" component={NotFound} status={404}/> 
      
      }
      
    </div>
  );
}

export default App;
