import React from 'react';

class Search extends React.Component {
  render() {
      
    return (
            
    <input className="search-toDos w3-pale-blue w3-wide w3-border w3-round" id="searchInput" type='text' placeholder='Search...' aria-label="Search filter"/>
        
    );
  }
}

export default Search;