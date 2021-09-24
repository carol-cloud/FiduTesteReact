import React from 'react';
import { 
    Box
  } from '@material-ui/core';

export const UserSelectView = (props) => {
    const {user} = props;
    return (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
        <img
            loading="lazy"
            width="20"
            src={user.avatar_url}
            alt={`Imagem do usuário ${user.login}`}
        />
        {user.login}
    </Box>
    );
    
}    
