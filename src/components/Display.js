import React from 'react';
import { connect } from 'react-redux';

const Display = ({count}) => {
  return (
    <h1>{count}</h1>
  );
};

const mapStateToProps = state => ({
  count: state,
});

export default connect(mapStateToProps)(Display);