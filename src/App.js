import React, { Component } from 'react';
//import { CardList } from "./components/card-list/card-list.component";
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/shop.comp';
import SignInAndSignUpPage from "./pages/sign-register/sign-register.comp";
import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from './components/header/Header.comp';
import { auth } from './firebase/firebase.utils';


class App extends Component {

  constructor() {
      super();

      this.state = {
        currentUser: null
      };
    }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
        {/* <CardList monsters={this.state.monsters} /> */}
      </div>
    );
  }
}

export default App;
