import React, { Component } from 'react';
//import { CardList } from "./components/card-list/card-list.component";
import Homepage from './pages/Homepage';
import './App.css';
import { Switch, Route } from "react-router-dom";

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
        {/* <CardList monsters={this.state.monsters} /> */}
      </div>
    );
  }
}

export default App;
