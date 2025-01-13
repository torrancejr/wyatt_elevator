import React from 'react';
import Header from '../Header'
import Footer from "../Footer";
import Main from './Main'
import Divider from "../Divider";
import MultiImage from './MultiImage';

function BeforeAndAfter() {
    return (
        <div className="suppliers-container">
            <header className="header">
                <Header/>
            </header>
            <section className="main">
                <Main/>
            </section>
            <divider className="divider">
                <Divider/>
            </divider>
            <multipage className="multipage">
                <MultiImage/>
            </multipage>
            <footer className="footer">
                <Footer/>
            </footer>
        </div>
    );
}

export default BeforeAndAfter;