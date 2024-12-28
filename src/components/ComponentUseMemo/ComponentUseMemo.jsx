import { useMemo, useState } from 'react';

const ComponentUseMemo = () => {
  const [planets, setPlanets] = useState([
    'qqqq',
    'wwwwww',
    'rrrrrr',
    'ttttt',
    'yyy',
    'ddfdfs',
  ]);
  const [filter, setFilter] = useState('');
  const filterPlanet = useMemo(
    () => planets.filter(planet => planet.includes(filter)),
    [planets, filter]
  );
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(prev => prev + 1);
  };
  return (
    <>
      <p>count: {count}</p>
      <button type="button" onClick={handleClick}>
        click to +count
      </button>
      <ul>
        {filterPlanet.map((planet, index) => (
          <li key={index}>{planet}</li>
        ))}
      </ul>
    </>
  );
};
export default ComponentUseMemo;
