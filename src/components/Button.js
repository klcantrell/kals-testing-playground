import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../actionCreators';

export const Button = ({increment}) => {
  return (
    <button onClick={increment}>+</button>
  );
};

export default connect(null, { increment })(Button);