import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const response = await axios.get('http://localhost:3000/current_user');
                setCurrentUser(response.data);
            } catch (error) {
                console.log('Error fetching current user:', error);
                setCurrentUser(null);
            }
        };

        fetchCurrentUser();
    }, []);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            {children}
        </CurrentUserContext.Provider>
    );
};

export const useCurrentUser = () => React.useContext(CurrentUserContext);

