import React, { useEffect, useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((res) => res.text())
      .then((data) => setBackendMessage(data))
      .catch(() => setBackendMessage('Could not connect to backend'));
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">Home Page</header>
      <main className="home-main">
        <p style={{ fontSize: '1.2rem' }}>Backend says: {backendMessage}</p>
      </main>
      <footer className="home-footer">SkyFeel &copy; 2025</footer>
    </div>
  );
};

export default Home;
