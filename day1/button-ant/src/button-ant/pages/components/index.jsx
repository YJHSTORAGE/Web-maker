import React, { Component } from 'react';

import ButtonWithant from './Button';
import TypographyDemo from './Typography';


class App extends Component{

  constructor(props) {

    super(props);


  }

  render() {
    return(
      <div>
        <ButtonWithant></ButtonWithant>
        <TypographyDemo></TypographyDemo>
      </div>
    )
  }
}
export default App;