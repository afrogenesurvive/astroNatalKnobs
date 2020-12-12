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
import RingInfo from './ringInfo'
import RingInfoClick from './ringInfo2'


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
    ringClickInfo: {
      ring: '',
      coords: {
        x: '',
        y: '',
      },
      target: '',
    },
    clickInfoState: false,
    planetInterpArray: [
      {planet: 'ascendant', words: ['asc1','asc2','asc3','asc4','asc5','asc6','asc7','asc8','asc9','asc10'] },
      {planet: 'sun', words: ['sun1','sun2','sun3','sun4','sun5','sun6','sun7','sun8','sun9','sun10'] },
      {planet: 'moon', words: ['moon1','moon2','moon3','moon4','moon5','moon6','moon7','moon8','moon9','moon10'] },
      {planet: 'mercury', words: ['merc1','merc2','merc3','merc4','merc5','merc6','merc7','merc8','merc9','merc10'] },
      {planet: 'venus', words: ['ven1','ven2','ven3','ven4','ven5','ven6','ven7','ven8','ven9','ven10'] },
      {planet: 'mars', words: ['mars1','mars2','mars3','mars4','mars5','mars6','mars7','mars8','mars9','mars10'] },
      {planet: 'jupiter', words: ['jup1','jup2','jup3','jup4','jup5','jup6','jup7','jup8','jup9','jup10'] },
      {planet: 'saturn', words: ['sat1','sat2','sat3','sat4','sat5','sat6','sat7','sat8','sat9','sat10'] },
      {planet: 'uranus', words: ['ura1','ura2','ura3','ura4','ura5','ura6','ura7','ura8','ura9','ura10'] },
      {planet: 'neptune', words: ['nep1','nep2','nep3','nep4','nep5','nep6','nep7','nep8','nep9','nep10'] },
      {planet: 'pluto', words: ['plu1','plu2','plu3','plu4','plu5','plu6','plu7','plu8','plu9','plu10'] },
      {planet: 'north node', words: ['nn1','nn2','nn3','nn4','nn5','nn6','nn7','nn8','nn9','nn10'] },
    ],
    signInterpArray: [
      {sign: 'aries', words: ['']},
      {sign: 'taurus', words: ['']},
      {sign: 'gemini', words: ['']},
      {sign: 'cancer', words: ['']},
      {sign: 'leo', words: ['']},
      {sign: 'virgo', words: ['']},
      {sign: 'libra', words: ['']},
      {sign: 'scorpio', words: ['']},
      {sign: 'sagittarius', words: ['']},
      {sign: 'capricorn', words: ['']},
      {sign: 'aquarius', words: ['']},
      {sign: 'pisces', words: ['']},
    ],
    houseInterpArray: [
      {house: '1st', words: ['']},
      {house: '2nd', words: ['']},
      {house: '3rd', words: ['']},
      {house: '4th', words: ['']},
      {house: '5th', words: ['']},
      {house: '6th', words: ['']},
      {house: '7th', words: ['']},
      {house: '8th', words: ['']},
      {house: '9th', words: ['']},
      {house: '10th', words: ['']},
      {house: '11th', words: ['']},
      {house: '12th', words: ['']},
    ],
  }

  constructor(props) {
    super(props);
    this.rot = this.state.rot;
    this.canvasRef1 = React.createRef();
    this.canvasRef2 = React.createRef();
    this.canvasRef3 = React.createRef();
    this.selectedRing = 1;
    this.planet = 'north nodex';
    this.sign = 'pisces';
    this.house = '12th';
    this.rot1 = 360;
    this.rot2 = 360;
    this.rot3 = 360;
    this.clickInfoState = false;
    this.ringClickInfo = {
      ring: '',
      coords: {
        x: '',
        y: '',
      },
      target: '',
    };
    this.activeRings = [1,2,3];
  }

  componentDidUpdate() {

    // this.checkStats();
  }

  componentDidMount() {

    document.addEventListener("keypress", e => {
      console.log('gotcha',e.key);
      // this.canvasListeners();
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

    this.checkStats();
    this.canvasListeners()

  }

  canvasListeners = () => {
    let canvas1 = this.canvasRef1.current;
    let canvas2 = this.canvasRef2.current;
    let canvas3 = this.canvasRef3.current;

    canvas1.addEventListener("click", e => {
      // console.log('planet click',e);
        let mousePos = this.getMousePos(canvas1, e);
        console.log('planet ring',mousePos.x + ',' + mousePos.y);
        let clickInfo = {
          ring: 'planet',
          coords: {
            x: mousePos.x,
            y: mousePos.y,
          },
          target: '',
        }
        // this.setState({
        //   clickInfoState: true,
        //   ringClickInfo: clickInfo,
        // })
        this.setClickInfo(clickInfo);
        // this.clickInfoState = true;
        // this.ringClickInfo = clickInfo;
    });
    canvas2.addEventListener("click", e => {
      // console.log('sign click',e);
        let mousePos = this.getMousePos(canvas2, e);
        console.log('sign ring',mousePos.x + ',' + mousePos.y);
        let clickInfo = {
          ring: 'sign',
          coords: {
            x: mousePos.x,
            y: mousePos.y,
          },
          target: '',
        }
        // this.setState({
        //   clickInfoState: true,
        //   ringClickInfo: clickInfo,
        // })
        this.setClickInfo(clickInfo);
        // this.clickInfoState = true;
        // this.ringClickInfo = clickInfo;
    });
    canvas3.addEventListener("click", e => {
      // console.log('house click',e);
        let mousePos = this.getMousePos(canvas3, e);
        console.log('house ring',mousePos.x + ',' + mousePos.y);
        let clickInfo = {
          ring: 'house',
          coords: {
            x: mousePos.x,
            y: mousePos.y,
          },
          target: '',
        }
        // this.setState({
        //   clickInfoState: true,
        //   ringClickInfo: clickInfo,
        // })
        this.setClickInfo(clickInfo);
        // this.clickInfoState = true;
        // this.ringClickInfo = clickInfo;
    });


  }

  setClickInfo = (args) => {
    console.log('setting click info');
    this.setState({
      clickInfoState: true,
      ringClickInfo: args,
    })
  }
  closeClickInfo = () => {
    this.clickInfoState = false
    // this.setState({
    //   clickInfoState: false
    // })
  }

  componentWillUnmount() {

  }
  // canvas.addEventListener("click", function (evt) {
  //     var mousePos = this.getMousePos(canvas, evt);
  //     alert(mousePos.x + ',' + mousePos.y);
  // }, false);

  getMousePos = (canvas, evt) => {
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

  controlsInput = (args) => {
    console.log('controlsInput');
    if (args.type === 'select') {
      this.selectRing(args.value);
    } else if (args.type === 'rotate') {
      this.rotateRing(args.value)
    } else if (args.type === 'select2') {
      this.selectRing2(args.value)
    }
  }

  selectRing2 = (args) => {
    console.log('selecting ring 2',args);
    this.selectedRing = args
    this.setState({
      selectedRing: args
    })

    this.resetHighlights();
    this.ringNameUpdate()
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
        this.rot1 = newRot;
        this.setState({
          rot1: newRot,
        })
      }
      if (this.state.selectedRing === 2) {
        newRot = this.state.rot2+30;
        if (newRot === 390 ) {
          newRot = 30;
        }
        this.rot2 = newRot;
        this.setState({
          rot2: newRot,
        })
      }
      if (this.state.selectedRing === 3) {
        newRot = this.state.rot3+30;
        if (newRot === 390 ) {
          newRot = 30;
        }
        this.rot3 = newRot;
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
        this.rot1 = newRot;
        this.setState({
          rot1: newRot,
        })
      }
      if (this.state.selectedRing === 2) {
        newRot = this.state.rot2-30;
        if (newRot <= 0) {
          newRot = 360;
        }
        this.rot2 = newRot;
        this.setState({
          rot2: newRot,
        })
      }
      if (this.state.selectedRing === 3) {
        newRot = this.state.rot3-30;
        if (newRot <= 0) {
          newRot = 360;
        }
        this.rot3 = newRot;
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

      let inc = this.['rot'+ elem]/30;
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

    // **** CLEAR Interpretation w/ every check status ****

    let toInterpret = [];
    for (const elem of this.activeRings) {
      if (elem === 1) {
        toInterpret.push({type:'planet',value:this.planet})
      }
      if (elem === 2) {
        toInterpret.push({type:'sign',value:this.sign})
      }
      if (elem === 3) {
        toInterpret.push({type:'house',value:this.house})
      }
    }

    console.log('generate interpretation for ',toInterpret);
    // check toInterpret for exaltation, detriment and domicile

    let interpretation = [
      {key: 'planet', values: []},
      {key: 'sign', values: []},
      {key: 'house', values: []},
    ]

    for (const elem of toInterpret) {
      if (elem.type === 'planet') {

        let preDictionary = this.state.[elem.type+'InterpArray'];
        for (const item of preDictionary) {
          if (item.planet === elem.value) {
            console.log('beep',item.words);
          }
        }

        // dictionary = dictionary.sort(() => Math.random() - 0.5);
        // let selection = dictionary.slice(0,5);
        //
        // for (const elem of interpretation) {
        //   if (elem.key === 'planet') {
        //     elem.values.push(selection)
        //   }
        // }

      }
      if (elem.type === 'sign') {

        let preDictionary = this.state.[elem.type+'InterpArray'];
        // let dictionary = this.state.[elem+'InterpArray'];
        // dictionary = dictionary.sort(() => Math.random() - 0.5);
        // let selection = dictionary.slice(0,5);
        //
        // for (const elem of interpretation) {
        //   if (elem.key === 'sign') {
        //     elem.values.push(selection)
        //   }
        // }

      }
      if (elem.type === 'house') {

        let preDictionary = this.state.[elem.type+'InterpArray'];
        // let dictionary = this.state.[elem+'InterpArray'];
        // dictionary = dictionary.sort(() => Math.random() - 0.5);
        // let selection = dictionary.slice(0,5);
        //
        // for (const elem of interpretation) {
        //   if (elem.key === 'house') {
        //     elem.values.push(selection)
        //   }
        // }

      }
    }
    console.log('...finalInterpretation...',interpretation);


  }

  drawRotated = (degrees) => {
    // console.log('draw',this.state.selectedRing,'draw',degrees);
    // console.log('drawing rotated',degrees,this.state.selectedRing)

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

toggleRing = () => {
  console.log('toggling ring');
  // console.log(this.state.selectedRing,this.selectedRing);
  let toToggle = this.selectedRing;
  let index = this.activeRings.indexOf(toToggle)
  // console.log('fluff',this.activeRings,this.activeRings.includes(toToggle),index)
  if (this.activeRings.includes(toToggle) === true) {
    this.activeRings.splice(index,1)
  } else {
    this.activeRings.push(toToggle);
  }
  // console.log('gruff',this.activeRings);
  this.checkStats();
}


  render() {

    return (


        <div className="KnobBoxTop">

          <RingInfo
            planet={this.planet}
            sign={this.sign}
            house={this.house}
            selectedRingName={this.state.selectedRingName}
          />


          <RingInfoClick
            data={this.state.ringClickInfo}
            closeClickInfo={this.closeClickInfo}
            state={this.clickInfoState}
          />

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
                ringToggle={this.toggleRing}
              />
            </div>

          </div>

        </div>

    )
  }

}

export default Knob4;
