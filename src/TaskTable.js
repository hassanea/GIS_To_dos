import React from 'react';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

class TaskTable extends React.Component {    
  render() {
      
    return (
            
<div>        
    <div className="w3-responsive">
             <table className="w3-table-all w3-card-4 w3-hoverable w3-centered">
              <thead>    
              <tr className="w3-pale-yellow">
                <th>Task ID</th>
                <th>Task Name</th>
                <th>Task Description</th>
                <th>Task Location</th>
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
                <td>01</td>
                <td>Feed Chicken</td>
                <td>Feed chickens within the coup</td>
                <td>Reroot Pontiac Headquarters</td>
                <td>Bob McPhelman</td>
                <td> <button className="w3-button" title="Task complete"> <DoneOutlineIcon /> </button> </td>
                <td><button className="w3-button" title="Task reminder"> <NotificationsActiveIcon /> </button> </td>
              </tr>
      
              <tr>
                <td>02</td>
                <td>Finish paperwork</td>
                <td>Complete tax papers</td>
                <td>Reroot Pontiac Headquarters</td>
                <td>Marianne Sandersson</td>
                <td> <button className="w3-button" title="Task complete"> <DoneOutlineIcon /> </button> </td>
                <td><button className="w3-button" title="Task reminder"> <NotificationsActiveIcon /> </button> </td>
              </tr>
            </tbody>  
      
             </table>
         </div>
     </div>
    );
  }
}

export default TaskTable;