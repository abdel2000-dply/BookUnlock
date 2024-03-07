import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <p>&copy; 2024 BookUnluck. All rights reserved.</p>
                <ul className="social-icons">
                    <li>
                        <a href="https://twitter.com/bookunluck" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/bookunluck" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/bookunluck" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;