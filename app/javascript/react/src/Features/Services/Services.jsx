import React from 'react';
import Header from '../Header'
import Footer from "../Footer";
import Main from './Main'
import Logos from "../Homepage/Logos";
import Projects from './Projects'
import Technical from "./Technical";
import Contact from "../Contact/Contact";

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
            <section className="contact">
                <Contact />
            </section>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default Services;