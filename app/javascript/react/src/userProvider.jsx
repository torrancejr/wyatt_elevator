import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser } from './api/api';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const user = await getCurrentUser();
                console.log('Fetched user in UserProvider:', user);
                setCurrentUser(user);
            } catch (error) {
                console.error('Error in UserProvider:', error);
                setCurrentUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchCurrentUser();
    }, []);

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useCurrentUser = () => {
    return useContext(UserContext);
};



