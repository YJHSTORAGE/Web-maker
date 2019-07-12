import React, { Component } from 'react';

class Others extends Component {

  constructor(props) {

    super(props)


  }

  render() {
    return (
      <div>
        <h1>
          Others
        </h1>
        <hr></hr>
        <input type="button" value="click me" onClick={()=>{
          console.log(this.props.location.query)
        }}></input>
      </div>
    )
  }
}
export default Others;