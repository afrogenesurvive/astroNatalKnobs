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
    selectedRingName: 'planet',
    rot1: 360,
    rot2: 360,
    rot3: 360,
    currentRot: null,
    canvasClass1: 'canvas1',
    canvasClass2: 'canvas2',
    canvasClass3: 'canvas3',
    planet: null,
    sign: null,
    house: null,
    planetArray: [
      'empty',
      'ascendant',
      'sun',
      'moon',
      'mercury',
      'venus',
      'mars',
      'jupiter',
      'saturn',
      'uranus',
      'neptune',
      'pluto',
      'north node',
    ],
    signArray: [
      'empty',
      'aries',
      'taurus',
      'gemini',
      'cancer',
      'leo',
      'virgo',
      'libra',
      'scorpio',
      'sagittarius',
      'capricorn',
      'aquarius',
      'pisces',
    ],
    houseArray: [
      'empty',
      '1st',
      '2nd',
      '3rd',
      '4th',
      '5th',
      '6th',
      '7th',
      '8th',
      '9th',
      '10th',
      '11th',
      '12th',
    ],
  }

  constructor(props) {
    super(props);
    this.rot = this.state.rot;
    this.canvasRef1 = React.createRef();
    this.canvasRef2 = React.createRef();
    this.canvasRef3 = React.createRef();
    this.selectedRing = 1;
    this.planet = 'north node';
    this.sign = 'pisces';
    this.house = '12th';
  }

  componentDidUpdate() {

    // this.checkStats();
  }

  componentDidMount() {

    document.addEventListener("keypress", e => {
      console.log('gotcha',e.key);
    });

    this.setState({
      currentRot: 0,
    })

    this.resetHighlights();

    const canvas1 = this.canvasRef1.current;
    const canvas2 = this.canvasRef2.current;
    const canvas3 = this.canvasRef3.current;
    const context1 = canvas1.getContext('2d');
    const context2 = canvas2.getContext('2d');
    const context3 = canvas3.getContext('2d');
    const img1 = this.refs.image1;
    const img2 = this.refs.image2;
    const img3 = this.refs.image3;

    img3.onload=function(){
      context1.drawImage(img1,canvas1.width/2-img1.width/2,canvas1.height/2-img1.width/2);
      context2.drawImage(img2,canvas2.width/2-img2.width/2,canvas2.height/2-img2.width/2);
      context3.drawImage(img3,canvas3.width/2-img3.width/2,canvas3.height/2-img3.width/2);
    }


  }

  componentWillUnmount() {

  }

  controlsInput = (args) => {
    console.log('controlsInput');
    if (args.type === 'select') {
      this.selectRing(args.value);
    } else if (args.type === 'rotate') {
      this.rotateRing(args.value)
    }
  }

  selectRing = (args) => {
    let currentRing = this.state.selectedRing;
    console.log('selecting ring');
    console.log('1a',this.selectedRing);
    console.log('2a',this.state.selectedRing);

    if (args === 'next') {
      if ( currentRing === 3 ) {
        currentRing = 1;
        this.selectedRing = currentRing;
        this.setState({
          selectedRing: currentRing,
        })
      } else {
        currentRing = currentRing + 1;
        this.selectedRing = currentRing;
        this.setState({
          selectedRing: currentRing,
        })
      }

    }

    if (args === 'prev') {
      if ( currentRing === 1 ) {
        currentRing = 3;
        this.selectedRing = currentRing;
        this.setState({
          selectedRing: currentRing,
        })
      } else {
        currentRing = currentRing - 1;
        this.selectedRing = currentRing;
        this.setState({
          selectedRing: currentRing,
        })
      }

    }

    console.log('1b',this.selectedRing);
    console.log('2b',this.state.selectedRing);
    this.resetHighlights();

    this.ringNameUpdate()

  }

  ringNameUpdate = () => {
    switch(this.selectedRing) {
       case 1: {
          this.setState({
            selectedRingName: 'planet',
          })
          break;
       }
       case 2: {
          this.setState({
            selectedRingName: 'sign',
          })
          break;
       }
       case 3: {
          this.setState({
            selectedRingName: 'house',
          })
          break;
       }
       default: {
          break;
       }
    }

  }

  resetHighlights = () => {
    console.log('1c',this.selectedRing);
    console.log('2c',this.state.selectedRing);

    if (this.selectedRing === 1) {
      this.setState({
        canvasClass1: 'canvas1 borderedRing',
        canvasClass2: 'canvas2',
        canvasClass3: 'canvas3',
      })
    }
    if (this.selectedRing === 2) {
      this.setState({
        canvasClass2: 'canvas2 borderedRing',
        canvasClass1: 'canvas1',
        canvasClass3: 'canvas3',
      })
    }
    if (this.selectedRing === 3) {
      this.setState({
        canvasClass3: 'canvas3 borderedRing',
        canvasClass2: 'canvas2',
        canvasClass1: 'canvas1',
      })
    }

  }


  rotateRing = (args) => {
    console.log('rotating ring');

    if (args === 'right') {
      let newRot;
      if (this.state.selectedRing === 1) {
        newRot = this.state.rot1+30;
        if (newRot === 390 ) {
          newRot = 30;
        }
        this.setState({
          rot1: newRot,
        })
      }
      if (this.state.selectedRing === 2) {
        newRot = this.state.rot2+30;
        if (newRot === 390 ) {
          newRot = 30;
        }
        this.setState({
          rot2: newRot,
        })
      }
      if (this.state.selectedRing === 3) {
        newRot = this.state.rot3+30;
        if (newRot === 390 ) {
          newRot = 30;
        }
        this.setState({
          rot3: newRot,
        })
      }
      this.drawRotated(newRot)
    }

    if (args === 'left') {
      let newRot;
      if (this.state.selectedRing === 1) {
        newRot = this.state.rot1-30;
        if (newRot <= 0) {
          newRot = 360;
        }
        this.setState({
          rot1: newRot,
        })
      }
      if (this.state.selectedRing === 2) {
        newRot = this.state.rot2-30;
        if (newRot <= 0) {
          newRot = 360;
        }
        this.setState({
          rot2: newRot,
        })
      }
      if (this.state.selectedRing === 3) {
        newRot = this.state.rot3-30;
        if (newRot <= 0) {
          newRot = 360;
        }
        this.setState({
          rot3: newRot,
        })
      }
      this.drawRotated(newRot)
    }

    // this.checkStats();
  }

  checkStats = () => {
    console.log('checking stats');

    const rings = [1,2,3];
    for (const elem of rings) {

      let inc = this.state.['rot'+ elem]/30;
      console.log(elem,inc);

      switch(elem) {
         case 1: {
           console.log('planet @',this.state.planetArray[inc]);
            this.planet = this.state.planetArray[inc];
            // this.setState({
            //   planet: this.state.planetArray[inc],
            // })
            break;
         }
         case 2: {
           console.log('sign @',this.state.signArray[inc]);
            this.sign = this.state.signArray[inc];
            // this.setState({
            //   sign: this.state.signArray[inc],
            // })
            break;
         }
         case 3: {
           console.log('house @',this.state.houseArray[inc]);
            this.house = this.state.houseArray[inc];
            // this.setState({
            //   house: this.state.houseArray[inc],
            // })
            break;
         }
         default: {
            break;
         }
      }

    }

  }

  drawRotated = (degrees) => {
    // console.log('draw',this.state.selectedRing,'draw',degrees);
    // console.log('drawing rotated',degrees,this.state.selectedRing)
    //select canvas here w/ state selctedRing
    const canvas = this.['canvasRef'+this.state.selectedRing+''].current;
    const context = canvas.getContext('2d');
    const image = this.refs.['image'+this.state.selectedRing];

    context.clearRect(0,0,canvas.width,canvas.height);
    context.save();
    context.translate(canvas.width/2,canvas.height/2);
    context.rotate(degrees*Math.PI/180);
    context.drawImage(image,-image.width/2,-image.width/2);
    context.restore();

    this.checkStats();
}


  render() {

    return (


        <div className="KnobBoxTop">

        <div className="ringInfoDisplay">
          <ul className="ringInfoList">
            <li>
              <p className="ringInfoText">Selected Ring: <span className="ringInfoSpan">{this.state.selectedRingName}</span> </p>
            </li>

            {
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
              <p className="ringInfoText">Planet: <span className="ringInfoSpan">{this.planet}</span> </p>
            </li>
            <li>
              <p className="ringInfoText">Sign: <span className="ringInfoSpan">{this.sign}</span> </p>
            </li>
            <li>
              <p className="ringInfoText">House: <span className="ringInfoSpan">{this.house}</span> </p>
            </li>
            <li>
              <p className="ringInfoText">Interpretation: </p>
            </li>
            <li>
              <p className="ringInfoText">...</p>
            </li>
          </ul>

        </div>

          <div className="canvasBox">
            <div className="pointerBox">

              <FontAwesomeIcon icon={faCaretDown} className="pointerIcon" size="5x"/>
            </div>

            <div className="canvasBox2">
              <canvas
                width="750"
                height="750"
                ref={this.canvasRef3}
                className={this.state.canvasClass3}
              />
              <canvas
                width="525"
                height="525"
                ref={this.canvasRef2}
                className={this.state.canvasClass2}
              />
              <canvas
                width="325"
                height="325"
                ref={this.canvasRef1}
                className={this.state.canvasClass1}
              />
            </div>


            <div className="controlsBox">
              <img src={ring1} className='mainKnob' ref="image1" alt="logo" />
              <img src={ring2} className="mainKnob" ref="image2" alt="logo" />
              <img src={ring3} className="mainKnob" ref="image3" alt="logo" />
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
