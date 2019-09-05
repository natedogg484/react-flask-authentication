import React, { Component } from 'react';
import './index.css'
import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '' }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    handleSubmit = event => {
        event.preventDefault();

        const obj = {
            username: this.state.username,
            password: this.state.password
        };
        axios.post('http://localhost:5000/login', obj)
            .then( res => console.log(res.data));

        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        return (
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6 text-center'>
                    <div className='card'>
                        <div className='card-header'>Login</div>
                        <div className='card-body'>
                            <form onSubmit={this.handleSubmit}>
                                <div className='form-group'>
                                    <label htmlFor='username'>username</label>
                                    <input type='username' className='form-control' id='usernameInput' placeholder='Enter Username' name='username' value={this.state.username} onChange={this.handleChange}></input>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="password">Password</label>
                                    <input type='password' className='form-control' id='passwordInput' placeholder="Enter Password" name='password' value={this.state.password} onChange={this.handleChange}></input>
                                </div>
                                <button type='submit' className='btn btn-dark'>Login</button>
                            </form>
                        </div>
                    </div>
                    <a href='/register'>To register for an account click here</a>
                </div>
                <div className='col-md-3'></div>
            </div>
        )
    }
}