import React, { Component } from 'react';

import { Button } from 'antd';


class ButtonWithant extends Component{

  constructor(props) {

    super(props);


  }

  render() {
    return(
      <div>
        <input type="text"></input>
        <hr></hr>
        <Button type="primary"  size="large" htmlType="reset">htmltype属性到底是什么呢？</Button>
        <hr></hr>
        <Button type="primary"  size="large" loading={false} >loading 属性还有delay属性，是什么意识</Button>
      </div>
    )
  }
}
export default ButtonWithant;