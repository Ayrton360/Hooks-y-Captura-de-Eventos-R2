import React, { useState } from 'react';

function Button() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Botón clickeado.');
  };

  const handleDoubleClick = () => {
    setMessage('Botón doble clickeado.');
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonsContainer}>
        <button 
          onClick={handleClick} 
          onDoubleClick={handleDoubleClick} 
          style={styles.button}
        >
          Haz clic o doble clic
        </button>
        {message && <div style={styles.message}>{message}</div>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#121212',
    color: '#e0e0e0',
    padding: '20px',
    boxSizing: 'border-box',
  },
  buttonsContainer: {
    textAlign: 'center',
    backgroundColor: '#1e1e1e', 
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '300px',
  },
  button: {
    padding: '15px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  buttonClick: {
    backgroundColor: '#0056b3',
  },
  buttonDoubleClick: {
    backgroundColor: '#004080',
  },
  message: {
    marginTop: '20px',
    fontSize: '1rem',
  },
};

export default Button;