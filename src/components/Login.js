// Purpose: Login page component
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // DATABASE FOR 2 TYPE OF USER (ADMIN AND USER)
  const users = [
    { username: "admin", email: "admin123@gmail.com", password: "admin", role: "admin" },
    { username: "user", email: "user123@gmail.com", password: "user", role: "user" }
  ];

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // UTILIZING USENAVIGATE HOOK
  const Navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find(user => user.username === username && user.password === password);
    // CONDITIONAL ROUTING
    if (user) {
      if (user.role === "admin") {
        Navigate("/Admin");
      }
      if (user.role === "user") {
        Navigate("/User");
      }
    } else {
      setError('Invalid username or password.');
    }
  };

  // LOGIN FORM
  return (
    // Using Bootstrap for styling
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="card">
            <div className="card-header">
              <h4 className="text-center">Login</h4>
            </div>
            {/* Username */}
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input type="text" className="form-control" id="username" name="username" required value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                {/* Password */}
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" className="form-control" id="password" name="password" required value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                {/* Login button */}
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">Login</button>
                </div>
              </form>
              {/* Error message */}
              {error && <div className="alert alert-danger">{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export login page component
export default Login;

