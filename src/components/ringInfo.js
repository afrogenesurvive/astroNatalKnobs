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
            <p className="ringInfoText top3 top2">Planet: <span className="ringInfoSpan">{props.planet}</span> </p>
            <p className="ringInfoText top3 top2">Sign: <span className="ringInfoSpan">{props.sign}</span> </p>
            <p className="ringInfoText top3">House: <span className="ringInfoSpan">{props.house}</span> </p>
          </li>


          <li>
            <p className="ringInfoText">Interpretation: </p>
          </li>

          {

            // <li>
            //   <p className="ringInfoText top3">Sign: <span className="ringInfoSpan">{props.sign}</span> </p>
            // </li>
            // <li>
            //   <p className="ringInfoText top3">House: <span className="ringInfoSpan">{props.house}</span> </p>
            // </li>



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

            // <p className="ringInfoText interpretation bld ">{props.interpretation.planet.interp.d} </p>
            // <p className="ringInfoText interpretation bld ">{props.interpretation.sign.interp.d} </p>
            // <p className="ringInfoText interpretation bld ">{props.interpretation.house.interp.b} </p>
          }

          {props.interpretation.planet.state === true && (
            <li>
              <p className="ringInfoText interpretation ">{props.interpretation.planet.interp.a} </p>
              <p className="ringInfoText interpretation bld">{props.interpretation.planet.interp.b} </p>
              <p className="ringInfoText interpretation ">{props.interpretation.planet.interp.c} </p>
              {props.interpretation.planet.interp.d.map((term) => (
                <p className="ringInfoText interpretation bld">{term},</p>
              ))}
            </li>
          )}
          {props.interpretation.sign.state === true && (
            <li>
            <p className="ringInfoText interpretation ">... {props.interpretation.sign.interp.a} </p>
            <p className="ringInfoText interpretation bld">{props.interpretation.sign.interp.b} </p>
            <p className="ringInfoText interpretation ">{props.interpretation.sign.interp.c} </p>
            {props.interpretation.sign.interp.d.map((term) => (
              <p className="ringInfoText interpretation bld">{term},</p>
            ))}
            </li>
          )}
          {props.interpretation.house.state === true && (
            <li>
            <p className="ringInfoText interpretation ">... {props.interpretation.house.interp.a} </p>
            {props.interpretation.house.interp.b.map((term) => (
              <p className="ringInfoText interpretation bld">{term},</p>
            ))}
            </li>
          )}


        </ul>

      </div>

    )
}

export default RingInfo;
