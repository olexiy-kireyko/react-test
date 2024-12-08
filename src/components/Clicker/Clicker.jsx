// import React from 'react';

const Clicker = ({ value, onHandle }) => {
  return <div onClick={onHandle}>clicker count: {value}</div>;
};

export default Clicker;
