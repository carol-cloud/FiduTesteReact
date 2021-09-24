import React, {useContext} from 'react';
import { UserContext } from '../../providers/user';

import { UserSelectView } from './user-select.view';

export const UserSelectController = (props) => {
  const {user} = props;
  const {setUserSelected} = useContext(UserContext);

  const handleClick = async () => {
    setUserSelected(user);
  }
  return <UserSelectView user={user} handleClick={handleClick} />
}











