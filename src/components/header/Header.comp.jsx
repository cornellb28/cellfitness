import React from 'react';
import './Header.styles.scss';
import {auth} from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';


const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <img src="http://thecell4life.com/wp-content/uploads/2017/11/The-Cell-logo-250x63.png" alt="Cell Fitness" />
        </Link>
        <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}>Sign Out</div> : 
        <Link className="option" to="/signin">Sign In</Link>
      }
    </div>
    </div>
);

export default Header;