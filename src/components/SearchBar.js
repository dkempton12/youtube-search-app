import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  // initialize term piece of state
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    // TODO: make sure we call callback from parent App to notify us of form submits
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Search for a Video</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
