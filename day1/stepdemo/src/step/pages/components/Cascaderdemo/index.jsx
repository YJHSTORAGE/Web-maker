import React, { Component } from 'react';
import { Cascader } from 'antd';


const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
      {
        value: 'xibei',
        label: 'xibei',
        children: [
          {
            value: 'gebi',
            label: 'gebi',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

function onChange(value) {
  console.log(value);
}

class Cascaderdemo extends Component{

  constructor(props) {

    super(props)

  }

  displayRender = label => {
    console.log(label);
    return label[label.length - 1];
  }

  //Cascader默认的是输入框，但是当其后面包含了子元素，类似于这里的a标签，就会显示为一个a链接，不会是一个输入框了，这就是设计自己的样式的方法
  render() {
    return(
      <Cascader 
        defaultValue={['zhejiang', 'hangzhou', 'xihu']}
        options={options}
        onChange={onChange} 
        placeholder="Please select"
        expandTrigger="hover"
        displayRender={this.displayRender}
      >
      </Cascader>
    )
  }
}
export default Cascaderdemo;