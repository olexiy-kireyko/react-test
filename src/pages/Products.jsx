import { Routes, Route, Link } from 'react-router-dom';
import ProductsAbout from './ProductsAbout';
import ProductsList from './ProductsList';
import ProductsListItem from './ProductsListItem';

const Products = () => {
  return (
    <div>
      <h3>page Products</h3>
      <Link to="/products/about">/products/about</Link>
      <p>1</p>
      <Link to="/products/list">/products/list</Link>
      <p>2</p>

      <Routes>
        <Route path="/about" element={<ProductsAbout />} />
        <Route path="/list" element={<ProductsList />} />
        <Route path="/list/:id" element={<ProductsListItem />} />
      </Routes>
    </div>
  );
};
export default Products;
