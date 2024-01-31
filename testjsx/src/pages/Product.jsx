
import React from 'react';
import TrainList from './TrainList'; 

const Product = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Partie gauche avec la liste des trains */}
      <div style={{ width: '50%', padding: '20px' }}>
        <h2>Liste de Trains</h2>
        <TrainList />
      </div>
      <div style={{ width: '50%', padding: '20px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h1>Product page</h1>
      </div>
    </div>
  );
};

export default Product;

