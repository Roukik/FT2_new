
import React from 'react';

const TrainList = () => {
  const [selectedTrain, setSelectedTrain] = useState(null);

  const trains = [
    { id: 1, name: 'Train A' },
    { id: 2, name: 'Train B' },
    { id: 3, name: 'Train C' },
  ];

  const handleTrainClick = (train) => {
    setSelectedTrain(train);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%', padding: '20px' }}>
        <h2>Liste de Trains</h2>
        <ul>
          {trains.map((train) => (
            <li key={train.id} onClick={() => handleTrainClick(train)}>
              {train.name}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ width: '50%', padding: '20px' }}>
        <h2>Détails du Train</h2>
        {selectedTrain ? (
          <div>
            <p>Nom du train: {selectedTrain.name}</p>
          </div>
        ) : (
          <p>Sélectionnez un train pour afficher les détails.</p>
        )}
      </div>
    </div>
  );
};

export default Product;

