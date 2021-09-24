import React, { useState } from 'react';

export const UserContext = React.createContext({});

export const UserProvider = (props) => {
    const [userSelected, setUserSelected] = useState({});

    return (
        <UserContext.Provider value={{ userSelected, setUserSelected }}>
            {props.children}
        </UserContext.Provider>
    )
};

