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
import './controls.css';
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


const Controls = (props) => {

    return (
      <div className="controlsTop">

        <ul className="controlsList">
          <li>
            <Button variant="light" className="controlsBtn" onClick={props.controlsInput.bind(this, {type:'select',value:'next'})}>Nxt Ring</Button>
          </li>
          <li>
            <Button variant="light" className="controlsBtn" onClick={props.controlsInput.bind(this, {type:'select',value:'prev'})}>Prev Ring</Button>
          </li>
          <li>
            <Button variant="light" className="controlsBtn" onClick={props.controlsInput.bind(this, {type:'rotate',value:'left'})}>Rotate Left</Button>
          </li>
          <li>
            <Button variant="light" className="controlsBtn" onClick={props.controlsInput.bind(this, {type:'rotate',value:'right'})}>Rotate Right</Button>
          </li>
        </ul>

      </div>
    )
}

export default Controls;
