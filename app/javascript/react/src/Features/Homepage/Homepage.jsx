import React from 'react';
import Header from './Header'
import Logos from './Logos'

function Homepage() {
    return (
        <div className="homepage">
            <header className="header">
                <Header />
            </header>
            <section className="content">
                <Logos />
            </section>
            <footer className="footer">
                <p>© 2024 My Website</p>
            </footer>
        </div>
    );
}

export default Homepage;
