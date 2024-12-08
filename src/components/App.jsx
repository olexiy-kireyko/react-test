// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// src/App.jsx
const food = [
  {
    id: '1',
    name: 'Lime',
    imgUrl:
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
    price: 10.99,
  },
  {
    id: '2',
    name: 'Limerrr',
    imgUrl:
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640',
    price: 10.22,
  },
  {
    id: '3',
    name: 'IIIIILime',
    imgUrl:
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640',
    price: 12.99,
  },
];

const alertStyle = {
  color: 'red',
  backgroundColor: 'green',
  fontSize: '20',
};

const alertStyle2 = {
  color: 'green',
  backgroundColor: 'yellow',
  fontSize: '30',
};

const Test = ({ children }) => {
  return <div style={alertStyle2}>{children}</div>;
};
import Alert from './Alert';
import Product from './Product';
import './App';
import Testemetet from './Testemet/Testemet';
import { useEffect, useState } from 'react';
import Clicker from './Clicker/Clicker';
// import Rest from './Rest';
// import Test from './Test';

export default function App() {
  const [clicker, setClicker] = useState(0);
  const handleClicker = () => {
    setClicker(clicker + 1);
  };
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const handleCoordX = () => {
    setCoord({ ...coord, x: coord.x + 1 });
  };
  const handleCoordY = () => {
    setCoord({ ...coord, y: coord.y + 1 });
  };
  useEffect(() => {
    document.title = `clicker: ${clicker}`;
    console.log('clicker', clicker);
    return;
  }, [clicker]);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const Modal = () => {
    useEffect(() => {
      const intID = setInterval(() => {
        console.log(`modal count: ${Date.now()}`);
      }, 2000);
      return () => {
        clearInterval(intID);
      };
    }, []);
    return <div>MODAL WINDOW</div>;
  };
  return (
    <div>
      <h1 style={alertStyle}>Best selling</h1>
      <button type="button" onClick={handleShowModal}>
        Modal, {showModal ? 'hide' : 'show'}, {showModal && <Modal />}
      </button>
      <p>
        x: {coord.x} y: {coord.y}
      </p>
      <button onClick={handleCoordX}>click x+1</button>
      <button onClick={handleCoordY}>click y+1</button>
      <Product items={food} />
      <Test>
        RRRRRRRRRR <span>gggggggggg</span>
      </Test>
      {/* <Rest></Rest> */}
      {/* <Alert valuer="error">error</Alert>
      <Alert valuer="info" bordered>
        info
      </Alert>
      <Alert valuer="success" bordered shadowed>
        success
      </Alert> */}
      <Alert valuer="error">FFFFFFFFFFFFF</Alert>
      <Alert valuer="success" bordered>
        FFFFFyyyFFFFF
      </Alert>
      <Alert valuer="info" shadowed>
        FFFFFFFoooFFFF
      </Alert>
      <Testemetet message={'first'}>First test</Testemetet>
      <Testemetet message={'second'}>second test</Testemetet>
      <Clicker value={clicker} onHandle={handleClicker} />
      <Clicker value={clicker} onHandle={handleClicker} />
    </div>
  );
}
