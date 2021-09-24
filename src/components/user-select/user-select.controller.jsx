import React from 'react';

import { UserSelectView } from './user-select.view';

export const UserSelectController = (props) => {
  const {user} = props;
  return <UserSelectView user={user} />
}











