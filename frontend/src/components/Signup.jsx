import React from 'react'
import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <div className='auth-main'>
      <div className="auth-container">
        <form className="auth-form">
          <h2>Sign Up</h2>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="username">Name</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className='but'>Sign Up</button>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;