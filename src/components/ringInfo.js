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
} from '@fortawesome/free-solid-svg-icons';


const RingInfo = (props) => {

    return (

      <div className="ringInfoDisplay">
        <ul className="ringInfoList">
          <li>
            <a href="javascript:void(0);" className="clickInfoClose">
              <Button variant="light" className="ringCloseBtn" onClick={props.toggleRingInfo}>
                <FontAwesomeIcon icon={faTimesCircle} size="lg"/>
              </Button>
            </a>
          </li>


          {
            // <li>
            //   <p className="ringInfoText">Selected Ring: <span className="ringInfoSpan">{props.selectedRingName}</span> </p>
            // </li>
            // <li>
            //   {this.state.selectedRing === 1 && (
            //     <p className="ringInfoText"> Selected Ring Rotation: {this.state.rot1}</p>
            //   )}
            //   {this.state.selectedRing === 2 && (
            //     <p className="ringInfoText"> Selected Ring Rotation: {this.state.rot2}</p>
            //   )}
            //   {this.state.selectedRing === 3 && (
            //     <p className="ringInfoText"> Selected Ring Rotation: {this.state.rot3}</p>
            //   )}
            // </li>
            // <li>
            //   {this.state.selectedRing === 1 && (
            //     <p className="ringInfoText"> Selected Ring Rotation: {this.state.rot1}</p>
            //   )}
            //   {this.state.selectedRing === 2 && (
            //     <p className="ringInfoText"> Selected Ring Rotation: {this.state.rot2}</p>
            //   )}
            //   {this.state.selectedRing === 3 && (
            //     <p className="ringInfoText"> Selected Ring Rotation: {this.state.rot3}</p>
            //   )}
            // </li>


          }
          <li>
            <p className="ringInfoText">Planet: <span className="ringInfoSpan">{props.planet}</span> </p>
          </li>
          <li>
            <p className="ringInfoText">Sign: <span className="ringInfoSpan">{props.sign}</span> </p>
          </li>
          <li>
            <p className="ringInfoText">House: <span className="ringInfoSpan">{props.house}</span> </p>
          </li>

          <li>
            <p className="ringInfoText">Interpretation: </p>
          </li>

          {
            // {props.interpretation.planet.state === true && (
            //   <li>
            //     <p className="ringInfoText">{props.interpretation.planet.interp}</p>
            //   </li>
            // )}
            // {props.interpretation.sign.state === true && (
            //   <li>
            //     <p className="ringInfoText">{props.interpretation.sign.interp}</p>
            //   </li>
            // )}
            // {props.interpretation.house.state === true && (
            //   <li>
            //     <p className="ringInfoText">{props.interpretation.house.interp}</p>
            //   </li>
            // )}
          }

          {props.interpretation.planet.state === true && (
            <li>
              <p className="ringInfoText">{props.interpretation.planet.interp}</p>
            </li>
          )}
          {props.interpretation.sign.state === true && (
            <li>
              <p className="ringInfoText">{props.interpretation.sign.interp}</p>
            </li>
          )}
          {props.interpretation.house.state === true && (
            <li>
              <p className="ringInfoText">{props.interpretation.house.interp}</p>
            </li>
          )}


        </ul>

      </div>

    )
}

export default RingInfo;
