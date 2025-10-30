import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ActivityTable from './components/ActivityTable';
import SummaryCard from './components/SummaryCard';
import ActivityModal from './components/ActivityModal';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [showModal, setShowModal] = useState(false);

  const sampleData = [
    { id: 1, activity: 'Running', duration: '30m', calories: 320 },
    { id: 2, activity: 'Cycling', duration: '45m', calories: 450 },
    { id: 3, activity: 'Yoga', duration: '60m', calories: 200 },
  ];

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={require('./octofitapp-small.svg').default} alt="OctoFit Logo" className="octofit-logo" />
            OctoFit
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">Workouts</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <main className="container my-4">
        <Routes>
          <Route path="/" element={
            <>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h1 className="h3">Dashboard</h1>
                <div>
                  <button className="btn btn-success me-2" onClick={() => setShowModal(true)}>Add Activity</button>
                  <button className="btn btn-secondary">Profile</button>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 mb-3">
                  <ActivityTable data={sampleData} />
                </div>
                <div className="col-lg-4 mb-3">
                  <SummaryCard />
                </div>
              </div>
              <ActivityModal show={showModal} onClose={() => setShowModal(false)} />
            </>
          } />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
