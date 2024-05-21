import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser } from './api/api'; // Adjust the import based on your file structure

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const user = await getCurrentUser();
                setCurrentUser(user);
            } catch (error) {
                setCurrentUser(null);
            }
        };

        fetchCurrentUser();
    }, []);

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useCurrentUser = () => {
    return useContext(UserContext);
};
