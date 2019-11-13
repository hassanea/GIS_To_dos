import React from 'react';
import TaskBreadcrumb from './TaskBreadcrumb.js';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import EditIcon from '@material-ui/icons/Edit';

class Overview extends React.Component {
  render() {
      
    return (
        
        <div className="w3-container">
          <TaskBreadcrumb/> 
          <div className="w3-card-4">
          <div className="w3-container w3-green">
        <h1 className="w3-animate-top">Task Overview:</h1>
          </div>
          <h3>Property Name:</h3>
          <div className="w3-responsive">
             <table className="w3-table-all w3-card-4 w3-hoverable w3-centered">
              <thead>    
              <tr className="w3-pale-yellow">
                <th>Edit</th>
                <th>Task ID</th>
                <th>Task Name</th>
                <th>Task Description</th>
                <th>Person responsible</th>
                <th>Task Complete</th>
                <th>Reminder</th>
              </tr>
              </thead>
             {
                /* Dummy rows below!!! */
              
             }
            <tbody>
              <tr>
                <td><button className="w3-button" title="Task reminder"> <EditIcon /> </button> </td>
                <td>01</td>
                <td>Feed Chicken</td>
                <td>Feed chickens within the coup</td>
                <td>Bob McPhelman</td>
                <td> <button className="w3-button" title="Task complete"> <DoneOutlineIcon /> </button> </td>
                <td><button className="w3-button" title="Task reminder"> <NotificationsActiveIcon /> </button> </td>
              </tr>
      
              <tr>
                <td><button className="w3-button" title="Task reminder"> <EditIcon /> </button> </td>
                <td>02</td>
                <td>Finish paperwork</td>
                <td>Complete tax papers</td>
                <td>Marianne Sandersson</td>
                <td> <button className="w3-button" title="Task complete"> <DoneOutlineIcon /> </button> </td>
                <td><button className="w3-button" title="Task reminder"> <NotificationsActiveIcon /> </button> </td>
              </tr>
            </tbody>  
      
             </table>
            </div>
        
        </div>
        </div>    
    );
  }
}

export default Overview;