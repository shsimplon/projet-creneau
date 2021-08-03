import React from 'react';
import Button from './Button';
 import {userService} from '../services';
 import { withRouter } from 'react-router';
 class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            
            username:"",
            email: "",
            password: "",
            role: "",
            error: null
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleClick = async (e) => {
        const {username,email,password,role} = this.state;
      
        try {
            const response = await userService.signup(username,email,password,role);
            localStorage.setItem('token', response.data.token);
            this.props.history.push('/');
            
        
        } catch(e) {
            console.log(e);
        }
    }
    
    render() {
        return (
        <div className="signupForm">
            <>
            <span className="form-container">
 
        <h2>Inscription</h2>
            {this.state.error && <h6>{this.state.error}</h6>}
            <label for="email">Email</label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
            <label for="password">Mot de passe</label>
            <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
            <label for="username">Pseudo</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
            <label for="role">Role</label>
            <input type="radio" id="user" name="role" value="user" onChange={this.handleChange} />
            <label for="role">Client</label>
            <input type="radio" id="admin" name="role" value="admin" onChange={this.handleChange} />
            <label for="role">Admin</label>
           
            <Button size="small" value="Sign up" handleClick={this.handleClick} />
            </span>
          </>
          
         
        </div>
        )}
}
export default withRouter (SignUp);