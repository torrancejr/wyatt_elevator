import React from 'react';
import Header from './Header'
import Logos from './Logos'
import Contact from './Contact'
import Stats from './Stats'
import Footer from "./Footer";

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
            <section className="stats">
                <Stats />
            </section>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default Homepage;
