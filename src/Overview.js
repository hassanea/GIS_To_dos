import React from 'react';
import TaskBreadcrumb from './TaskBreadcrumb.js';
/* https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg */
/* https://www.w3schools.com/howto/howto_js_todolist.asp */
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
/*import Modal from 'react-modal';*/
import EditModal from './EditModal.js';
import {Helmet} from "react-helmet";


class Overview extends React.Component {


constructor(props) {
    super(props);
    this.state = {
      Taskcomplete: false
    };
    this.onTaskEdit = this.onTaskEdit.bind(this);
    this.onTaskDelete = this.onTaskDelete.bind(this);
    this.onTaskComplete = this.onTaskComplete.bind(this);
    this.onTaskRemind = this.onTaskRemind.bind(this);
  }

handleCheck(event) {

    this.setState({ Taskcomplete: !this.state.Taskcomplete})

  }


/* renderTaskData() {

  const tasks = this.props.tasks;

return tasks.map(task =>

  <tr key={task.TASK_ID}>
    <td>{task.TASK_ID}</td>
    <td>{task.TASK_NAME}</td>
    <td>{task.TASK_DESC}</td>
    <td>{task.TASK_LOCATION}</td>
    <td> <input type="checkbox" name="Taskcomplete" checked={this.state.Taskcomplete} onChange={this.handleCheck.bind(this)} id={task.TASK_ID} aria-label="Task complete"/> </td>
    <td>{task.ASSIGNED_TO}</td>
    <td>
      <button id={task.TASK_ID} className="w3-button" title="Edit Task" onClick={this.onTaskEdit}> <EditIcon /> </button>
      <button id={task.TASK_ID} className="w3-button" title="Delete Task" onClick={this.onTaskDelete(task.TASK_ID)}> <DeleteIcon /> </button>
      <button id={task.TASK_ID} className="w3-button" title="Task complete" onClick={this.onTaskComplete}> <DoneOutlineIcon /> </button>
      <button id={task.TASK_ID} className="w3-button" title="Task reminder" onClick={this.onTaskRemind}> <NotificationsActiveIcon /> </button>
    </td>
  </tr>
)
} */

/*handleCheck(event) {
  this.setState({ Taskcomplete: !this.state.Taskcomplete})
}*/

onTaskComplete() {
 console.log("Task Complete!")
 /*color: red;
text-decoration: line-through;*/

}

onTaskDelete = (task, TASK_ID) => {
  /*const tasks = this.props;*/
  console.log("Task Deleted!")
 /* let data = {
TASK_ID: task.TASK_ID
};

fetch('/tasks/delete', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(data)
}).then(function(response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
}).then(function(data){
  if (data.code === 200) {
    alert('Task record deleted successfully!')
    window.location.reload();
  }
}).catch(function(error){
  console.log(error)
}); */
}

onTaskEdit() {
  console.log("Task Edited!")
}

onTaskRemind() {
  console.log("Task Reminder alert!")
}



  render() {

    return (

        <div className="w3-container">
          <Helmet>
            <title>Reroot Task Scheduler - Task Overview</title>
          </Helmet>
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


                <th>Task ID</th>
                <th>Task Name</th>
                <th>Task Description</th>
                <th>Task Location</th>
                <th>Status</th>
                <th>Person responsible</th>
                <th>Actions</th>

              </tr>
              </thead>

            <tbody>
            {
             /* {this.renderTaskData()} */
            }
           <tr>
                <td>01</td>
                <td>Feed Chicken</td>
                <td>Feed chickens within the coup</td>
                <td>Reroot Pontiac Headquarters</td>
                <td> <input type="checkbox" name="Taskcomplete" checked={this.state.Taskcomplete} onChange={this.handleCheck.bind(this)} aria-label="Task complete"/> </td>
                <td>Bob McPhelman</td>
                <td>
                  <button className="w3-button" title="Edit Task" onClick={this.onTaskEdit}> <EditIcon /> </button>
                  <button className="w3-button" title="Delete Task" onClick={this.onTaskDelete}> <DeleteIcon /> </button>
                  <button className="w3-button" title="Task complete" onClick={this.onTaskComplete}> <DoneOutlineIcon /> </button>
                  <button className="w3-button" title="Task reminder" onClick={this.onTaskRemind}> <NotificationsActiveIcon /> </button>
                </td>
              </tr>

            <tr>
                <td>02</td>
                <td>Finish paperwork</td>
                <td>Complete tax papers</td>
                <td>Reroot Pontiac Headquarters</td>
                <td> <input type="checkbox" name="Taskcomplete" checked={this.state.Taskcomplete} onChange={this.handleCheck.bind(this)} aria-label="Task complete"/> </td>
                <td>Marianne Sandersson</td>
                <td>
                  <button className="w3-button" title="Edit Task" onClick={this.onTaskEdit}> <EditIcon /> </button>
                  <button className="w3-button" title="Delete Task" onClick={this.onTaskDelete}> <DeleteIcon /> </button>
                  <button className="w3-button" title="Task complete" onClick={this.onTaskComplete}> <DoneOutlineIcon /> </button>
                  <button className="w3-button" title="Task reminder" onClick={this.onTaskRemind}> <NotificationsActiveIcon /> </button>
                </td>
              </tr>

            </tbody>
             </table>
            </div>
            <EditModal/>
        </div>
        </div>
    );
  }
}

export default Overview;
