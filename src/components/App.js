import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Display/>
        <Button/>
      </React.Fragment>
    );
  }
}

export default App;