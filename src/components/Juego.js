import React, { useState } from 'react';

function Juego() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [target] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const numberGuess = parseInt(guess, 10);

    if (isNaN(numberGuess)) {
      setMessage('Por favor, ingrese un número válido.');
      return;
    }

    if (numberGuess < target) {
      setMessage('Más alto!');
    } else if (numberGuess > target) {
      setMessage('Más bajo!');
    } else {
      setMessage('¡Felicidades! Has adivinado el número.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.game}>
        <h1 style={styles.title}>Juego de Adivinar el Número</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            style={styles.input}
            placeholder="Ingresa tu adivinanza"
          />
          <button type="submit" style={styles.button}>Adivinar</button>
        </form>
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
  game: {
    textAlign: 'center',
    backgroundColor: '#1e1e1e', 
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '300px',
  },
  title: {
    marginBottom: '20px',
    fontSize: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #333',
    marginBottom: '10px',
    backgroundColor: '#333', 
    color: '#e0e0e0', 
  },
  button: {
    padding: '10px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  message: {
    marginTop: '20px',
    fontSize: '1rem',
  },
};

export default Juego;

