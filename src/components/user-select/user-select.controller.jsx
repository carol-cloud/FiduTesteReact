import React from 'react';
import { UserService } from '../../services/users.services';

import { UserSelectView } from './user-select.view';

export const UserSelectController = (props) => {
  const {user} = props;
  const userService = UserService();

  const handleClick = async () => {
    const response = await userService.listRepos(user.login);
    console.log (await response.json());
  }
  return <UserSelectView user={user} handleClick={handleClick} />
}











