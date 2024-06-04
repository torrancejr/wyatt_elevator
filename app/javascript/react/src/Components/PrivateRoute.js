import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCurrentUser } from '../userContext';

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useCurrentUser();

    console.log('Current user in PrivateRoute:', currentUser); // Debugging line
    console.log('Loading state in PrivateRoute:', loading); // Debugging line

    if (loading) {
        return <div>Loading...</div>; // Show a loading indicator while fetching user data
    }

    if (!currentUser || !currentUser.admin) {
        console.log('Redirecting to login page...'); // Debugging line
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;
