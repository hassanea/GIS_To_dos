import React from 'react';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
//import { Button } from '@material-ui/core';
//import Modal from './Modal.js';


class Buttonbar extends React.Component {
    
    
  render() {
      
    return (
        
    <div className="w3-bar btnBar">
        <Link to="/create" className="w3-bar-item w3-button" title="Create Task" aria-label="Create Task"> <AddCircleIcon fontSize="large" className="w3-indigo" /> </Link>
        <Link to="/modify" className="w3-bar-item w3-button" title="Modify Task" aria-label="Modify Task"> <RemoveCircleIcon fontSize="large" className="w3-indigo" /> </Link>
        <Link to="/overview" className="w3-bar-item w3-button" title="Task Overview" aria-label="Task Overview"> <FormatListBulletedIcon fontSize="large" className="w3-indigo" /> </Link>
        <div id="modal"></div>
        {/*<Modal/>*/
        }
        
    </div>
        
    );
  }
}

export default Buttonbar;