import '../App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Search from "./Search";
import Home from "./Home";
import Add from "./Add";
import Remove from "./Remove";

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Route path='/' exact={true} component={Home}/>
              <Route path='/search' exact={true} component={Search}/>
              <Route path='/add' exact={true} component={Add}/>
              <Route path='/remove' exact={true} component={Remove}/>
            </Switch>
          </div>
        </Router>
    )
  }
}

export default App;
