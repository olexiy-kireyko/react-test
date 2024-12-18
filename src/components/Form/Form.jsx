import { useId, useState } from 'react';

const Form = ({ onLogin }) => {
  function handleSubmit(event) {
    event.preventDefault();
    // console.log('event', event);
    // console.log(event.target.elements.name.value);
    // console.log(event.target.elements.password.value);
    const form = event.target;
    const { name, password } = form.elements;
    onLogin({
      names: name.value,
      passwords: password.value,
    });
    event.target.reset();
  }
  const id = useId();
  const [pass, setPass] = useState('');
  const changePass = event => {
    setPass(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={id}>label for name</label>
      <input type="text" name="name" id={id} />
      <input
        type="password"
        name="password"
        // value={pass}
        onChange={changePass}
      />
      <p>{pass}</p>
      <button type="submit">submit</button>
    </form>
  );
};
export default Form;
