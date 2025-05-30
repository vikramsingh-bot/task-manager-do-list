import React, { useState } from 'react';
import axiosClient from '../api/axiosClient';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.post('auth/token/', { username, password });
      localStorage.setItem('access_token', response.data.access);
      alert('Login successful');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Login;
