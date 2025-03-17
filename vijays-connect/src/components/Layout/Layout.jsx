import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Layout.css';

function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef(null);

  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  const handleProfileNavigation = () => {
    navigate('/profile');
    setProfileOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileRef]);

  // If not authenticated, don't render the layout
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="layout">
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>Taxi Admin</h2>
          {/* <button onClick={toggleSidebar}>
            {isSidebarOpen ? '←' : '→'}
          </button> */}
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/Dashboard" className={({ isActive }) => isActive ? 'active-link' : ''}><i className="fas fa-home"></i> Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/trips" className={({ isActive }) => isActive ? 'active-link' : ''}><i className="fas fa-route"></i> Trips</NavLink>
            </li>
            <li>
              <NavLink to="/drivers" className={({ isActive }) => isActive ? 'active-link' : ''}><i className="fas fa-users"></i> Drivers</NavLink>
            </li>
            <li>
              <NavLink to="/vehicles" className={({ isActive }) => isActive ? 'active-link' : ''}><i className="fas fa-car"></i> Vehicles</NavLink>
            </li>
            <li>
              <NavLink to="/schedule-trip" className={({ isActive }) => isActive ? 'active-link' : ''}><i className="fas fa-calendar"></i> Schedule Trip</NavLink>
            </li>
            <li>
              <NavLink to="/email" className={({ isActive }) => isActive ? 'active-link' : ''}><i className="fas fa-envelope"></i> Email</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <div className="profile-icon" ref={profileRef}>
            <button onClick={toggleProfile}>
              <i className="fas fa-user-circle"></i>
            </button>
            {isProfileOpen && (
              <div className="profile-dropdown">
                <button onClick={handleProfileNavigation}>Admin Profile</button>
              </div>
            )}
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}

export default Layout;
