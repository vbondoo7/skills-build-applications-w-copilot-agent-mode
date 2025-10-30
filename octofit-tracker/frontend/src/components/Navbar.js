import React from 'react';
import octofitLogo from '../octofitapp-small.svg';
import '../App.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand d-flex align-items-center" href="/">
        <img src={octofitLogo} alt="OctoFit Logo" className="octofit-logo" />
        OctoFit
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#activities">Activities</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#teams">Teams</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
);

export default Navbar;
