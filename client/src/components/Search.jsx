import React, { useState } from 'react';
const axios = require('axios');

const Search = ({ repos, setRepos }) => {

  const[term, setTerm] = useState('')

  const onChange = (e) => {
    setTerm(e.target.value);
  }

  const search = () => {
    axios.post('/repos', {
      username: term,
    })
    .then(() => {
      return axios.get('/repos')
    })
    .then(response => {
      setRepos(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={term} onChange={onChange}/>
      <button onClick={search}> Add Repos </button>
    </div>
  );
}

export default Search;
