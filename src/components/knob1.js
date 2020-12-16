import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Knob } from "react-rotary-knob";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import '../App.css';
import './menu.css';
import logo from '../logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretUp,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faTimesCircle,
  faCompass,
  faCode,
  faCodeBranch,
  faArchive,
  faExternalLinkAlt,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';


class Knob1 extends Component {

  state = {
    value: 50
  }

  changeValue(val) {
    this.setState({value:val})
    console.log('knob val', val)
  }

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {

    return (
      <div className="KnobBoxTop">

      <div className="App-header">

        <Knob
          onChange={this.changeValue.bind(this)}
          min={0} max={100}
          value={this.state.value}
        />

      </div>

      </div>
    )
  }

}

export default Knob1;
