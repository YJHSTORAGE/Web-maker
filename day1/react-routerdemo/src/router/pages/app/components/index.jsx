import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Others from './Others';
import More from './More';

class App extends Component{

  constructor(props) {

    super(props)

  }

  render() {

    let data = {id:3,name:"sam",age:36};
    data = JSON.stringify(data);
    const path = `/About/${data}`;
    const path1= {
      pathname:'/Others',
      query:data
    };
    const path2= {
      pathname:'/More',
      state:data,
    }
    return(
      <Router>
        <ul>
          <li><Link to="/Home/sam">Home</Link></li>
          <li><Link to={path}>About</Link></li>
          <li><Link to={path1}>Others</Link></li>
          <li><Link to={path2}>More</Link></li>
        </ul>
        <Route path="/Home/:name" component={Home} />
        <Route path="/About/:data" component={About } />
        <Route path="/Others" component={Others} />
        <Route path="/More" component={More} />
      </Router>
    )
  }
}
export default App;