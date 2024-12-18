const Checkbox = ({ onCheckbox, onChangeCheckbox }) => {
  return (
    <>
      <label>
        <input
          type="checkbox"
          name="check"
          checked={onCheckbox}
          onChange={event => onChangeCheckbox(event.target.checked)}
        />
        check ME!
      </label>
      <button type="button" disabled={!onCheckbox}>
        button ME
      </button>
    </>
  );
};
export default Checkbox;
