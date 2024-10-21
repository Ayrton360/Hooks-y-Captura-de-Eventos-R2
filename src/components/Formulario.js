import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        setErrors(prevErrors => ({
          ...prevErrors,
          name: value.trim() === '' ? 'El nombre es obligatorio' : ''
        }));
        break;
      case 'email':
        setErrors(prevErrors => ({
          ...prevErrors,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Correo electrónico inválido'
        }));
        break;
      case 'password':
        setErrors(prevErrors => ({
          ...prevErrors,
          password: value.length < 6 ? 'La contraseña debe tener al menos 6 caracteres' : ''
        }));
        break;
      default:
        break;
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Nombre:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => {
              setName(e.target.value);
              validateField('name', e.target.value);
            }} 
            style={styles.input} 
          />
          {errors.name && <div style={styles.error}>{errors.name}</div>}
        </label>
        <label style={styles.label}>
          Correo Electrónico:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => {
              setEmail(e.target.value);
              validateField('email', e.target.value);
            }} 
            style={styles.input} 
          />
          {errors.email && <div style={styles.error}>{errors.email}</div>}
        </label>
        <label style={styles.label}>
          Contraseña:
          <input 
            type="password" 
            value={password} 
            onChange={(e) => {
              setPassword(e.target.value);
              validateField('password', e.target.value);
            }} 
            style={styles.input} 
          />
          {errors.password && <div style={styles.error}>{errors.password}</div>}
        </label>
        <button type="submit" style={styles.button}>Enviar</button>
      </form>
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#1e1e1e', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  label: {
    marginBottom: '15px',
    fontSize: '1rem',
    color: '#e0e0e0',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #333',
    marginTop: '5px',
    marginBottom: '5px',
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
  error: {
    color: '#ff4d4d',
    fontSize: '0.9rem',
    marginTop: '5px',
  },
};

export default Form;