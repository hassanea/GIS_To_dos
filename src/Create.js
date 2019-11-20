import React from 'react';
import Breadcrumb from './Breadcrumb.js';
/*Forms tutorial: https://medium.com/better-programming/handling-multiple-form-inputs-in-react-c5eb83755d15
...
*/


class Create extends React.Component {


constructor(props) {
    super(props);
    this.state = {
        value: '',
        name: '',
        Desc: '',
        Location: '',
        Assign: '',
        tasks: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

handleSubmit(event) {
    alert('A Task name and desciption was submitted: ' + this.state.name + ' ' + this.state.Desc + ' ' + this.state.Location);
    event.preventDefault();
  }


  render() {

      const inputs = {
        width: "30%",
      };

      const labels = {
        fontWeight: "bolder",
      };

      const btnSubmit = {
          width: '33%',
      }

    return (


    <div className="w3-container">
      <Breadcrumb/>
      <div className="w3-card-4">
       <div className="w3-container w3-green">
         <h1 className="w3-animate-top">Create Task:</h1>
        </div>

    <form onSubmit={this.handleSubmit} className="w3-container w3-margin-bottom">
      <p className="w3-left-align"><label htmlFor="taskName" className="w3-text-purple" style={labels}>Task Name:</label>
      <input type="text" name="name" className="w3-input w3-border w3-round w3-light-grey w3-wide w3-animate-input" onChange={this.handleChange} id="taskName" style={inputs} placeholder="Enter a task name"/> </p>

        { //      <p className="w3-left-align"><label htmlFor="taskBlah" className="w3-text-purple" style={labels}>Task ...:</label>
//      <input type="text"  className="w3-input w3-border w3-round w3-light-grey w3-animate-input" id="taskBlah" style={inputs} placeholder="..."/> </p>
        }

       <p className="w3-left-align"><label htmlFor="taskDesc" className="w3-text-purple" style={labels}> Task Description:</label> <br/>
      <textarea id="taskDesc" name="Desc" rows="10" cols="50" className="w3-border w3-round w3-light-grey w3-wide" placeholder="Enter a task Description" onChange={this.handleChange}></textarea>
       </p>

<p className="w3-left-align">
 <label htmlFor="taskLocate" className="w3-text-purple" style={labels}>Task Location:</label>  <br/>
  <select name="Location" id="taskLocate" className="w3-border w3-wide w3-round w3-light-grey" onChange={this.handleChange}>
    <option value="">Select Task Location</option>
    <option value="Reroot Pontiac HQ">Reroot Pontiac Headquarters</option>
    <option value="Some place">Some place</option>
    <option value="Other place">Other place</option>
    <option value="Etc.">Etc.</option>
  </select>
  </p>

<p className="w3-left-align">
 <label htmlFor="taskAssign" className="w3-text-purple" style={labels}>Task Assigned to:</label>  <br/>
  <select name="Assign" id="taskAssign" className="w3-border w3-wide w3-round w3-light-grey" size="7" onChange={this.handleChange}>
    <option value="">Select Task Assignee</option>
    <option value="Bob">Bob</option>
    <option value="Carol">Carol</option>
    <option value="Karen">Karen</option>
    <option value="Olivia">Olivia</option>
    <option value="Fred">Fred</option>
    <option value="Sal">Sal</option>
  </select>
  </p>

       <p className="w3-center">
      <input type="submit" value="Submit" style={btnSubmit} className="w3-button w3-cyan w3-round" />
      </p>
    </form>
  </div>
</div>




    );
  }
}

export default Create;
