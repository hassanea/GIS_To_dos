import React from 'react';
import HomeIcon from '@material-ui/icons/Home';

class NotFound extends React.Component {
  render() {
      
    return (
        
    <div>
     <div className="w3-row">
     <div className="w3-container w3-center">
          <h1>404</h1>
          <span>No match found for <code className="code">{this.props.location.pathname}</code></span>
          <div>The page you are looking for was not found.</div>
          <a href="/" title="Back to Home"> <HomeIcon fontSize="large" /> </a>
        </div>
        </div>
        </div>
        
    );
  }
}

export default NotFound;