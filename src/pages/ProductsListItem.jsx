import { useParams } from 'react-router-dom';
import { getProductItem } from '../productslist-api';

const ProductsListItem = () => {
  const { id } = useParams();
  const item = getProductItem(id);
  console.log('id', id);
  console.log('item', item);

  return (
    <>
      <ul>
        <li>item.id - {item.id}</li>
        <li>item.name - {item.name}</li>
        <li>item.price - {item.price}</li>
        <li>item.descr - {item.descr}</li>
      </ul>
    </>
  );
};
export default ProductsListItem;
