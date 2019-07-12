import React, { Component } from 'react';

class More extends Component {

  constructor(props) {

    super(props)


  }

  render() {
    return (
      <div>
        <h1>
        More
        </h1>
        <hr></hr>
        <input type="button" value="click me" onClick={()=>{
          console.log(this.props.location.state)
        }}></input>
      </div>
    )
  }
}
export default More;