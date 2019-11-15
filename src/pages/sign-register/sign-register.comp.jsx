import React from 'react';
import SignIn from '../../components/sign-in/sign-in.comp';
import Register from '../../components/register/register.comp';
import './sign-register.styles.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <Register />
  </div>
);

export default SignInAndSignUpPage;