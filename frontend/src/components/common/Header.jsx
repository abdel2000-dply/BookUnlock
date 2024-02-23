import React from "react";

function Header() {
    return (
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