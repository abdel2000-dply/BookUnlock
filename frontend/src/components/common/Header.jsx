import React from "react";
import { useState, useEffect } from "react";

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
                <div className="container">
                    <div className="navbar-brand">
                        <a className="site-name" href="/">BookUnluck</a>
                    </div>
                    <div className="navbar-menu">
                        <a className="navbar-item" href="">Home</a>
                        <a className="navbar-item" href="">Browse books</a>
                        <a className="navbar-item" href="">About us</a>
                    </div>
                </div>
                <div className="profile">
                    <a className="navbar-item" href="/login">Log in</a>
                    <a className="navbar-item" href="/signup">Sign up</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;