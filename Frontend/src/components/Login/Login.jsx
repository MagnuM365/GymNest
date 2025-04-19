import React, { useState } from 'react';
import {  } from 'react-router-dom';
import Input from '../Form/Input';
import PrimaryBtn from '../Button/PrimaryBtn';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
    // Clear input fields when switching forms
    setUsername('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        const response = await fetch('http://localhost:8081/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Login successful:', data);
          localStorage.setItem('token', data.token); // Store the token

        } else {
          setError(data.error || 'Login failed');
          console.error('Login failed:', data);
        }
      } else {
        const response = await fetch('http://localhost:8081/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Registration successful:', data);
          setIsLogin(true); // Redirect to login form
          // Clear input fields after successful registration
          setUsername('');
          setPassword('');
          setError('');
        } else {
          setError(data.error || 'Registration failed');
          console.error('Registration failed:', data);
        }
      }

      // Reset form after submission
      if (isLogin) {
        setUsername('');
        setPassword('');
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error('Error during login:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#171717]">
      <div className="bg-[#212121] p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full rounded-md bg-[#333] border-gray-300 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-6">
            <Input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md bg-[#333] border-gray-300 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <PrimaryBtn type="submit">
            {isLogin ? 'Login' : 'Register'}
          </PrimaryBtn>
          {loading && <p>Loading...</p>}
          {error && (
            <p className="text-red-500 text-sm mt-2">
              {error}
            </p>
          )}
        </form>
        <button
          type="button"
          onClick={handleToggle}
          className="mt-4 text-sm text-gray-300 hover:text-white focus:outline-none focus:underline"
        >
          {isLogin
            ? 'Need to create an account? Register'
            : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
}
export default Login;