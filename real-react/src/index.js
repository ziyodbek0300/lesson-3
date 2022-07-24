import React from 'react';
import ReactDOM from 'react-dom/client';

const styles = {
  card: {
    width: '300px',
    backgroundColor: '#f5f5f5',
    margin: '10px',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
    boxShadow: '0px 0px 5px #000'
  },
  wrapper: {
    display: 'flex',
    maxWidth: '1000px',
    margin: '0 auto',
    gap: '1rem'
  }
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const Card = () => {
  return (
    <div style={styles.card}>
      <h1>Hello World</h1>
    </div>
  )
}

root.render(
  <div style={styles.wrapper}>
    <Card />
    <Card />
    <Card />
  </div>
);