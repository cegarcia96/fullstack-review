import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
const axios = require('axios');

const App = () => {

  const [repos, setRepos] = useState([]);


  // const search = (term) => {
  //   console.log(`${term} was searched`);
  // };


  useEffect(() => {
    axios.get('/repos')
    .then(response => {
      setRepos(response.data)
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <div>
      <h1>Github Fetcher</h1>
      <Search setRepos={setRepos}/>
      <RepoList repos={repos} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
