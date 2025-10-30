import React from 'react';

const ActivityModal = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div className="modal d-block" tabIndex="-1" role="dialog" aria-modal="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Activity</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose} />
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
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
            <button type="button" className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityModal;
