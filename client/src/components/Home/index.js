import React, { Component } from 'react';


export default class Home extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8 text-center'>
                    <h3>Got it to work! This went really well at the end!!</h3>
                    <p> Allows you to login with existing username and password. Can create a username and password in the db if you don't have one via the link. Will not allow duplicate usernames. Then you can check to make sure that your username was created via the users link on the navbar.</p>
          </div>
                <div className='col-md-2'></div>
            </div>
        )
    }
}