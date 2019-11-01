import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
//import Modal from './Modal.js';


class Buttonbar extends React.Component {
    
    
  render() {
      
    return (
        
    <div className="w3-bar btnBar">
        <a href="/" className="w3-bar-item w3-button" title="Create Task" aria-label="Create Task"> <AddCircleIcon fontSize="large" /> </a>
        <a href="/" className="w3-bar-item w3-button" title="Modify Task" aria-label="Modify Task"> <RemoveCircleIcon fontSize="large" /> </a>
        <a href="/" className="w3-bar-item w3-button" title="Task Overview" aria-label="Task Overview"> <FormatListBulletedIcon fontSize="large" /> </a>
        {/*<Modal/>*/
        }
        
    </div>
        
    );
  }
}

export default Buttonbar;