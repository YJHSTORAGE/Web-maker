import React, { Component } from 'react';
import { Input, Button, Layout, Row, Col } from 'antd';

const { Header } = Layout;

class Add extends Component{
   
  constructor(props) {
      super(props);

      this.state= {
        TaskCont: '' 
      }
    }

    onAdd = () => {
      if(this.state.TaskCont!=='') {
        this.props.onAdd({cont: this.state.TaskCont,status: 'todo'})
        this.setState( {
          TaskCont: ''
        } )
      }
    }

    OnChangeTaskCont= (e) =>{
      this.setState({
        TaskCont: e.target.value
      })
    }

    render() {
        return (
          <Layout>
            <Header>
              <Row>
                <Col span={12} offset={4}>
                  <Input
                    placeholder="添加代办事项"
                    onChange={this.OnChangeTaskCont}
                    value={this.state.TaskCont}
                    onPressEnter={this.onAdd}
                  />
                </Col>
                <Col span={4} offset={2}>
                  <Button
                    type="primary"
                    size="large"
                    icon="user-add"
                    onClick={this.onAdd}
                  >新建代办事项</Button>
                </Col>
              </Row>
            </Header>
          </Layout>
        )
    }
}
export default Add;