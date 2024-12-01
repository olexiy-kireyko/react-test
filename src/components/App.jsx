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

import Product from './Product';

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product items={food} />
    </div>
  );
}