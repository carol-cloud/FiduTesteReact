import React from 'react';
import { UserSelectController } from '../user-select/user-select.controller';
import { 
    Autocomplete,
    TextField
  } from '@material-ui/core';

export const UsersSelectView = (props) => {
    const {users, handleChange, handleEnterPress} = props;
    return(
    <Autocomplete
        id="user-github"
        sx={{ width: 300 }}
        options={users}
        autoHighlight
        getOptionLabel={(user) => user.login}
        renderOption={(props, user) => (
            <UserSelectController user={user}></UserSelectController>
        )}
        renderInput={(params) => (
            <TextField sx={{ ml: 1, flex: 1 }}
          {...params}
          variant= "standard"
          placeholder="Procure alguém"
          inputProps={{
            ...params.inputProps,
            'aria-label': 'Procure alguém',
            autoComplete: 'new-password', 
          }}
          onChange={event => handleChange(event)}
          onKeyPress={(event) => handleEnterPress(event)}
        />
        )}
    />
)};