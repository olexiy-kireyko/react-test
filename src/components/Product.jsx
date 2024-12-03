// import PropTypes from 'prop-types';

// Product.PropTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   imgUrl: PropTypes.string,
//   price: PropTypes.number.isRequired,
// };
import { BsBandaidFill } from 'react-icons/bs';
import { BsYelp } from 'react-icons/bs';
import css from './Product.module.css';

export default function Product({ items }) {
  return items.map(item => {
    return (
      <div key={item.id}>
        <h2>
          <BsYelp size="24" className={css.icon} />
          {item.name}
          <BsBandaidFill />
        </h2>

        <img src={item.imgUrl} alt="Tacos With Lime" width="640" />
        <p>Price: {item.price} credits</p>
      </div>
    );
  });
}
