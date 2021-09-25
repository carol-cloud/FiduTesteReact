import React from 'react';
import { List } from '@material-ui/core';

export const ReposView = props => {
  const { renderRepos } = props;
  return (
  <div>
    <List>
    { renderRepos() }
    </List>
  </div>);
    
}
