import React, { Component } from 'react';

class About extends Component {

  constructor(props) {

    super(props)


  }

  render() {
    return (
      <div>
        <h1>
          About
        </h1>
        <hr></hr>
        <input type="button" value="click me" onClick={()=>{
          console.log(JSON.parse(this.props.match.params.data))
        }}></input>
      </div>
    )
  }
}
export default About;