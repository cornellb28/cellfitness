import React, { Component } from 'react';
// Components
// import { CardList } from "./components/card-list/card-list.component";
// import { SearchBox } from './components/card-list/search-box/search-box.comp';
import Header from './components/header/Header.comp';
// Pages
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/shop.comp';
import SignInAndSignUpPage from "./pages/sign-register/sign-register.comp";
// Styles
import './App.css';

// Roater & Auth
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';



class App extends Component {
  constructor() {
      super();

      this.state = {
        // Inital state that will start off as null
        currentUser: null,
        // monsters: [],
        searchField: ''
      };
    }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // This is for the monster component
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ monsters: users }));

        const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  } // componentDidMount Ends

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    // const { monsters, searchField } = this.state;
    // const filteredMonsters = monsters.filter(monster =>
    //   monster.name.toLowerCase().includes(searchField.toLowerCase())
    // );
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
        {/* <SearchBox onSearchChange={this.onSearchChange} /> */}
        {/* <CardList monsters={filteredMonsters} /> */}
        
      </div>
    );
  }
} // render ends

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
