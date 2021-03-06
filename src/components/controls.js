import React from 'react';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover';
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
  faStepForward,
  faStepBackward,
  faToggleOn,
  faMobile,
  faHome,
  faMoon,
  faSign,
  faQuestionCircle,
  faUndo,
  faRedo,
} from '@fortawesome/free-solid-svg-icons';


const Controls = (props) => {

  console.log(props.selectedRingName);

  let planetBtnClass = "controlsBtn";
  let signBtnClass = "controlsBtn";
  let houseBtnClass = "controlsBtn";
  if (props.selectedRingName === "planet") {
    planetBtnClass = "controlsBtn controlBtnHighlight";
  }
  if (props.selectedRingName === "sign") {
    signBtnClass = "controlsBtn controlBtnHighlight";
  }
  if (props.selectedRingName === "house") {
    houseBtnClass = "controlsBtn controlBtnHighlight";
  }

    return (
      <div className="controlsTop">

        <ul className="controlsList desktop">
          <li>
            <ul className="controlsSublist">
            <li>
            <OverlayTrigger

              placement={'bottom'}
              overlay={
                <Popover id={`popover-positioned-${'bottom'}`}>
                  <Popover.Content>
                    <strong>Planet</strong>
                  </Popover.Content>
                </Popover>
              }
            >
              <Button variant="light" className={planetBtnClass} onClick={props.controlsInput.bind(this, {type:'select2',value: 1})}>
                <FontAwesomeIcon icon={faMoon} className="controlIcon" size="lg"/>
              </Button>
            </OverlayTrigger>

            </li>
            <li>
            <OverlayTrigger

              placement={'bottom'}
              overlay={
                <Popover id={`popover-positioned-${'bottom'}`}>
                  <Popover.Content>
                    <strong>Sign</strong>
                  </Popover.Content>
                </Popover>
              }
            >
              <Button variant="light" className={signBtnClass} onClick={props.controlsInput.bind(this, {type:'select2',value: 2})}>
                <FontAwesomeIcon icon={faSign} className="controlIcon" size="lg"/>
              </Button>
            </OverlayTrigger>
            </li>
            <li>
            <OverlayTrigger

              placement={'bottom'}
              overlay={
                <Popover id={`popover-positioned-${'bottom'}`}>
                  <Popover.Content>
                    <strong>House</strong>
                  </Popover.Content>
                </Popover>
              }
            >
              <Button variant="light" className={houseBtnClass} onClick={props.controlsInput.bind(this, {type:'select2',value: 3})}>
                <FontAwesomeIcon icon={faHome} className="controlIcon" size="lg"/>
              </Button>
            </OverlayTrigger>
            </li>

            </ul>
          </li>

          {
            // <li>
            //   <ul className="controlsSublist">
            //     <li>
            //       <Button variant="light" className="controlsBtn" onClick={props.controlsInput.bind(this, {type:'select',value:'next'})}>Nxt Ring</Button>
            //     </li>
            //     <li>
            //       <Button variant="light" className="controlsBtn" onClick={props.controlsInput.bind(this, {type:'select',value:'prev'})}>Prev Ring</Button>
            //     </li>
            //   </ul>
            // </li>

            // <li>
            //   <ul className="controlsSublist">
            //     <li>
            //       <Button variant="light" className="controlsBtn" onClick={props.ringToggle}>Toggle Ring</Button>
            //     </li>
            //     <li>
            //       <Button variant="light" className="controlsBtn" onClick={props.toggleMobile}>Mobile</Button>
            //     </li>
            //   </ul>
            // </li>
          }

          <li>
            <ul className="controlsSublist">
            <li>
            <OverlayTrigger

              placement={'bottom'}
              overlay={
                <Popover id={`popover-positioned-${'bottom'}`}>
                  <Popover.Content>
                    <strong>Rotate Left</strong>
                  </Popover.Content>
                </Popover>
              }
            >
            <Button variant="light" className="controlsBtn" onClick={props.controlsInput.bind(this, {type:'rotate',value:'left'})}>
              <FontAwesomeIcon icon={faUndo} className="controlIcon" size="lg"/>
            </Button>
            </OverlayTrigger>
            </li>
            <li>
            <OverlayTrigger

              placement={'bottom'}
              overlay={
                <Popover id={`popover-positioned-${'bottom'}`}>
                  <Popover.Content>
                    <strong>Rotate Right</strong>
                  </Popover.Content>
                </Popover>
              }
            >
            <Button variant="light" className="controlsBtn" onClick={props.controlsInput.bind(this, {type:'rotate',value:'right'})}>
              <FontAwesomeIcon icon={faRedo} className="controlIcon" size="lg"/>
            </Button>
            </OverlayTrigger>
            </li>
            <li>
            <OverlayTrigger

              placement={'bottom'}
              overlay={
                <Popover id={`popover-positioned-${'bottom'}`}>
                  <Popover.Content>
                    <strong>Toggle Ring</strong>
                  </Popover.Content>
                </Popover>
              }
            >
            <Button variant="light" className="controlsBtn" onClick={props.ringToggle}>
              <FontAwesomeIcon icon={faToggleOn} className="controlIcon" size="lg"/>
            </Button>
            </OverlayTrigger>
            </li>
            <li>
            <OverlayTrigger

              placement={'bottom'}
              overlay={
                <Popover id={`popover-positioned-${'bottom'}`}>
                  <Popover.Content>
                    <strong>Mobile View</strong>
                  </Popover.Content>
                </Popover>
              }
            >
            <Button variant="light" className="controlsBtn" onClick={props.toggleMobile}>
              <FontAwesomeIcon icon={faMobile} className="controlIcon" size="lg"/>
            </Button>
            </OverlayTrigger>
            </li>
            {props.ringInfoState === false && (
              <li>
              <OverlayTrigger

                placement={'bottom'}
                overlay={
                  <Popover id={`popover-positioned-${'bottom'}`}>
                    <Popover.Content>
                      <strong>Restore Info Window 1</strong>
                    </Popover.Content>
                  </Popover>
                }
              >
              <Button variant="light" className="controlsBtn" onClick={props.toggleRingInfo}>
                <FontAwesomeIcon icon={faQuestionCircle} className="controlIcon" size="lg"/>
              </Button>
              </OverlayTrigger>
              </li>
            )}

            </ul>
          </li>

        </ul>



        <ul className="controlsList mobile">
          <li>
            <ul className="controlsSublist">

            <li>
            <OverlayTrigger

              placement={'bottom'}
              overlay={
                <Popover id={`popover-positioned-${'bottom'}`}>
                  <Popover.Content>
                    <strong>Planet</strong>
                  </Popover.Content>
                </Popover>
              }
            >
              <Button variant="light" className="controlsBtn" onClick={props.controlsInput.bind(this, {type:'select2',value: 1})}>
                <FontAwesomeIcon icon={faMoon} className="controlIcon" size="sm"/>
              </Button>
            </OverlayTrigger>

            </li>
            <li>
            <OverlayTrigger

              placement={'bottom'}
              overlay={
                <Popover id={`popover-positioned-${'bottom'}`}>
                  <Popover.Content>
                    <strong>Sign</strong>
                  </Popover.Content>
                </Popover>
              }
            >
              <Button variant="light" className="controlsBtn" onClick={props.controlsInput.bind(this, {type:'select2',value: 2})}>
                <FontAwesomeIcon icon={faSign} className="controlIcon" size="sm"/>
              </Button>
            </OverlayTrigger>
            </li>
            <li>
            <OverlayTrigger

              placement={'bottom'}
              overlay={
                <Popover id={`popover-positioned-${'bottom'}`}>
                  <Popover.Content>
                    <strong>House</strong>
                  </Popover.Content>
                </Popover>
              }
            >
              <Button variant="light" className="controlsBtn" onClick={props.controlsInput.bind(this, {type:'select2',value: 3})}>
                <FontAwesomeIcon icon={faHome} className="controlIcon" size="sm"/>
              </Button>
            </OverlayTrigger>
            </li>

              <li>
              <OverlayTrigger

                placement={'bottom'}
                overlay={
                  <Popover id={`popover-positioned-${'bottom'}`}>
                    <Popover.Content>
                      <strong>Rotate Left</strong>
                    </Popover.Content>
                  </Popover>
                }
              >
              <Button variant="light" className="controlsBtn" onClick={props.controlsInput.bind(this, {type:'rotate',value:'left'})}>
                <FontAwesomeIcon icon={faStepBackward} className="controlIcon" size="sm"/>
              </Button>
              </OverlayTrigger>
              </li>
              <li>
              <OverlayTrigger

                placement={'bottom'}
                overlay={
                  <Popover id={`popover-positioned-${'bottom'}`}>
                    <Popover.Content>
                      <strong>Rotate Right</strong>
                    </Popover.Content>
                  </Popover>
                }
              >
              <Button variant="light" className="controlsBtn" onClick={props.controlsInput.bind(this, {type:'rotate',value:'right'})}>
                <FontAwesomeIcon icon={faStepForward} className="controlIcon" size="sm"/>
              </Button>
              </OverlayTrigger>
              </li>
              <li>
              <OverlayTrigger

                placement={'bottom'}
                overlay={
                  <Popover id={`popover-positioned-${'bottom'}`}>
                    <Popover.Content>
                      <strong>Toggle Ring</strong>
                    </Popover.Content>
                  </Popover>
                }
              >
              <Button variant="light" className="controlsBtn" onClick={props.ringToggle}>
                <FontAwesomeIcon icon={faToggleOn} className="controlIcon" size="sm"/>
              </Button>
              </OverlayTrigger>
              </li>

              {props.ringInfoState === false && (
                <li>
                <OverlayTrigger

                  placement={'bottom'}
                  overlay={
                    <Popover id={`popover-positioned-${'bottom'}`}>
                      <Popover.Content>
                        <strong>Restore Info Window 1</strong>
                      </Popover.Content>
                    </Popover>
                  }
                >
                <Button variant="light" className="controlsBtn" onClick={props.toggleRingInfo}>
                  <FontAwesomeIcon icon={faQuestionCircle} className="controlIcon" size="sm"/>
                </Button>
                </OverlayTrigger>
                </li>
              )}

            </ul>

          </li>
        </ul>

      </div>
    )
}

export default Controls;
