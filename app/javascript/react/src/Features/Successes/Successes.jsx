import React from 'react';
import Header from '../Header'
import Footer from "../Footer";
import Main from "../Successes/Main";
import Contact from "../Contact/Contact";
import Testimonial from "./Testimonial";
import TestimonialTwo from "./TestimonialTwo";
import Divider from "../Divider";

function Successes() {
    return (
        <div className="successes-container">
            <header className="header">
                <Header />
            </header>
            <section className="success-main">
                <Main />
            </section>
            <section className="testimonial">
                <Testimonial />
            </section>
            <Divider />
            <section className="testimonial-two">
                <TestimonialTwo />
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

export default Successes;