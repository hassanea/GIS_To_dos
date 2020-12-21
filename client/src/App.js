import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Scheduler from './Scheduler.js';
import Create from './Create.js';
import Overview from './Overview.js';
import Search from './Search.js';
import About from './About.js';
import NotFound from './NotFound.js';
import InternalServer from './InternalServer.js';


class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
      tasks: [],
      mapData: [],
      complete: {0: false, 1: true}, 
      completeColor: '',
      value: '',
      ID: '',
      Name: '',
      Desc: '',
      Location: '',
      Assign: '',
      success: false,
      recipName: '',
      recipEmail: '',
      recipSubject: '',
      recipMessage: '',
      taskUpdate: false,
      modalIsOpen: false,    
      modalEmailIsOpen: false,      
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleTaskEdit = this.handleTaskEdit.bind(this);
    this.handleTaskUpdate = this.handleTaskUpdate.bind(this);
    this.handleTaskDelete = this.handleTaskDelete.bind(this);
    this.handleEmailSent = this.handleEmailSent.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.openEmailModal = this.openEmailModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount() {
    this.getTaskData();
    this.getMapData();
}
    
    
getTaskData = () => {
    
fetch('https://api.reroot-task-scheduler.com/tasks', {
          method: "GET",
          headers: {'Content-Type': 'application/json'},
      })
      .then(response => response.json())
      .then(response => this.setState({ tasks: response.data }))
      .catch(error => console.error(error))
} 


getMapData = () => {
fetch('https://api.reroot-task-scheduler.com/properties')

        .then(response => response.json())

        .then(response => this.setState({ mapData: response.data }))

        .catch(error => console.error(error))
}
    
    
    
handleSubmit = (event, insertID) => {

alert('A Task name, desciption, location, assignment, recurring, frequency, priority, and assigned date was submitted: ' + this.state.Name + ' ' + this.state.Desc + ' ' + this.state.Location + ' ' + this.state.Assign + ' ');

    event.preventDefault();
    
     let data = {
      Name: this.state.Name,
      Desc: this.state.Desc,
      Location: this.state.Location,     
      Assign: this.state.Assign
    };
    console.log(data);

    fetch ('https://api.reroot-task-scheduler.com/tasks/create', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(function(response) {
        if (response.status >= 400) {
          throw new Error ("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
      console.log(data);
      alert(`New Task record #${insertID} created successfully!`);
      window.location.reload();
    }).catch(function(error) {
      console.log(error);
      alert("An error occured! Please checkout JS console...");
    }); 
  }

 handleCheck = (event, TASK_ID) => {
    this.setState({ 
        complete:  !this.state.complete
    });
}


  handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
}
    
handleTaskEdit = (TASK_ID) => {
    		fetch("https://api.reroot-task-scheduler.com/tasks/" + TASK_ID, {
			method: "GET",
            headers: {'Content-Type': 'application/json'},    
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
                this.setState({
                    modalIsOpen: true,
                    ID: TASK_ID,
                    taskUpdate: true,
                    Name: response[0].TASK_NAME,
                    Desc: response[0].TASK_DESC,
                    Location: response[0].TASK_LOCATION,
                    Assign: response[0].ASSIGNED_TO,
                    
                });
                console.log(this.state.ID);
			})
			.catch((error) => console.log("Error", error));
    
}

closeModal = () => {
  this.setState({modalIsOpen: false});
}

closeEmailModal = () => {
    this.setState({modalEmailIsOpen: false});
}

openEmailModal = (TASK_ID) => {
    this.setState({modalEmailIsOpen: true});
    
      		fetch("https://api.reroot-task-scheduler.com/tasks/" + TASK_ID, {
			method: "GET",
            headers: {'Content-Type': 'application/json'},    
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
                this.setState({
                    ID: TASK_ID,
                    Name: response[0].TASK_NAME
                });
                console.log(this.state.ID);
			})
			.catch((error) => console.log("Error", error));    
}

handleTaskUpdate = (event, TASK_ID) => {
            
event.preventDefault();
       
    
    fetch(`https://api.reroot-task-scheduler.com/tasks/update/${TASK_ID}`, {
			method: "PUT",
            headers: {'Content-Type': 'application/json; charset=UTF-8', "access-control-allow-origin": "*"},
            body: JSON.stringify({
              Name: this.state.Name,
              Desc: this.state.Desc,
              Location: this.state.Location,
              Assign: this.state.Assign 
            })
		})
			.then((response) => {
				console.log(response.json());
                console.log(response.data);
                alert(`Task record #${TASK_ID} updated successfully!`);
                window.location.reload();
			})
			.catch((error) => console.log("Error", error));      
}

handleTaskDelete = (TASK_ID) => {
    fetch(`https://api.reroot-task-scheduler.com/tasks/delete/${TASK_ID}`, {
        method: 'DELETE'
    })
    alert(`Task record #${TASK_ID} deleted successfully!`);
    window.location.reload();
}

handleEmailSent = (event) => {
    
        event.preventDefault();
    
     let data = {
      recipName: this.state.recipName,
      recipEmail: this.state.recipEmail,
      recipSubject: this.state.recipSubject,     
      recipMessage: this.state.recipMessage
    };
    console.log(data);
    
    
        fetch (`https://api.reroot-task-scheduler.com/sendEmail`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then((response) => {
        console.log(response.data);
        alert("E-Mail sent successfully!");
        window.location.reload();    
    })
    .catch((error) => console.log("E-Mail Failure - Error:", error));  
  }


handleComplete = (event, TASK_ID) => {
    
   event.preventDefault();    
    
    
  if (this.state.complete) {
    this.setState({
        complete: true,
        completeColor: '#e67e00'
    });  
     event.target.style.color = this.state.completeColor;
     console.log("Task Complete!") 
  }

  else {
    this.setState({
       complete: false,
       completeColor: '#FF8C00'
    }); 
     event.target.style.color = this.state.completeColor;
     console.log("Task Incomplete!") 
  }    
    
  console.log(event.target);
}
  

render() {
     
 const { tasks, mapData, ID, Name, Desc, Location, Assign, complete, modalIsOpen, modalEmailIsOpen, recipName, recipEmail, recipSubject, recipMessage } = this.state;
 console.log(tasks);
 console.table(tasks);    

  return (
    <div className="App">
      <Switch>
            
       <Route exact path='/' render={() => (
        <Scheduler tasks={tasks} mapData={mapData}/>
        )}/>

       <Route path='/create' render={() => (
        <Create tasks={tasks} change={this.handleChange} submit={this.handleSubmit} Name={Name} Desc={Desc} Location={Location} Assign={Assign}/>
        )}/>

        <Route path='/overview' render={() => (
        <Overview tasks={tasks} ID={ID} delete={this.handleTaskDelete} change={this.handleChange} edit={this.handleTaskEdit} Name={Name} Desc={Desc} Location={Location} modalIsOpen={modalIsOpen} recipName={recipName} recipEmail={recipEmail} recipSubject={recipSubject} recipMessage={recipMessage} modalEmailIsOpen={modalEmailIsOpen} completeTask={this.handleComplete} Assign={Assign} complete={complete} closeModal={this.closeModal} closeEmailModal={this.closeEmailModal} update={this.handleTaskUpdate} openEmailModal={this.openEmailModal} sendEmail={this.handleEmailSent} check={this.handleCheck}/>
        )}/>

        <Route path='/search' render={() => (
        <Search tasks={tasks}/>
        )}/>

        <Route path='/about' render={() => (
        <About/>
        )}/>
            
        <Route path="/500" component={InternalServer} status={500}/>

        <Route path="*" component={NotFound} status={404}/>

      </Switch>
    </div>
  );
}
}

export default App;