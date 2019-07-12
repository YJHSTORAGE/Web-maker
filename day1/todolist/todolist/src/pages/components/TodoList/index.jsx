import React,{ Component } from 'react';
import { Checkbox , Icon ,  Row , Col} from 'antd';


class TodoList extends Component{

  constructor(props) {
    super(props);


  }

  onSwitchStatus=(e)=>{
    this.props.onSwitchStatus(this.props.showType,Number(e.target.index))
  }

  onDeleteTask=(e)=>{
   let index=Number(e.target.parentElement.getAttribute("data-index")||e.target.parentElement.parentElement.getAttribute("data-index"));
   this.props.onDeleteTask(this.props.showType,index)
  }

  todoListElement=()=>{
    const todoListElement = this.props.task.map((item,index) => {
      if(item.status===this.props.showType || this.props.showType==="all"){
        return(
            <li key={index}>
                <Row>
                  <Col span={4}>
                  <Checkbox
                    checked={item.status==="done"} 
                    onChange={this.onSwitchStatus}
                    disabled={item.status==="delete"}
                    index={index}
                  />
                  </Col>
                  <Col span={12}>
                    <div className={`span-${item.status}`}>
                      {item.cont}
                    </div>
                  </Col>
                  <Col span={4}>
                    <div  index={index} onClick={this.onDeleteTask}>
                      <Icon 
                        type="delete" 
                        className={`${item.status}-icon`}
                        // onClick={this.onDeleteTask}
                        data-index={index}
                      />
                    </div>
                    
                  </Col>
                </Row>      
            </li>
          )
      }
    })
      return todoListElement; 
}

  render() {
    return (
      <div className="todo-list" >
        <ul>
          {this.todoListElement()}
        </ul>
      </div>
    )
  }
}
export default TodoList;