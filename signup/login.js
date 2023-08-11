import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './login.css';
import Plan from '../plan';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [nav, setNav] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    setNav(true);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <div className="input-group remember-me">
          <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
          <label>Remember me</label>
        </div>
        <Link to='/plan'>
        <button type="submit" onClick={handleSubmit} className='submit'>Login {nav && <Link to ='/plan'><Plan/></Link>}</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
