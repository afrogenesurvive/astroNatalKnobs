import React from 'react';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
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


const MainMenu = (props) => {

    return (
      <div className="FloatMenuTop">
      <ul className="FloatMenuList">
        <li>
          <Button variant="light" className="mainMenuBtn" onClick={props.menuSelect.bind(this, 'knob1')}>Knob 1</Button>
        </li>
        <li>
          <Button variant="light" className="mainMenuBtn" onClick={props.menuSelect.bind(this, 'knob2')}>Knob 2</Button>
        </li>
        <li>
          <Button variant="light" className="mainMenuBtn" onClick={props.menuSelect.bind(this, 'knob3')}>Knob 3</Button>
        </li>
        <li>
          <Button variant="light" className="mainMenuBtn" onClick={props.menuSelect.bind(this, 'knob4')}>Knob 4</Button>
        </li>
        <li>
          <Button variant="light" className="mainMenuBtn" onClick={props.menuSelect.bind(this, 'home')}>Home</Button>
        </li>
      </ul>


      </div>
    )
}

export default MainMenu;
