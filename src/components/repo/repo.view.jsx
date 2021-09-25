import React from 'react';
import './repo.css';
import {
    ListItem,
    ListItemText
} from '@material-ui/core';


export const RepoView = (prop) => {
  const { repo } = prop;
  return (
      <ListItem className="Repo">
        <a href={repo.url} target="_blank" className="Repo-link">
          <ListItemText primary={repo.name} secondary={repo.description} />
        </a>
      </ListItem>
  );
}