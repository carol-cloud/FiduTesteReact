import React, {useContext, useState, useEffect} from 'react';
import {UserContext} from '../../providers/user';
import { UserService } from '../../services/users.services';

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
  
  return <ReposView />
}







































