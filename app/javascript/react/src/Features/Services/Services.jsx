import React from 'react';
import Header from '../Header'
import Footer from "../Footer";
import Main from './Main'
import Logos from "../Homepage/Logos";
import Projects from './Projects'
import Technical from "./Technical";


function Services() {
    return (
        <div className="homepage">
            <header className="header">
                <Header />
            </header>
            <section className="service-main">
                <Main />
            </section>
            <section className='technical'>
                <Technical />
            </section>
            <section className="projects">
                <Projects />
            </section>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default Services;