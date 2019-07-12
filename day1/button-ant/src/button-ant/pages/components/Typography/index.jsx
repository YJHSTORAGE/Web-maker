import React, { Component } from 'react';

import { Typography } from 'antd';

const { Text } = Typography;


class TypographyDemo extends Component{

  constructor(props) {

    super(props);


  }

  render() {
    return(
      <div>
        <Text type="danger">危险字体</Text>
        <Text underline>危险字体</Text>
        <span>用这个控制字体的时候，千万注意，他妈的type就只有三个属性，后面的就是直接写了</span>
      </div>
    )
  }
}
export default TypographyDemo;