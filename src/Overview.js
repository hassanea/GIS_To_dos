import React from 'react';
import TaskBreadcrumb from './TaskBreadcrumb.js';
/* https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg */
/* https://www.w3schools.com/howto/howto_js_todolist.asp */
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import EditIcon from '@material-ui/icons/Edit';

class Overview extends React.Component {


/* renderTaskData() {

return this.props.tasks.map(task =>

  <tr key={task.TASK_ID}>
    <td>{task.TASK_ID}</td>
    <td>{task.TASK_NAME}</td>
    <td>{task.TASK_DESC}</td>
    <td>{task.TASK_LOCATION}</td>
    <td>{task.ASSIGNED_TO}</td>
  </tr>
)
} */
    
onTaskComplete() {
 console.log("Task Complete!")   
}    



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
            {
              /*{this.renderTaskData()}*/
            }

            <tr>
                <td><button className="w3-button" title="Task reminder"> <EditIcon /> </button> </td>
                <td>01</td>
                <td>Feed Chicken</td>
                <td>Feed chickens within the coup</td>
                <td>Reroot Pontiac Headquarters</td>
                <td>Bob McPhelman</td>
                <td> <button className="w3-button" title="Task complete" onClick={this.onTaskComplete}> <DoneOutlineIcon /> </button> </td>
                <td><button className="w3-button" title="Task reminder"> <NotificationsActiveIcon /> </button> </td>
              </tr>

            <tr>
                <td><button className="w3-button" title="Task reminder"> <EditIcon /> </button> </td>
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
        </div>
    );
  }
}

export default Overview;
