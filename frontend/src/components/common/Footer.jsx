import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer()
{
    return (
        <footer>
            <div className="container">
                <p>&copy; 2024 BookUnluck. All rights reserved.</p>
                <ul className="social-icons">
                    <li>
                        <a href="https://twitter.com/bookunluck" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/bookunluck" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/bookunluck" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;