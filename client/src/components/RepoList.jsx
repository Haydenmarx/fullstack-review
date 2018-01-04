import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} local repos and {props.count} stored remotely.
  </div>
)

export default RepoList;