import React from 'react';
import TaskBreadcrumb from './TaskBreadcrumb.js';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import EmailIcon from '@material-ui/icons/Email';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from 'react-modal';
import {Helmet} from "react-helmet";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CloseIcon from '@material-ui/icons/Close';
import SortableTable from 'react-sortable-table';


window.React = require('react');


const Overview = (props) => {

    
    

      
const TASK_ID = props.ID;
      
      
      
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : '10%',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
      

      


            
function getTaskName(TASK_NAME) {
  return TASK_NAME.split(' ').slice(-1)[0]
}
 
const TASK_NAME_Sorter = {
desc: (data, key) => {
    // eslint-disable-next-line
    var result = data.sort(function (_a, _b) {
      const a = getTaskName(_a[key]);
      const b = getTaskName(_b[key]);
      if ( a <= b ) {
        return 1;
      } else if ( a > b) {
        return -1;
      }
    });
    return result;
  },
 // eslint-disable-next-line
  asc: (data, key) => {
     // eslint-disable-next-line 
    return data.sort(function (_a, _b) {
      const a = getTaskName(_a[key]);
      const b = getTaskName(_b[key]);
      if ( a >= b ) {
        return 1;
      } else if ( a < b) {
        return -1;
      }
    })
  }
};    
    
const columns = [
      {
        header: 'Task ID',
        key: 'TASK_ID',
        defaultSorting: 'ASC',
        dataProps: { className: 'align-right' },
        render: (TASK_ID) => { return <a href={'http://localhost:4000/tasks/'+TASK_ID} title={'Task #' + TASK_ID} className="id-link">{TASK_ID}</a>; }
      },
      {
        header: 'Task Name',
        key: 'TASK_NAME',
        headerStyle: { fontSize: '15px' },
        headerProps: { className: 'align-left' },
        descSortFunction: TASK_NAME_Sorter.desc,
        ascSortFunction: TASK_NAME_Sorter.asc
      },
      {
        header: 'Task Description',
        key: 'TASK_DESC',
        headerStyle: { fontSize: '15px' },
        headerProps: { className: 'align-left' },
        descSortFunction: TASK_NAME_Sorter.desc,
        ascSortFunction: TASK_NAME_Sorter.asc
      },
      {
        header: 'Task Location',
        key: 'TASK_LOCATION',
        headerStyle: { fontSize: '15px' },
        headerProps: { className: 'align-left' },
        descSortFunction: TASK_NAME_Sorter.desc,
        ascSortFunction: TASK_NAME_Sorter.asc
      },
      {
        header: 'Person responsible',
        key: 'ASSIGNED_TO',
        headerStyle: { fontSize: '15px' },
        headerProps: { className: 'align-left' },
        descSortFunction: TASK_NAME_Sorter.desc,
        ascSortFunction: TASK_NAME_Sorter.asc
      },
      {
        header: 'Actions',
        key: 'TASK_ID',
        headerStyle: { fontSize: '15px' },
        sortable: false,
        render: (TASK_ID) => { return <div><button id={TASK_ID} className="w3-button" title="Edit Task" onClick={() => props.edit(TASK_ID)}> <EditIcon /> </button>
      <button id={TASK_ID} className="w3-button" title="Delete Task" onClick={(event) => { if (window.confirm('Are you sure you want to delete this task?')) props.delete(TASK_ID)}}> <DeleteIcon /> </button>
      <button id={TASK_ID} className="w3-button" title="Task complete" onClick={(event) => props.completeTask(event, TASK_ID)}> <DoneOutlineIcon /> </button>
      <button id={TASK_ID} className="w3-button" title="Task reminder E-Mail" onClick={() => props.openEmailModal(TASK_ID)}> <EmailIcon /> </button>
      </div>; }
      }
    ];
 
    const style = {
      backgroundColor: '#eee'
    };
      
      Modal.setAppElement('#root')
    
      
    const iconStyle = {
      color: '#aaa',
      paddingLeft: '5px',
      paddingRight: '5px'
    };

    return (

        <div className="w3-container">
          <Helmet>
            <title>Reroot Task Scheduler - Task Overview</title>
          <meta charset="utf-8" />  
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="author" content="Evan H." />  
          <meta name="theme-color" content="#ffffff"/>
          <meta name="description" content="Reroot Pontiac's Task Scheduler"/>
          <meta name="keywords" content="Reroot Pontiac, Etc." /> 
          <meta name="og:title" content="Reroot Task Scheduler"/>
          <meta name="og:type" content="article"/>
          <meta name="og:url" content="https://www.reroot-task-scheduler.com"/>
          <meta name="og:site_name" content="Reroot Task Scheduler"/>
          <meta name="og:description" content=""/>
          <meta name="og:phone_number" content="248-703-0288"/>
          <meta name="og:email" content="info@rerootgi.com"/>
          <meta name="og:street-address" content="76 Henderson Street"/>
          <meta name="og:postal-code" content="48341"/>
          <meta name="og:locality" content="Pontiac"/>
          <meta name="og:region" content="MI"/>
          <meta name="og:country-name" content="USA"/>   
          <link rel="canonical" href="https://www.reroot-task-scheduler.com"/> 
          </Helmet>
          <TaskBreadcrumb/>
          <div className="w3-card-4">
          <div className="w3-container w3-green">
        <h1 className="w3-animate-top"><AssignmentIcon/> Task Overview:</h1>
        <div className="w3-right">
        <input type="text" id="taskInput" aria-label="Search tasks" placeholder="Search tasks..." className="w3-border w3-round w3-hover-blue w3-purple"/>
         </div>
          </div>
          <div className="w3-responsive w3-margin-bottom">
            <SortableTable
              data={props.tasks}
              columns={columns}
              style={style}
              iconStyle={iconStyle}
              id="taskTable"/>
            </div>          
          </div>
     
              <Modal
               isOpen={props.modalIsOpen}
               onRequestClose={props.closeModal}
               style={customStyles}
               closeTimeoutMS={3}
               contentLabel="Edit Task Modal">
             <button onClick={props.closeModal} className="w3-button w3-circle w3-right"> <CloseIcon/> </button>
            <div className="w3-card-4">
         <div className="w3-container w3-green">
        <h2 className="w3-animate-top w3-center"> <EditIcon/> Modify Task{' #' + props.ID}:</h2>
        </div>
        
    <form className="w3-container w3-margin-bottom">

      <p className="w3-left-align"><label htmlFor="taskName" className="w3-text-purple">Task Name:</label>
      <input type="text" name="Name" className="w3-input w3-border w3-round w3-light-grey w3-wide w3-animate-input" onChange={props.change} id="taskName" value={props.Name} placeholder="Enter a task name" autoFocus required/> </p>

       <p className="w3-left-align"><label htmlFor="taskDesc" className="w3-text-purple"> Task Description:</label> <br/>
      <textarea id="taskDesc" name="Desc" rows="10" cols="50" className="w3-border w3-round w3-light-grey w3-wide" placeholder="Enter a task Description" onChange={props.change} value={props.Desc} required></textarea>
       </p>

<p className="w3-left-align">
 <label htmlFor="taskLocate" className="w3-text-purple">Task Location:</label>  <br/>
  <select name="Location" id="taskLocate" className="w3-border w3-wide w3-round w3-light-grey" onChange={props.change} value={props.Location} required>
    <option value="">Select Task Location</option>
    <option value="Reroot Pontiac HQ">Reroot Pontiac Headquarters</option>
    <option value="Reroot Sustainability Center">Sustainability Center</option>
    <option value="Some place">Some place</option>
    <option value="Other place">Other place</option>
    <option value="Etc.">Etc.</option>
  </select>
  </p>

<p className="w3-left-align">
 <label htmlFor="taskAssign" className="w3-text-purple">Task Assigned to:</label>  <br/>
 <input type="text" name="Assign" className="w3-input w3-border w3-round w3-light-grey w3-wide w3-animate-input" onChange={props.change} id="taskAssign" value={props.Assign} placeholder="Enter a task name" required/>   
</p>
                
<p className="w3-center">
  <button type="submit" onClick={(event) => props.update(event, TASK_ID)} className="w3-button w3-cyan w3-round btnSubmit">Update</button>
</p>      
</form>        
</div> 
      
</Modal>


<Modal
               isOpen={props.modalEmailIsOpen}
               onRequestClose={props.closeEmailModal}
               style={customStyles}
               closeTimeoutMS={3}
               contentLabel="Task Complete Modal">           
              <button onClick={props.closeEmailModal} className="w3-button w3-circle w3-right"> <CloseIcon/> </button>             <div className="w3-card-4">
         <div className="w3-container w3-green">
        <h2 className="w3-animate-top w3-center"> <MailOutlineIcon/> E-Mail Task Reminder{' #' + props.ID}:</h2>
        </div>
         <form className="w3-container w3-margin-bottom">  
      <p className="w3-left-align"><label htmlFor="fullName" className="w3-text-purple">Name:</label>
      <input type="text" name="recipName" className="w3-input w3-border w3-round w3-light-grey w3-wide w3-animate-input" onChange={props.change} id="fullName" value={props.recipName} placeholder="Enter your Name..." autoFocus required/> </p>

      <p className="w3-left-align"><label htmlFor="eMail" className="w3-text-purple">E-Mail:</label>
      <input type="email" name="recipEmail" className="w3-input w3-border w3-round w3-light-grey w3-wide w3-animate-input" onChange={props.change} id="eMail" value={props.recipEmail} placeholder="Enter your E-Mail..." required/> </p>

      <p className="w3-left-align"><label htmlFor="subject" className="w3-text-purple">Subject:</label>
      <input type="text" name="recipSubject" className="w3-input w3-border w3-round w3-light-grey w3-wide w3-animate-input" onChange={props.change} id="subject" value={props.recipSubjec} placeholder="Enter a Subject..." required/> </p>

       <p className="w3-left-align"><label htmlFor="message" className="w3-text-purple">Message:</label> <br/>
      <textarea id="message" name="recipMessage" rows="10" cols="50" className="w3-border w3-round w3-light-grey w3-wide" placeholder="Enter your Message..." value={props.recipMessage} onChange={props.change} required></textarea>
       </p>      
<p className="w3-center">
  <button type="submit" onClick={(event) => props.sendEmail(event)} className="w3-button w3-cyan w3-round btnSubmit">Send!</button>
</p>      
</form>        
</div>                             
 </Modal>        
</div>
    );
}
export default Overview;