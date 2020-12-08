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
// import '../App.css';
import './knob4.css';
import logo from '../logo.svg';
import ring1 from '../assets/img/ring1.png'
import ring2 from '../assets/img/ring2.png'
import ring3 from '../assets/img/ring3.png'

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

import Controls from './controls'


class Knob4 extends Component {

  state = {
    rings: [1,2,3],
    selectedRing: 1,
    rot1: 0,
    rot2: 0,
    rot3: 0,
  }

  constructor(props) {
    super(props);
    this.rot = this.state.rot;
    this.canvasRef1 = React.createRef();
    this.canvasRef2 = React.createRef();
    this.canvasRef3 = React.createRef();
  }

  componentDidUpdate() {
  }

  componentDidMount() {
    console.log('roar',this.refs.image3);
    document.addEventListener("keypress", e => {
      console.log('gotcha',e.key);
    });

    const canvas1 = this.canvasRef1.current;
    const canvas2 = this.canvasRef2.current;
    const canvas3 = this.canvasRef3.current;
    const context1 = canvas1.getContext('2d');
    const context2 = canvas2.getContext('2d');
    const context3 = canvas3.getContext('2d');
    const img1 = this.refs.image1;
    const img2 = this.refs.image2;
    const img3 = this.refs.image3;


    context1.drawImage(img1,canvas1.width/2-img1.width/2,canvas1.height/2-img1.width/2);
    context2.drawImage(img2,canvas2.width/2-img2.width/2,canvas2.height/2-img2.width/2);
    context3.drawImage(img3,canvas3.width/2-img3.width/2,canvas3.height/2-img3.width/2);

  }

  componentWillUnmount() {

  }

  controlsInput = (args) => {
    console.log('controlsInput',args);
    if (args.type === 'select') {
      this.selectRing(args.value);
    } else if (args.type === 'rotate') {
      this.rotateRing(args.value)
    }
  }

  selectRing = (args) => {
    console.log('selecting ring',args);
    let currentRing = this.state.selectedRing;
    if (args === 'next') {
      if ( currentRing === 3 ) {
        this.setState({
          selectedRing: 0,
        })
      } else {
        currentRing = currentRing + 1;
        this.setState({
          selectedRing: currentRing,
        })
      }
    }

    if (args === 'prev') {
      if ( currentRing === 0 ) {
        this.setState({
          selectedRing: 3,
        })
      } else {
        currentRing = currentRing - 1;
        this.setState({
          selectedRing: currentRing,
        })
      }
    }
  }

  rotateRing = (args) => {
    console.log('rotating ring',args);
    if (args === 'right') {
      let newRot = this.state.rot1+30;
      if (newRot === 390 ) {
        newRot = 0;
      }
      this.setState({
        rot1: newRot,
      })
      this.drawRotated(newRot)
    }
    if (args === 'left') {
      let newRot = this.state.rot1-30;
      if (newRot === 0) {
        newRot = 360;
      }
      this.setState({
        rot1: newRot,
      })
      this.drawRotated(newRot)
    }
  }

  drawRotated = (degrees) => {
    console.log('drawing rotated',degrees,this.state.selectedRing)
    //select canvas here w/ state selctedRing
    const canvas = this.['canvasRef'+this.state.selectedRing+''].current;
    const context = canvas.getContext('2d');
    const image = this.refs.image1;

    context.clearRect(0,0,canvas.width,canvas.height);
    context.save();
    context.translate(canvas.width/2,canvas.height/2);
    context.rotate(degrees*Math.PI/180);
    context.drawImage(image,-image.width/2,-image.width/2);
    context.restore();
}


  render() {

    return (

        <div className="KnobBoxTop">

          <div className="canvasBox">
            <div className="canvasBox2">
              <canvas
                width="525"
                height="525"
                ref={this.canvasRef3}
                className="canvas3"
              />
              <canvas
                width="425"
                height="425"
                ref={this.canvasRef2}
                className="canvas2"
              />
              <canvas
                width="325"
                height="325"
                ref={this.canvasRef1}
                className="canvas1"
              />
            </div>


            <div className="controlsBox">
              <img src={ring1} className='mainKnob' ref="image1" alt="logo" />
              <img src={ring2} className='mainKnob' ref="image2" alt="logo" />
              <img src={ring3} className='mainKnob' ref="image3" alt="logo" />
              <Controls
                controlsInput={this.controlsInput}
              />
            </div>

          </div>

        </div>

    )
  }

}

export default Knob4;
