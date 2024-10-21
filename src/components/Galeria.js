import React, { useState } from 'react';

function Galeria() {
  const images = ['./img/corvette.jpg', './img/porsche.jpg', './img/ferrari.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={styles.gallery}>
      <button onClick={prevImage} style={{ ...styles.button, ...styles.prevButton }}>‹</button>
      <img
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
        style={styles.image}
      />
      <button onClick={nextImage} style={{ ...styles.button, ...styles.nextButton }}>›</button>
    </div>
  );
}

const styles = {
  gallery: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  image: {
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
  },
  button: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    border: 'none',
    color: 'white',
    fontSize: '2rem',
    padding: '10px 20px',
    cursor: 'pointer',
    zIndex: 1,
    borderRadius: '50%',
    transition: 'background-color 0.3s ease',
  },
  prevButton: {
    left: '20px',
  },
  nextButton: {
    right: '20px',
  },
};

export default Galeria;

