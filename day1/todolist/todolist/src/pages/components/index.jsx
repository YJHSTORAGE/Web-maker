import React,{ Component } from 'react';

import Add from './Add';
import TodoList from './TodoList';
import Filter from './Filter';



class Todo extends Component{

  constructor(props) {
    super(props);

    this.state={
      Task: [
          {
              cont: "记得喝牛奶",
              status: "todo"
          },
          {
              cont: "喂狗",
              status: "done"
          },
          {
              cont: "睡觉",
              status: "delete"
          }
      ],
      showType: "all",
  }
}

  onAdd=(newTask)=>{
    this.state.Task.push(newTask);
    this.setState({
      Task:this.state.Task
    });
  }

  onSwitchShowType=(newShowType)=>{
    this.setState({
      showType:newShowType
    })
  }

  onSwitchStatus=(showType,id)=>{
    let j=-1;
    this.state.Task.forEach((item,index)=>{
      if(showType==="all"){
        this.state.Task[id].status=this.state.Task[id].status==="todo"?"done":"todo"
      }else{
        if(item.status===showType){
          j++;
          if(j===id){
            this.state.Task[index].status=this.state.Task[index].status==="todo"?"done":"todo"
          }
        }
      }
    })
    this.setState({
      Task:this.state.Task
    })
  }

  onDeleteTask=(showType,id)=>{
    let j=-1;
    let find=false;
    this.state.Task.filter((item,index)=>{
      if(showType==="all" && !find){
        this.state.Task.splice(id,1);
        find=!find;
      }else{
        if(item.status===showType && !find){
          j++;
          if(j===id){
            this.state.Task.splice(j,1);
            find=!find
          }
        }
      }
    })
    this.setState({
      Task:this.state.Task
    })
  }

  render() {
    return (
      <div className="todoList">
        <Add
        onAdd={this.onAdd}
        />
        <TodoList 
          task={this.state.Task}
          showType ={this.state.showType}
          onSwitchStatus={this.onSwitchStatus}
          onDeleteTask ={this.onDeleteTask}
        />
        <Filter
          onSwitchShowType={this.onSwitchShowType} 
        />
      </div>
    )
  }
}
export default Todo;