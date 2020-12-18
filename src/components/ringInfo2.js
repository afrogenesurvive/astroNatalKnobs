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
import firstHouse from '../assets/img/infoImages/1stHouse.png';
import secondHouse from '../assets/img/infoImages/2ndHouse.png';
import thirdHouse from '../assets/img/infoImages/3rdHouse.png';
import fourthHouse from '../assets/img/infoImages/4thHouse.png';
import fifthHouse from '../assets/img/infoImages/5thHouse.png';
import sixthHouse from '../assets/img/infoImages/6thHouse.png';
import seventhHouse from '../assets/img/infoImages/7thHouse.png';
import eigthHouse from '../assets/img/infoImages/8thHouse.png';
import ninthHouse from '../assets/img/infoImages/9thHouse.png';
import tenthHouse from '../assets/img/infoImages/10thHouse.png';
import eleventhHouse from '../assets/img/infoImages/11thHouse.png';
import twelfthHouse from '../assets/img/infoImages/12thHouse.png';
import aquarius from '../assets/img/infoImages/aquarius.png';
import aries from '../assets/img/infoImages/aries.png';
import taurus from '../assets/img/infoImages/taurus.png';
import gemini from '../assets/img/infoImages/gemini.png';
import cancer from '../assets/img/infoImages/cancer.png';
import leo from '../assets/img/infoImages/leo.png';
import virgo from '../assets/img/infoImages/virgo.png';
import libra from '../assets/img/infoImages/libra.png';
import scorpio from '../assets/img/infoImages/scorpio.png';
import sagittarius from '../assets/img/infoImages/sagittarius.png';
import capricorn from '../assets/img/infoImages/capricorn.png';
import pisces from '../assets/img/infoImages/pisces.png';
import ascendant from '../assets/img/infoImages/ascendant.png';
import sun from '../assets/img/infoImages/sun.png';
import moon from '../assets/img/infoImages/moon.png';
import mercury from '../assets/img/infoImages/mercury.png';
import venus from '../assets/img/infoImages/venus.png';
import mars from '../assets/img/infoImages/mars.png';
import jupiter from '../assets/img/infoImages/jupiter.png';
import saturn from '../assets/img/infoImages/saturn.png';
import uranus from '../assets/img/infoImages/uranus.png';
import neptune from '../assets/img/infoImages/neptune.png';
import pluto from '../assets/img/infoImages/pluto.png';
import northNode from '../assets/img/infoImages/northNode.png';

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
          <Button variant="light" className="ringClickCloseBtn" onClick={props.toggleClickInfo}>
            <FontAwesomeIcon icon={faTimesCircle} size="lg"/>
          </Button>
        </a>

        <img src={props.data.img} className='clickInfoImage' alt="logo" />
        <p>Target: {props.data.target} </p>
        <p>Desc: {props.data.desc} </p>
        <p>Coords: {props.data.coords.x}, {props.data.coords.y} </p>
        </div>



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
