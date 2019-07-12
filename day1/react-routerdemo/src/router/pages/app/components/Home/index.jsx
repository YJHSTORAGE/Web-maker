import React, { Component } from 'react';

class Home extends Component {

  constructor(props) {

    super(props)

  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <hr></hr>
        <input type="button" value="click me" onClick={()=>{
          console.log(this.props.match.params.name)
        }}></input>
      </div>
    )
  }
}
export default Home;