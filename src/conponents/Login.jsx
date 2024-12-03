import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [role, setRole] = useState('User'); 
  const { login } = useAuth(); 
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ role }); 
    navigate('/'); 
  };

  return (
    <div className="containers">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="role">Select Role:</label>
        <select
          id="role"
          className="form-control"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="User">User</option>
          <option value="Seller">Seller</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <button className="btn btn-primary mt-3" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
