import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

class About extends React.Component {
  render() {
      
        const backtoHome = {
            float: 'left',
        };
      
    return (
        
        <div>
          <Link to="/" style={backtoHome}>
          <HomeIcon/>
          Home
          </Link>
        <h1>About Task Scheduler:</h1>
        <hr/>
        </div>
        
    );
  }
}

export default About;