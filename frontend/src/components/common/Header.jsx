import React from "react";
import { useState, useEffect } from "react";
import Logo from "../../assets/images/book-unluck-logo.png";

function Header() {
    //-----------------Sticky header-----------------
    // const [isSticky, setIsSticky] = useState(false);

    // const handleScroll = () => {
    // const scrollTop = window.scrollY;
    // const headerHeight = document.querySelector('header').offsetHeight; // Get header's height

    // if (scrollTop > headerHeight) {
    //     setIsSticky(true);
    // } else {
    //     setIsSticky(false);
    // }
    // };

    // useEffect(() => {
    // window.addEventListener('scroll', handleScroll);

    // return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        // <header className={isSticky ? 'sticky' : ''}>
        <header>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="/">
                        <img src={Logo} alt="bookunluck" className="logo"/>
                    </a>
                </div>
                <div className="container">
                    <div className="navbar-menu">
                        <a className="navbar-item" href="/">Home</a>
                        <a className="navbar-item" href="/explore">Explore</a>
                        <a className="navbar-item" href="/">About us</a>
                    </div>
                    <div className="profile">
                        <a className="navbar-item" href="/signup">Sign up</a>
                        <a className="navbar-item" href="/login">Log in</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;