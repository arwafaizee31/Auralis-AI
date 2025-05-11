import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/TempoSelector.css';

const TempoSelector = ({ selectedTempo, onTempoChange }) => {
  const [tempos, setTempos] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/tempo')
      .then(res => {
        console.log("Tempo API response:", res);
        if (res && res.data) {
          setTempos(res.data);
        } else {
          console.warn("Received unexpected response:", res);
        }
      })
      .catch(err => {
        console.error("Error fetching tempos:", err);
      });
  }, []);
  
  return (
    <div className="tempo-selector-container">
      <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem', flexWrap: 'wrap' }}>
        {tempos.map((tempo) => (
          <label
            key={tempo.name}
            onClick={() => onTempoChange(tempo.name)}
            className={`tempo-option ${selectedTempo === tempo.name ? 'selected' : ''}`}
          >
            <input
              type="radio"
              name="tempo"
              value={tempo.name}
              checked={selectedTempo === tempo.name}
              readOnly
              style={{ display: 'none' }}
            />
            {tempo.name}
          </label>
        ))}
      </div>
    </div>
  );
};

export default TempoSelector;
