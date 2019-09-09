import React from 'react';
import axios from 'axios';
// import Card from '../Card';

export default class Users extends React.Component {
    state = {
        loading: true,
        error: '',
        data: null
    };

    loadData = () => {
        return axios
            .get('http://localhost:5000/users')
            .then(res => {
                console.log(res.data);
                this.setState({
                    data: res.data.users,
                    loading: false,
                    error: false
                });
            })
            .catch(err => console.log(err => {
                console.error('error: ', err);
                this.setState({
                    error: err,
                    loading: false
                });
            }));
    };

    componentDidMount = () => {
        this.loadData()
    };


    render() {
        const { loading, error, data } = this.state;
        if (loading) {
            return  <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6 text-center'>
              <h3>Loading>>></h3>
            </div>
            <div className='col-md-3'></div>
        </div>
        }
        if (error) {
            return (
                <p>There was an error loading the data. {''}
                    <button onClick={this.loadData}>Try Again</button>
                </p>
            )
        }
        return (
            <div className='row'>
                <div className='col-md-2 text-center'>
                    <p>Users</p>
                    {data.map(user => (
                        <li>{user.username}</li>
                    ))}
                </div>
            </div>
        )
    }
};