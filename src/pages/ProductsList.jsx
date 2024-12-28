import { getProductList } from '../productslist-api';
import { Link } from 'react-router-dom';

const ProductsList = () => {
  const list = getProductList();
  return (
    <>
      <h3>ProductsList:</h3>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            <Link to={`${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ProductsList;
