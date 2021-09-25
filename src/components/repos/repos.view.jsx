import React from 'react';

export const ReposView = props => {
  const { renderRepos } = props;
  return (
  <div>
    { renderRepos() }
  </div>);
    
}
