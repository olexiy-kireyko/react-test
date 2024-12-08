import css from './Testemet.module.css';
import icon from '../../assets/images/symbol-defs.svg';
import { useState } from 'react';

const Testemet = ({ message, children }) => {
  let [counter, setCounter] = useState(0);
  const [isShow, setisShow] = useState(false);
  const handleClick = event => {
    alert(`${message}`);
    console.log(event);
    setCounter(counter + 1);
  };
  const handleShow = () => {
    setisShow(!isShow);
  };

  return (
    <div>
      Testemet, {children}
      <svg width="20" height="20" className={css.svg} onClick={handleClick}>
        <use href={icon + '#icon-connection'}></use>
      </svg>
      <svg width="20" height="20" className={css.svg}>
        <use href={icon + '#icon-bullhorn'}></use>
      </svg>
      <button type="button" onClick={handleShow}>
        counter: {counter}, {isShow ? 'This is hided TEXT!' : ''}
      </button>
    </div>
  );
};

export default Testemet;
