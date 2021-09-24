import React from 'react';
import './user-select.css';
import {
    Box
} from '@material-ui/core';

export const UserSelectView = (props) => {
    const { user } = props;
    return (
        <Box className="user-box" component="li" {...props}>
            <img className="user-img"
                src={user.avatar_url}
                alt={`Imagem do usuário ${user.login}`}
            />
            <span className="user-login">{user.login}</span>
        </Box>
    );

}
