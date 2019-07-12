import React,{ Component } from 'react';
import { Menu } from 'antd';

class Filter extends Component{

  constructor(props) {
    super(props);


  }

  onSwitchShowType=(e)=>{
    this.props.onSwitchShowType(e.item.props.showtype)
  }

  render() {
    return (
      <div className="todo-list">
        <Menu mode="horizontal" onClick={this.onSwitchShowType}>
          <Menu.Item showtype="all">全部</Menu.Item>
          <Menu.Item showtype="todo">正在进行</Menu.Item>
          <Menu.Item showtype="done">已完成</Menu.Item>
          <Menu.Item showtype="delete">已删除</Menu.Item>
        </Menu>
      </div>
    )
  }
}
export default Filter;