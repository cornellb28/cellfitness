import React, { Component } from 'react';
import FormInput from '../form-input/form-input.comp';
import CustomButton from '../custom-button/custom-button.comp';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import '../register/register.styles.scss';

export default class Register extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert('password does not match. Please try again');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName, email});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
    
        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="register">
                <h2 className="title">I do not have an Account</h2>
                <p>Sign Up with your email and password</p>
                <form className="register-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display Name" 
                    required
                    />
                    <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    label="Email" 
                    required
                    />
                    <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    label="Password" 
                    required
                    />
                    <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="Confirm Password" 
                    required
                    />
                    <CustomButton type="submit">
                        Register
                    </CustomButton>
                </form>
            </div>
        );
    }
}


