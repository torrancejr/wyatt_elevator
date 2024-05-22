import React from 'react';
import Header from '../Header'
import Footer from "../Footer";
import Main from './Main'

function Suppliers() {
    return (
        <div className="suppliers-container">
            <header className="header">
                <Header />
            </header>
            <section className="main">
                <Main />
            </section>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default Suppliers;