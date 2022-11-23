import React, {useState, useEffect} from 'react';

const RepoList = ({ repos }) => {

  return (
    <div>
      <h4> Repo List </h4>
      There are {repos.length} repos.
      <table>
        <tbody>
          <tr>
            <th>Rank</th>
            <th>URL</th>
            <th>Forks</th>
          </tr>
          {repos.slice(0, 25).map((repo, index) => {
            return (
            <tr key={repo._id}>
              <td>{index + 1}</td>
              <td> <a href={repo.html_url}>{repo.html_url}</a></td>
              <td>{repo.forks}</td>
            </tr>
          )})}
        </tbody>
      </table>
    </div>
  )
}

export default RepoList;
