import React from 'react';
import Modal from 'react-modal';
import CloseIcon from '@material-ui/icons/Close';


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

const inputs = {

  width: "30%",

};

const labels = {

  fontWeight: "bolder",

};

const btnSubmit = {

    width: '33%',

};



class EditModal extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
       modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  openModal() {
  this.setState({modalIsOpen: true});
}

  afterOpenModal() {
  this.subtitle.style.color = '#f00';
}

  closeModal() {
  this.setState({modalIsOpen: false});
}


  render() {

    return (

    <div>

              <button onClick={this.openModal}>Open Modal</button>
              <Modal
               isOpen={this.state.modalIsOpen}
               onAfterOpen={this.afterOpenModal}
               onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal">
             <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
             <button onClick={this.closeModal} className="w3-button w3-circle w3-right"> <CloseIcon/> </button>
             <div className="w3-container">

               <div className="w3-card-4">

                <div className="w3-container w3-green">

                  <h1 className="w3-center">Edit Task:</h1>

                 </div>

             <form onSubmit={this.handleSubmit} className="w3-container w3-margin-bottom">

               <p className="w3-left-align"><label htmlFor="taskName" className="w3-text-purple" style={labels}>Task Name:</label>

               <input type="text" name="Name" className="w3-input w3-border w3-round w3-light-grey w3-wide w3-animate-input" onChange={this.handleChange} id="taskName" style={inputs} placeholder="Enter a task name" required/> </p>

                <p className="w3-left-align"><label htmlFor="taskDesc" className="w3-text-purple" style={labels}> Task Description:</label> <br/>

               <textarea id="taskDesc" name="Desc" rows="10" cols="50" className="w3-border w3-round w3-light-grey w3-wide" placeholder="Enter a task Description" onChange={this.handleChange} required></textarea>

                </p>

         <p className="w3-left-align">

          <label htmlFor="taskLocate" className="w3-text-purple" style={labels}>Task Location:</label>  <br/>

           <select name="Location" id="taskLocate" className="w3-border w3-wide w3-round w3-light-grey" onChange={this.handleChange} required>

             <option value="">Select Task Location</option>

             <option value="Reroot Pontiac HQ">Reroot Pontiac Headquarters</option>

             <option value="Some place">Some place</option>

             <option value="Other place">Other place</option>

             <option value="Etc.">Etc.</option>

           </select>

           </p>

         <p className="w3-left-align">

          <label htmlFor="taskAssign" className="w3-text-purple" style={labels}>Task Assigned to:</label>  <br/>

           <select name="Assign" id="taskAssign" className="w3-border w3-wide w3-round w3-light-grey" onChange={this.handleChange} required>

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

               <input type="submit" value="Submit" style={btnSubmit} className="w3-button w3-cyan w3-round w3-margin" />

               </p>

             </form>

           </div>

         </div>

            </Modal>

    </div>

    );
  }
}
export default EditModal;
