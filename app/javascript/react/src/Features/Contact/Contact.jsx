import React from 'react';
import Header from '../Header'
import Contact from '../Contact'
import Footer from "../Footer";


function Homepage() {
    return (
        <di>
            <header className="header">
                <Header />
            </header>
            <section className="contact">
                <Contact />
            </section>
            <footer className="footer">
                <Footer />
            </footer>
        </di>

    );
}

export default Homepage;