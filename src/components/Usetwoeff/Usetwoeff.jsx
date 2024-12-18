import { useEffect, useState } from 'react';

const Usetwoeff = () => {
  const [first, setFirst] = useState(() => {
    const storageFirst = window.localStorage.getItem('first');
    return storageFirst ? JSON.parse(storageFirst) : 0;
  });
  const [second, setSecond] = useState(0);
  useEffect(() => {
    console.log('You see me once');
  }, []);
  useEffect(() => {
    console.log('first effect: ', first);
    // window.localStorage.setItem('first', JSON.stringify(first));
  }, [first]);
  useEffect(() => {
    console.log('second effect: ', second);
  }, [second]);
  useEffect(() => {
    console.log('first&second: ', first + second);
  }, [first, second]);

  return (
    <div>
      Usetwoeff
      <div
        onClick={evt => {
          console.log(evt);

          setFirst(first + 1);
          window.localStorage.setItem('first', JSON.stringify(first));
        }}
      >
        First
      </div>
      <div
        onClick={() => {
          setFirst(0);
        }}
      >
        First Reset
      </div>
      <div
        onClick={() => {
          setSecond(second + 1);
        }}
      >
        Second
      </div>
      <div
        onClick={() => {
          setSecond(0);
        }}
      >
        Second Reset
      </div>
    </div>
  );
};

export default Usetwoeff;
