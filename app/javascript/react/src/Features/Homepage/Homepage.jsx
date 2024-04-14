import React from 'react';
import Header from './Header'
import Logos from './Logos'
import Contact from './Contact'

function Homepage() {
    return (
        <div className="homepage">
            <header className="header">
                <Header />
            </header>
            <section className="content">
                <Logos />
            </section>
            <section className="contact">
                <Contact />
            </section>
            <footer className="footer">

            </footer>
        </div>
    );
}

export default Homepage;
