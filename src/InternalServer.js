import React from 'react';
import {Helmet} from "react-helmet";

class InternalServer extends React.Component {
  render() {

    return (

    <div>
     <Helmet>
      <title>500 - Internal Server Error</title>
     </Helmet>    
     <div className="w3-row">
     <div className="w3-container w3-center">
          <h1>500</h1>
          <p className="internalServer">500 Internal Server Error, please Contact Administrator!!!</p>
        </div>
        </div>
        </div>

    );
  }
}
export default InternalServer;
