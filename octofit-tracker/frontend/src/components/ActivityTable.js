import React from 'react';

const ActivityTable = ({ data }) => (
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
          {data.map(item => (
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
);

export default ActivityTable;
