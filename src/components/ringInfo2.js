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
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';


const RingInfoClick = (props) => {
    return (

      <div className="ringInfo2Top">

      {props.data.target === "" && (
        <div>
        <a href="javascript:void(0);" className="clickInfoClose">
          <Button variant="light" className="ringClickCloseBtn" onClick={props.toggleClickInfo}>
            <FontAwesomeIcon icon={faTimesCircle} size="lg"/>
          </Button>
        </a>

        <FontAwesomeIcon icon={faQuestion} size="3x" color="white"/>

        <p class="ringInfoText m1">Click a Glyph for to learn more </p>

        </div>
      )}
      {props.data.target !== "" && (
        <div>
        <a href="javascript:void(0);" className="clickInfoClose">
          <Button variant="light" className="ringClickCloseBtn" onClick={props.toggleClickInfo}>
            <FontAwesomeIcon icon={faTimesCircle} size="lg"/>
          </Button>
        </a>

        <img src={props.data.img} className='clickInfoImage' alt="logo" />
        {props.data.ring !== 'house' && (
          <p class="ringInfoText">{props.data.target} </p>
        )}

        <p class="ringInfoText"> {props.data.desc} </p>
        </div>
      )}


      {
          // <p>Ring: {props.data.ring} </p>
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
