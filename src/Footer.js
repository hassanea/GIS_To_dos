import React from 'react';
import logo from './logo.png';

class Footer extends React.Component {
  render() {
      
    return (
        
        <footer className="footer w3-indigo">
        <div>
        <img src={logo} alt="Reroot Pontiac's Logo" className="logo logo-foot"/><br/>
        </div> © Reroot Task Scheduler 2019</footer>
    );
  }
}

export default Footer;