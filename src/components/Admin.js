// Purpose: Admin Dashboard
import React from "react";

// Admin Dashboard
const Admin = () => {
  return (
    <>
      {/* Using Bootstrap for styling */}
      <p className="text-bg-dark text-center p-1"> BlogO Administration </p>
      <div className="container my-5">
        {/* Admin Dashboard Title */}
        <h1 className="text-center mb-5">Admin Dashboard</h1>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card bg-primary text-white">
              <div className="card-body">
                {/* Users card */}
                <h5 className="card-title">Total Users</h5>
                <p className="card-text">1,000</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card bg-success text-white">
              <div className="card-body">
                {/* Revenue Card */}
                <h5 className="card-title">Total Revenue</h5>
                <p className="card-text">$10,000</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card bg-info text-white">
              <div className="card-body">
                {/* Active Sessions Card */}
                <h5 className="card-title">Active Sessions</h5>
                <p className="card-text">50</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card bg-warning text-white">
              <div className="card-body">
                {/* Conversion Rate Card */}
                <h5 className="card-title">Conversion Rate</h5>
                <p className="card-text">15%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Export Admin Dashboard
export default Admin;
