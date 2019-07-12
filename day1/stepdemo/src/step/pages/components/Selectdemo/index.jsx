import React, { Component } from 'react';

import { Select } from 'antd';

const { Option } = Select;

class Selectdemo extends Component{

  constructor(props) {

    super(props)

  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    return(
      <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="select one country"
    defaultValue={['china']}
    onChange={this.handleChange}
    optionLabelProp="label"
  >
    <Option value="china" label="China">
      <span role="img" aria-label="China">
        🇨🇳{' '}
      </span>
      China (中国)
    </Option>
    <Option value="usa" label="USA">
      <span role="img" aria-label="USA">
        🇺🇸{' '}
      </span>
      USA (美国)
    </Option>
    <Option value="japan" label="Japan">
      <span role="img" aria-label="USA">
        🇯🇵{' '}
      </span>
      Japan (日本)
    </Option>
    <Option value="koean" label="Koean">
      <span role="img" aria-label="USA">
        🇰🇷{' '}
      </span>
      Koean (韩国)
    </Option>
  </Select>
    )
  }
}
export default Selectdemo;