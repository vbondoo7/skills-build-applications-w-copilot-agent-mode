import React, { useState } from 'react';
import './App.css';
import octofitLogo from './octofitapp-small.svg';

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

      <main className="container my-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="h3">Dashboard</h1>
          <div>
            <button className="btn btn-success me-2" onClick={() => setShowModal(true)}>Add Activity</button>
            <button className="btn btn-secondary">Profile</button>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mb-3">
            <div className="card">
              <div className="card-header">
                <strong>Recent Activities</strong>
              </div>
              <div className="card-body p-0">
                <table className="table table-striped mb-0">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Activity</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Calories</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleData.map(item => (
                      <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.activity}</td>
                        <td>{item.duration}</td>
                        <td>{item.calories}</td>
                        <td>
                          <button className="btn btn-sm btn-primary me-2">Edit</button>
                          <button className="btn btn-sm btn-danger">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3">
            <div className="card">
              <div className="card-header">
                <strong>Summary</strong>
              </div>
              <div className="card-body">
                <h5 className="card-title">This week</h5>
                <p className="card-text">Total workouts: <strong>3</strong></p>
                <a href="#details" className="card-link">View details</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="modal d-block" tabIndex="-1" role="dialog" aria-modal="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Activity</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)} />
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Activity</label>
                    <input className="form-control" placeholder="e.g., Running" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Duration</label>
                    <input className="form-control" placeholder="e.g., 30m" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button type="button" className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
