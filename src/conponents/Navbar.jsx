import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const logouthandler = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">My App</Link>
        
        {/* Toggle button for hamburger menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {/* Home - Accessible by all roles */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            {/* Add New Product - Accessible by Seller and Admin */}
            {user && (user.role === 'Seller' || user.role === 'Admin') && (
              <li className="nav-item">
                <Link className="nav-link" to="/addnewproduct">Add New Product</Link>
              </li>
            )}

            {/* Role Management - Accessible by Admin */}
            {user && user.role === 'Admin' && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/rolemanagement">Role Management</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/givepermission">Permission Management</Link>
                </li>
              </>
            )}
          </ul>

          {/* Logout Button */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn btn-outline-danger" onClick={logouthandler}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
