import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// URL de base de l'API
const API_URL = 'http://192.168.1.41:8000';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const params = new URLSearchParams();
      params.append('username', formData.username);
      params.append('password', formData.password);
      
      const response = await axios.post(`${API_URL}/auth/token`, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      
      // Sauvegarder le token d'accès dans le localStorage
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('token_type', response.data.token_type);
      
      // Rediriger vers la page Hello World
      navigate('/hello');
    } catch (err) {
      setError('Identifiants incorrects. Veuillez réessayer.');
      console.error('Erreur de connexion:', err);
    }
  };

  return (
    <div className="container">
      <h1>Connexion</h1>
      {error && <div className="alert alert-error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">Se connecter</button>
      </form>
    </div>
  );
};

export default Login; 