// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from "../Components/Spalsh/Navbar.jsx";
import Welcome from "../Components/Spalsh/Welcome.jsx";
import Services from "../Components/Spalsh/Services.jsx";
import AboutUs from "../Components/Spalsh/AboutUs.jsx";
import Footer from "../Components/Spalsh/Footer.jsx"

function Landing() {
        return (
            <div>
            <Navbar />
            <Welcome />
            <Services/>
            <AboutUs/>
            <Footer/>

            </div>
    );
}

export default Landing;

