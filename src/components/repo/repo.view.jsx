import React from 'react';
import './repo.css';
import {
    List,
    ListItem,
    ListItemText
} from '@material-ui/core';


export const RepoView = (prop) => {
  const { repo } = prop;
  return (
    <List className="Repo">
      <ListItem>
        <ListItemText primary={repo.name} secondary={repo.description} />
      </ListItem>
    </List>
  );
}