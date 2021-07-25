import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demoLogIn = () => {
    setCredential('demo@user.io');
    setPassword('password');
    setErrors([]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="logo">monospace</div>
      <ul>
        {errors.map((error, idx) => (
          <li class="signup-errors" key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Username or Email
        <input
          className="login-input"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          className="login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Log In</button>
      <button className="btn-demo" type="submit" onClick={() => demoLogIn()}>Use Demo User</button>
    </form>
  );
}

export default LoginForm;
