import React from 'react';

const SummaryCard = () => (
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
);

export default SummaryCard;
