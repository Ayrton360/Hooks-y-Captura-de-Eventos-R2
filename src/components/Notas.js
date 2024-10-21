import React, { useState, useEffect, useRef } from 'react';

function Notes() {
  const [note, setNote] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const saveTimeoutRef = useRef(null); 

  const handleChange = (e) => {
    setNote(e.target.value);

    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(() => {
      saveNote();
    }, 2000); 
  };

  const saveNote = () => {
    setIsSaving(true);
    setTimeout(() => {
      console.log('Nota guardada:', note);
      setIsSaving(false);
    }, 500); 
  };


  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.noteContainer}>
        <textarea
          value={note}
          onChange={handleChange}
          placeholder="Escribe tu nota aquí..."
          style={styles.textarea}
        />
        {isSaving && <div style={styles.saving}>Guardando...</div>}
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
  noteContainer: {
    width: '80%',
    maxWidth: '1000px',
    backgroundColor: '#1e1e1e',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  textarea: {
    width: '95%',
    height: '300px',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #333',
    backgroundColor: '#333', 
    color: '#e0e0e0', 
    resize: 'none',
  },
  saving: {
    marginTop: '10px',
    color: '#007bff',
    fontSize: '0.9rem',
  },
};

export default Notes;