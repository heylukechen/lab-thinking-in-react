import { useState } from 'react';

const SearchBar = (props) => {
  

  return (
    <div className="form">
      <div className="search-bar">
        <label htmlFor="search">Search product</label>
        <input
          onChange={(e) => props.searchItems(e)}
          id="search"
          type="text"
        />
      </div>
      <div>
        <input type="checkbox" />
        <label htmlFor="stock-only">Show only in stock</label>
      </div>
    </div>
  );
};

export default SearchBar;
