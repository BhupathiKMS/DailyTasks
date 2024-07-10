import React, { useState } from 'react';
import axios from 'axios';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/users/register', { name, email, password });
      console.log('Registered successfully', data);
    } catch (error) {
      console.error('Error registering', error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationPage;
