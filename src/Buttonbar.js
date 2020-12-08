import React from 'react';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';


const Buttonbar = (props) => {
    
    return (
        
    <div className="w3-bar btnBar">
        <Link to="/create" className="w3-bar-item w3-button w3-ripple" title="Create Task" aria-label="Create Task"> <AddCircleIcon fontSize="large" className="w3-indigo" /> </Link>
        <Link to="/overview" className="w3-bar-item w3-button w3-ripple" title="Task Overview" aria-label="Task Overview"> <FormatListBulletedIcon fontSize="large" className="w3-indigo" /> </Link>
    </div>    
    )
    
};

export default Buttonbar;