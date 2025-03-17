import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import TripsTable from '../TripsTable/TripsTable';
import Layout from '../Layout/Layout'; // Import Layout

function Dashboard() {
  return (
    <Layout>
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Admin Dashboard | Vijay's Connect</h1>
          <div className="quick-stats">
            <div className="stat-card">
              <h3>Total Trips</h3>
              <p>150</p>
              <i className="fas fa-route"></i>
            </div>
            <div className="stat-card">
              <h3>Active Drivers</h3>
              <p>45</p>
              <i className="fas fa-user-friends"></i>
            </div>
            <div className="stat-card">
              <h3>Available Vehicles</h3>
              <p>32</p>
              <i className="fas fa-car"></i>
            </div>
            <div className="stat-card">
              <h3>Scheduled Trips</h3>
              <p>12</p>
              <i className="fas fa-calendar-check"></i>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="grid-item">
            <Link to="/trips">
              <i className="fas fa-route"></i>
              <h2>Trip Management</h2>
              <p>View and manage all trips</p>
            </Link>
          </div>
          <div className="grid-item">
            <Link to="/drivers">
              <i className="fas fa-users"></i>
              <h2>Driver Management</h2>
              <p>Manage driver profiles</p>
            </Link>
          </div>
          <div className="grid-item">
            <Link to="/vehicles">
              <i className="fas fa-car"></i>
              <h2>Vehicle Management</h2>
              <p>Track and manage vehicles</p>
            </Link>
          </div>
          <div className="grid-item">
            <Link to="/schedule-trip">
              <i className="fas fa-calendar-plus"></i>
              <h2>Schedule Trip</h2>
              <p>Create new trip schedules</p>
            </Link>
          </div>
        </div>

        <TripsTable />
      </div>
    </Layout>
  );
}

export default Dashboard;
