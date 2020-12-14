import React from 'react';
import logo from './logo.png';

const Footer = (props) => {
      
    return (
        <div className="w3-row">
        <footer className="footer w3-indigo">
        <div className="w3-half w3-container">
        <img src={logo} alt="Reroot Pontiac's Logo" className="logo-foot"/>
        </div>
         <div className="w3-half w3-container w3-center w3-padding-24">{props.title}</div> </footer>
        </div>
    )
};

export default Footer;