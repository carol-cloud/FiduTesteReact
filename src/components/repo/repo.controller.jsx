import React from 'react';
import { RepoView } from './repo.view';

export const RepoController = (props) => {
  const {repo} = props;

  const handleClick = async () => {
    
  }
  return <RepoView repo={repo} handleClick={handleClick} />
}
