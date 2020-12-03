import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Intro from './pages/intro';
import Main from './pages/main';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    location: window.location.pathname,
  };

  constructor(props) {
    super(props);
    this.location = window.location.pathname;
  }

  componentDidUpdate() {

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <BrowserRouter>
          <React.Fragment>
            <main className="main-content">
              <Switch>
                <Route path="/intro" render={(props) => <Intro {...props}
                />}/>
                <Route path="/main" render={(props) => <Main {...props}
                />}/>
                <Redirect from="/" to="/intro" exact />
                <Redirect from="*" to="/intro" exact />
              </Switch>
            </main>
          </React.Fragment>
      </BrowserRouter>
    );
  }
  
}

export default App;
