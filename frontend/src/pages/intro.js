import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from 'react-router-dom';
import '../App.css';
import logo from '../logo.svg';

import MainMenu from '../components/mainMenu'
import Knob1 from '../components/knob1'
import Knob2 from '../components/knob2'
import Knob3 from '../components/knob3'


class Intro extends Component  {

  state = {
    mainMenuSelect: 'home',
  };

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  menuSelect = (args) => {
    console.log('foo',args);
    this.setState({
      mainMenuSelect: args
    })
  }

  render() {

    return (
      <div className="App">

        <MainMenu
          menuSelect={this.menuSelect}
        />

        {this.state.mainMenuSelect === 'home' && (
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Reactt
            </a>
          </div>
        )}
        {this.state.mainMenuSelect === 'knob1' && (
          <Knob1
          />
        )}
        {this.state.mainMenuSelect === 'knob2' && (
          <Knob2
            size={100}
            numTicks={30}
            degrees={360}
            min={1}
            max={100}
            value={30}
            color={true}
          />
        )}
        {this.state.mainMenuSelect === 'knob3' && (
          <Knob3
          size={100}
            numTicks={125}
            degrees={280}
            min={1}
            max={100}
            value={0}
          />
        )}



      </div>
    )
  }

}

export default Intro;
