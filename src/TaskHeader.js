import React from 'react';

class TaskHeader extends React.Component {
  render() {
      
    return (
            
            <div>
             <h2 id="transition-modal-title">Property Name</h2>
             <hr/>
             <h4 className="w3-center">Tasks:</h4>
             <p id="transition-modal-description">Details go here...</p>
            </div>
    );
  }
}

export default TaskHeader;