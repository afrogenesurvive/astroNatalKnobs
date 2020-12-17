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
import './ringInfo.css';
import logo from '../logo.svg';

// import planet, sign and house imgs

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


const RingInfoClick = (props) => {

    return (

      <div className="ringInfo2Top">

        <div>

        <a href="javascript:void(0);" className="clickInfoClose">
          <Button variant="light" className="ringClickCloseBtn" onClick={props.toggleClickInfo}>X</Button>
        </a>

        <p>Ring: {props.data.ring} </p>
        <p>Target: {props.data.target} </p>
        <p>Desc: {props.data.desc} </p>
        <p>Coords: {props.data.coords.x}, {props.data.coords.y} </p>
        </div>



      {
        // <p>Coords: {props.data.coords.x}, {props.data.coords.y} </p>
        // <img src={props.data.img} className='mainKnob' alt="logo" />


        // <a href="javascript:void(0);">
        //   <Button variant="light" className="ringClickCloseBtn" onClick={props.closeClickInfo()}>close</Button>
        // </a>
      }


      </div>

    )
}

export default RingInfoClick;
