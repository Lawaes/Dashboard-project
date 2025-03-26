import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// URL de base de l'API
const API_URL = 'http://192.168.1.41:8000';

const Hello = () => {
  const [helloData, setHelloData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHelloData = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        navigate('/login');
        return;
      }
      
      try {
        const response = await axios.get(`${API_URL}/hello`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        setHelloData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Erreur lors de la récupération des données:', err);
        setError('Impossible de récupérer les données. Veuillez vous reconnecter.');
        setLoading(false);
        
        // Si l'erreur est liée à l'authentification, rediriger vers la page de connexion
        if (err.response && err.response.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('token_type');
          navigate('/login');
        }
      }
    };
    
    fetchHelloData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('token_type');
    navigate('/login');
  };

  if (loading) {
    return <div className="container">Chargement...</div>;
  }

  return (
    <div className="container">
      {error ? (
        <div className="alert alert-error">{error}</div>
      ) : (
        <>
          <h1>Hello World</h1>
          {helloData && (
            <div>
              <p>{helloData.message}</p>
              <p>Email: {helloData.email}</p>
              <p>ID Utilisateur: {helloData.user_id}</p>
            </div>
          )}
        </>
      )}
      <button onClick={handleLogout} className="btn">Se déconnecter</button>
    </div>
  );
};

export default Hello; 