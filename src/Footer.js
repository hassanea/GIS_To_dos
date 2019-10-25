import React from 'react';
import logo from './logo.png';

class Footer extends React.Component {
  render() {
      
    return (
        
        <footer className="footer w3-indigo">
        <div className="w3-half w3-container">
        <img src={logo} alt="Reroot Pontiac's Logo" className="logo logo-foot"/>
        </div>
         <div className="w3-half w3-container w3-center w3-padding-24">© Reroot Task Scheduler 2019</div> </footer>
    );
  }
}

export default Footer;