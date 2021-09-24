import React, { useState } from 'react';

import { UsersSelectView } from './users-select.view';
import { UserService } from '../../services/users.services';

export const UsersSelectController = () => {
  const userService = UserService();
  const [ query, setQuery ] = useState('');
  const [ users, setUsers ] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  const handleEnterPress = async (event) => {
    if (event && event.key === 'Enter') {
      event.preventDefault();
      const response = await userService.searchUser(query);
      const {items} = await response.json();
      setUsers(items);
    }
  }
  return <UsersSelectView 
          handleEnterPress={handleEnterPress} 
          handleChange={handleChange}
          users={users}
        />
}
