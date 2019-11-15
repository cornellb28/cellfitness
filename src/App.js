import React, { Component } from 'react';
//import { CardList } from "./components/card-list/card-list.component";
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/shop.comp';
import SignInAndSignUpPage from "./pages/sign-register/sign-register.comp";
import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from './components/header/Header.comp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends Component {

  constructor() {
      super();

      this.state = {
        // Inital state that will start off as null
        currentUser: null
      };
    }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  } // componentDidMount Ends

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
} // render ends

// exporting the component
export default App;
