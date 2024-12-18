import { useId } from 'react';

const Select = ({ onSelect, onChangeSelect }) => {
  const id = useId();
  const changeSelect = event => {
    onChangeSelect(event.target.value);
  };
  return (
    <>
      <label htmlFor={id}>label for select</label>
      <select name="lang" id={id} value={onSelect} onChange={changeSelect}>
        <option value="uk">uk</option>
        <option value="ua">ua</option>
        <option value="sp">sp</option>
      </select>
    </>
  );
};

export default Select;
