import React from 'react';
import { Link } from 'react-router-dom';
import { Assets } from '../Assests/Assets';
import { FaGraduationCap } from 'react-icons/fa';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-xl bg-body-tertiary w-100">
            <div className="container-fluid d-flex align-items-center justify-content-between">

                {/* Logo Section */}
                <Link className="navbar-brand d-flex align-items-center gap-2 text-decoration-none" to="/">
                    <FaGraduationCap size={32} className="text-primary" />
                    <span className="fw-bold fs-4 text-dark">CBIT Student Portal</span>
                </Link>

                {/* Toggler for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav Links */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav fs-5   gap-5">
                        <li className="nav-item  hover-effect" >
                            <Link className="nav-link " to="/">Home</Link>
                        </li>
                        <li className="nav-item  hover-effect">
                            <Link className="nav-link " to="/students">Students</Link>
                        </li>
                        <li className="nav-item  hover-effect">
                            <Link className="nav-link " to="/add">Registration</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
