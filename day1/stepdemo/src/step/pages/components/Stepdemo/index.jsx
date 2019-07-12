import React, { Component } from 'react';
import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

class Stepdemo extends Component {
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };

  //对于一个不是bolean类型的数据类型，比如number类型。用!!实现强制类型转换，可以判断true和false
  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
  };

  onCheckAllChange = e => {
    console.log(e.target);
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };

  //移除焦点时候触发，默认参数是一个doumentelement，就是checkbox，且只有一个参数,看这里的other是undefined就知道没有别的参数了
  onCheckAllBlur = (e,other) =>{
    console.log(e.target,other);
  }
  onCheckAllFocus = e => {
    console.log(e.target);
    //checkbox还有blur和focus方法
    e.target.blur();
  }

  



  /*indeterminate属性设置
  当为true的时候，始终都是表示全选菜单下选了但是没选满，即使没选或者全选的时候也不会显示别的样式变化
  当为false的时候，只有便是全选和没选两种状态，当选了但是没有全选的时候就不会有别的样式变化*/
  render() {
    return (
      <div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
            onBlur={this.onCheckAllBlur}
            onFocus={this.onCheckAllFocus}
          >
            Check all(checkbox后面的内用最好作为子元素，这样点击后面的子元素也可以触发checkbox的点击事件)
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup
          options={plainOptions}
          value={this.state.checkedList}
          onChange={this.onChange}
        />
      </div>
    )
  }
}
export default Stepdemo;