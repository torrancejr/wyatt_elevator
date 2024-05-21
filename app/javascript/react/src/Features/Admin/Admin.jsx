import React from 'react';
import Header from '../Header'
import Footer from "../Footer";
import Dashboard from './Dashboard';

function Admin() {

    return (
        <div className="admin-container">
            <dashboard className="dashboard">
                <Dashboard />
            </dashboard>
        </div>
    );
}

export default Admin;