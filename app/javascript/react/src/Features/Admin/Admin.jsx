import React from 'react';
import Header from '../Header'
import Footer from "../Footer";
import Dashboard from './Dashboard';
import { useCurrentUser } from './UserContext';

function Admin() {
    const { user } = useCurrentUser();

    if (!user || !user.is_admin) {
        return <p>Access Denied</p>;
    }

    return (
        <div className="admin-container">
            <dashboard className="dashboard">
                <Dashboard />
            </dashboard>
        </div>
    );
}

export default Admin;