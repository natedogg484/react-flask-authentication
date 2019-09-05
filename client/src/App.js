import React from 'react';
// react router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// content wrapper
import Wrapper from './components/Wrapper'
// stylesheets
import './App.css';
// routes
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Wrapper>
        <div className='container'>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/login">Login</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className='jumbotron text-center'>
            <h5>Authentication Practice with React and Flask</h5>
          </div>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </div>
      </Wrapper>
    </Router>
  );
}

export default App;
