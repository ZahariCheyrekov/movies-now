import './Footer.css';
import React from 'react';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <h2 className="footer-title mv-now">
                    Movies Now
                </h2>

                <ul className="footer-list">
                    <ul className="first-list">
                        <li className="footer-li-item">
                            FAQ
                        </li>
                        <li className="footer-li-item">
                            Privacy
                        </li>
                        <li className="footer-li-item">
                            Help Center
                        </li>
                    </ul>

                    <ul className="middle-list">
                        <li className="footer-li-item">
                            Account
                        </li>
                        <li className="footer-li-item">
                            Terms of Use
                        </li>
                        <li className="footer-li-item">
                            Contact Us
                        </li>
                    </ul>

                    <ul className="last-list">
                        <li className="footer-li-item">
                            Media Center
                        </li>
                        <li className="footer-li-item">
                            Movies Place
                        </li>
                        <li className="footer-li-item">
                            Media Center
                        </li>
                    </ul>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;