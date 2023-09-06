import React, { useState } from 'react';
import axios from 'axios';import { useRouter } from 'next/router';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
        const response = await axios.post('/api/login', {
            username,
            password,
        });
  
        // Handle successful login (e.g., redirect to dashboard)
        console.log('Logged in successfully', response.data);
        const router = useRouter();
        router.push('/home');
    } catch (error) {
      // Handle login error (e.g., display error message)
      console.error('Login failed', error);
    }
  };

  return (
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
