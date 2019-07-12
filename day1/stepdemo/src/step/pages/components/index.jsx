import React, { Component } from 'react';

import Stepdemo from './Stepdemo';
import Cascaderdemo from './Cascaderdemo';
import Selectdemo from './Selectdemo';

class App extends Component {

  constructor(props) {

    super(props)

  }

  render() {
    return (
      <div>
        <Stepdemo />
        <Cascaderdemo />
        <Selectdemo />
      </div>
    )
  }
}
export default App;