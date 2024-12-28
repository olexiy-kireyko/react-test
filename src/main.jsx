// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'modern-normalize';
import App from './components/App';
import { UserProvider } from './userContext';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

// const contextValue = { username: 'Mango', isLoggedIn: true };

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
