import React from 'react';
import Breadcrumb from './Breadcrumb.js';


class Create extends React.Component {
    
    
constructor(props) {
    super(props);
    this.state = {value: ''};
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
      
    return (
        
        <div>
         <Breadcrumb/>
         <div className="w3-container"> 
         <div className="w3-card-4">
         <div className="w3-container w3-green">
      
         <h1>Create Task:</h1>
        </div>
        </div>   
       <form onSubmit={this.handleSubmit} className="w3-container">
            <p><label htmlFor="taskName" className="w3-left-align">Name:</label>
            <input type="text" name="name" className="w3-input w3-border w3-round" value={this.state.value} onChange={this.handleChange} id="taskName" /> <br/> </p>
            <p> <input type="text"  className="w3-input w3-border w3-round" /> </p>
            <input type="submit" value="Submit" className="w3-button w3-red w3-round" />
        </form>
        
        

        </div>
        </div>
        
    );
  }
}

export default Create;