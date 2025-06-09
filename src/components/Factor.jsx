import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export const Factor = () => {
  const { factor, setFactor } = useContext(DataContext);

  return (
    <div className="factor">
      <label>
        Multiplicador de precio:
        <input
          type="number"
          value={factor}
          onChange={e => setFactor(Number(e.target.value))}
          min="1"
        />
      </label>
    </div>
  );
};
