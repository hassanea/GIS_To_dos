import React from 'react';

class Search extends React.Component {
  render() {
      
    return (
            
    <input className="search-toDos w3-wide" id="searchInput" type='text' placeholder='Search...' aria-label="Search filter"/>
        
    );
  }
}

export default Search;