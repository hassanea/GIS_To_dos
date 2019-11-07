import React from 'react';

class NotFound extends React.Component {
  render() {
      
const Page404 = ({ location }) => (
   <div>
      <h1>No match found for <code>{location.pathname}</code></h1>
   </div>
);
      
    return (
        
        <div>
        {Page404}
        </div>
        
    );
  }
}

export default NotFound;