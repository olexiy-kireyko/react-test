const Radio = ({ onRadio, onChangeRadio }) => {
  const handleRadio = event => {
    onChangeRadio(event.target.value);
  };
  return (
    <>
      <label>
        <input
          type="radio"
          name="radios"
          value="sm"
          onChange={handleRadio}
          checked={onRadio === 'sm'}
        />
        sm
      </label>
      <label>
        <input
          type="radio"
          name="radios"
          value="ss"
          onChange={handleRadio}
          checked={onRadio === 'ss'}
        />
        ss
      </label>
      <label>
        <input
          type="radio"
          name="radios"
          value="mm"
          onChange={handleRadio}
          checked={onRadio === 'mm'}
        />
        mm
      </label>
    </>
  );
};
export default Radio;
