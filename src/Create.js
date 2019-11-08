import React from 'react';
import Breadcrumb from './Breadcrumb.js';


class Create extends React.Component {
    
    
constructor(props) {
    super(props);
    this.state = {
        value: '',
        tasks: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
      
handleChange(event) {
    this.setState({value: event.target.value});
  }    
    
handleSubmit(event) {
    alert('A Task name was submitted: ' + this.state.value);
    event.preventDefault();
  }
    
    
  render() {
      
      const inputs = {
        width: "30%", 
      };
      
      const labels = {
        fontWeight: "bolder", 
      };
      
    return (
        
        
    <div className="w3-container">
      <Breadcrumb/>
      <div className="w3-card-4">
       <div className="w3-container w3-green">
         <h1 className="w3-animate-top">Create Task:</h1>
        </div>

    <form onSubmit={this.handleSubmit} className="w3-container">
      <p className="w3-left-align"><label htmlFor="taskName" className="w3-text-purple" style={labels}>Task Name:</label>
      <input type="text" name="name" className="w3-input w3-border w3-round w3-light-grey w3-wide w3-animate-input" value={this.state.value} onChange={this.handleChange} id="taskName" style={inputs} placeholder="Enter a task name"/> </p>
      <p className="w3-left-align"><label htmlFor="taskBlah" className="w3-text-purple" style={labels}>Task ...:</label> 
      <input type="text"  className="w3-input w3-border w3-round w3-light-grey w3-animate-input" id="taskBlah" style={inputs} placeholder="..."/> </p>
      <input type="submit" value="Submit" className="w3-button w3-cyan w3-round" />
    </form>
  </div>
</div>
        


        
    );
  }
}

export default Create;