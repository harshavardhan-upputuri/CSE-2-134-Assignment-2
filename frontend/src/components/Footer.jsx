import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-5 justify-content-end">
            <div className="container text-center">
                <p>&copy; {new Date().getFullYear()} Student Registration System. All Rights Reserved.</p>
                <div className="social-links">
                    <a href="https://www.facebook.com" className="text-white mx-2 text-decoration-none  align-items-center" target="_blank" rel="noopener noreferrer">
                        <FaFacebook /> Facebook
                    </a>
                    <a href="https://www.twitter.com" className="text-white mx-2 text-decoration-none  align-items-center" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />Twitter
                    </a>
                    <a href="https://www.instagram.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                        <GrInstagram />Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
