import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaUniversity,
} from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Institution Info */}
          <div className="col-md-4 mb-4">
            <h5 className="d-flex align-items-center mb-3 fw-bold">
              <FaUniversity className="me-2" />
              Chaitanya Bharathi Institute of Technology
            </h5>
            <p className="d-flex align-items-center small mb-1">
              <MdLocationOn className="me-2" />
              Gandipet, Hyderabad - 500075, Telangana
            </p>
            <p className="d-flex align-items-center small mb-1">
              <MdPhone className="me-2" />
              +91 40 2419 3256
            </p>
            <p className="d-flex align-items-center small mb-1">
              <MdEmail className="me-2" />
              info@cbit.ac.in
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-white text-decoration-none">Home</a>
              </li>
              <li className="mb-2">
                <a href="/students" className="text-white text-decoration-none">Student List</a>
              </li>
              <li className="mb-2">
                <a href="/add" className="text-white text-decoration-none">Add Student</a>
              </li>
              
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Connect With Us</h5>
            <div className="d-flex flex-column gap-2">
              <a href="https://www.facebook.com" className="text-white text-decoration-none d-flex align-items-center" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="me-2" /> Facebook
              </a>
              <a href="https://www.twitter.com" className="text-white text-decoration-none d-flex align-items-center" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="me-2" /> Twitter
              </a>
              <a href="https://www.instagram.com" className="text-white text-decoration-none d-flex align-items-center" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <GrInstagram className="me-2" /> Instagram
              </a>
              <a href="https://www.linkedin.com" className="text-white text-decoration-none d-flex align-items-center" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="me-2" /> LinkedIn
              </a>
              <a href="https://www.github.com" className="text-white text-decoration-none d-flex align-items-center" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="me-2" /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center pt-3 border-top border-secondary mt-4">
          <p className="mb-1 small">
            &copy; {new Date().getFullYear()} Student Management System - CBIT. All Rights Reserved.
          </p>
          <p className="small">
            Developed by <a href="#" className="text-white text-decoration-none">CSE Department</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
