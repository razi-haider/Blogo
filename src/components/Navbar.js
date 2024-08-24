// Purpose: Navbar component
import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';

// Navbar component
function Navbar() {
  return (
    <>
      {/* Linking Bootstrap CSS */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" />
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
        <div className="container-fluid">
          {/* Website Logo */}
          <a className="navbar-brand" href="#">BlogO</a>
          <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* Linking to Home page */}
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              {/* Linking to About page */}
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
              {/* Linking to Contact page */}
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
            <li className="nav-item">
              {/* Linking to Login page */}
              <Link className="nav-link" to="/Login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

// Export Navbar component
export default Navbar;
