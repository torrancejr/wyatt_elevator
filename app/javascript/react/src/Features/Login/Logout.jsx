import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        // Send a request to your API endpoint for logout (e.g., DELETE /logout)
        try {
            const response = await fetch('/logout', {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include JWT token in Authorization header
                },
            });

            if (response.ok) {
                localStorage.removeItem('token'); // Remove token from local storage
                navigate('/login'); // Redirect to login page after successful logout
            } else {
                console.error('Error logging out:', await response.text());
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
