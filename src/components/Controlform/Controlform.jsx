const Controlform = ({
  controlForm,
  onChangeControlForm,
  onSubmitControlForm,
  children,
}) => {
  return (
    <>
      {children}
      <form onSubmit={onSubmitControlForm}>
        <label>
          <input
            type="text"
            name="text"
            value={controlForm.text}
            onChange={onChangeControlForm}
          />
          enter message
        </label>
        <label>
          <input
            type="password"
            name="password"
            value={controlForm.password}
            onChange={onChangeControlForm}
          />
          enter password
        </label>
        <button type="submit">SUBMIT FORM</button>
      </form>
    </>
  );
};
export default Controlform;
