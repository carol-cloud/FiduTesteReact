import React, {useContext, useState, useEffect} from 'react';
import {UserContext} from '../../providers/user';
import { UserService } from '../../services/users.services';
import { RepoController } from '../repo/repo.controller';
import { ReposView } from './repos.view';

export const ReposController = () => {
  const { userSelected } = useContext(UserContext);
  const userService = UserService();
  const [ reposUserSelected, setReposUserSelected ] = useState([]);

  const getRepos = async () => {
    const response = await userService.listRepos(userSelected.login);
    const repos = await response.json();
    setReposUserSelected(repos);
  }

  useEffect(() => {
    if (userSelected.login) {
      getRepos();
    }
  }, [userSelected])

  const renderRepos = () => {
    return reposUserSelected.map((repo) => <RepoController key={repo.id} repo={repo}/>)
  }
  
  return <ReposView renderRepos={renderRepos} />
}







































