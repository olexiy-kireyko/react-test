import './App.css';
// import { useEffect, useState, useRef } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import NotFound from '../pages/NotFound';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx('link', isActive && 'active');
};

export default function App() {
  return (
    <div>
      <nav className="nav">
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          Products
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/*" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
