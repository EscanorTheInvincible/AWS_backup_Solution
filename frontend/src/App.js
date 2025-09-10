import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/hello')
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)'
    }}>
      <header style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1e293b' }}>AWS Backup Solution</h1>
        <p style={{ fontSize: '1.2rem', color: '#334155' }}>
          Secure, reliable, and easy AWS backup management.
        </p>
      </header>
      <main style={{ width: '100%', maxWidth: 600, textAlign: 'center' }}>
        <div style={{ marginBottom: 24 }}>
          <strong>Status:</strong> <span>{message}</span>
        </div>
        <nav style={{ marginTop: 24 }}>
          <button style={{
            padding: '12px 32px',
            fontSize: '1rem',
            background: '#6366f1',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            marginRight: 16
          }}>
            Dashboard
          </button>
          <button style={{
            padding: '12px 32px',
            fontSize: '1rem',
            background: '#64748b',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer'
          }}>
            Backup Jobs
          </button>
        </nav>
      </main>
      <footer style={{ marginTop: 48, color: '#64748b' }}>
        &copy; {new Date().getFullYear()} Druva AWS Backup Ripoff
      </footer>
    </div>
  );
}

export default App;
