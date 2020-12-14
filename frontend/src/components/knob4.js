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
import ringToggled1 from '../assets/img/ringToggled1.png'
import ringToggled2 from '../assets/img/ringToggled2.png'
import ringToggled3 from '../assets/img/ringToggled3.png'

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
    toggledRing: '',
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
      {value: 'empty', img: '', desc: '......'},
      {value: 'ascendant', img: '', desc: '...ascendant...'},
      {value: 'sun', img: '', desc: '...sun...'},
      {value: 'moon', img: '', desc: '...moon...'},
      {value: 'mercury', img: '', desc: '...mercury...'},
      {value: 'venus', img: '', desc: '...venus...'},
      {value: 'mars', img: '', desc: '...mars...'},
      {value: 'jupiter', img: '', desc: '...jupiter...'},
      {value: 'saturn', img: '', desc: '...saturn...'},
      {value: 'uranus', img: '', desc: '...uranus...'},
      {value: 'neptune', img: '', desc: '...neptune...'},
      {value: 'pluto', img: '', desc: '...pluto...'},
      {value: 'north node', img: '', desc: '...north node...'},
    ],
    signArray: [
      {value: 'empty', img: '', desc: '......'},
      {value: 'aries', img: '', desc: '...aries...'},
      {value: 'taurus', img: '', desc: '...taurus...'},
      {value: 'gemini', img: '', desc: '...gemini...'},
      {value: 'cancer', img: '', desc: '...cancer...'},
      {value: 'leo', img: '', desc: '...leo...'},
      {value: 'virgo', img: '', desc: '...virgo...'},
      {value: 'libra', img: '', desc: '...libra...'},
      {value: 'scorpio', img: '', desc: '...scorpio...'},
      {value: 'sagittarius', img: '', desc: '...sagittarius...'},
      {value: 'capricorn', img: '', desc: '...capricorn...'},
      {value: 'aquarius', img: '', desc: '...aquarius...'},
      {value: 'pisces', img: '', desc: '...pisces...'},
    ],
    houseArray: [
      {value:'empty', img: '', desc: '.......'},
      {value:'1st', img: '', desc: '....1st...'},
      {value:'2nd', img: '', desc: '....2nd...'},
      {value:'3rd', img: '', desc: '....3rd...'},
      {value:'4th', img: '', desc: '....4th...'},
      {value:'5th', img: '', desc: '....5th...'},
      {value:'6th', img: '', desc: '....6th...'},
      {value:'7th', img: '', desc: '....7th...'},
      {value:'8th', img: '', desc: '....8th...'},
      {value:'9th', img: '', desc: '....9th...'},
      {value:'10th', img: '', desc: '....10th...'},
      {value:'11th', img: '', desc: '....11th...'},
      {value:'12th', img: '', desc: '....12th...'},
    ],
    ringClickInfo: {
      ring: '',
      coords: {
        x: '',
        y: '',
      },
      target: '',
      img: '',
      desc: '',
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
      {sign: 'aries', words: ['aries1','aries2','aries3','aries4','aries5','aries6','aries7','aries8','aries9','aries10']},
      {sign: 'taurus', words: ['taur1','taur2','taur3','taur4','taur5','taur6','taur7','taur8','taur9','taur10']},
      {sign: 'gemini', words: ['gem1','gem2','gem3','gem4','gem5','gem6','gem7','gem8','gem9','gem10']},
      {sign: 'cancer', words: ['can1','can2','can3','can4','can5','can6','can7','can8','can9','can10']},
      {sign: 'leo', words: ['leo1','leo2','leo3','leo4','leo5','leo6','leo7','leo8','leo9','leo10']},
      {sign: 'virgo', words: ['vir1','vir2','vir3','vir4','vir5','vir6','vir7','vir8','vir9','vir10']},
      {sign: 'libra', words: ['lib1','lib2','lib3','lib4','lib5','lib6','lib7','lib8','lib9','lib10']},
      {sign: 'scorpio', words: ['scorp1','scorp2','scorp3','scorp4','scorp5','scorp6','scorp7','scorp8','scorp9','scorp10']},
      {sign: 'sagittarius', words: ['sag1','sag2','sag3','sag4','sag5','sag6','sag7','sag8','sag9','sag10']},
      {sign: 'capricorn', words: ['cap1','cap2','cap3','cap4','cap5','cap6','cap7','cap8','cap9','cap10']},
      {sign: 'aquarius', words: ['aqua1','aqua2','aqua3','aqua4','aqua5','aqua6','aqua7','aqua8','aqua9','aqua10']},
      {sign: 'pisces', words: ['pisc1','pisc2','pisc3','pisc4','pisc5','pisc6','pisc7','pisc8','pisc9','pisc10']},
    ],
    houseInterpArray: [
      {house: '1st', words: ['I1','I2','I3','I4','I5','I6','I7','I8','I9','I10']},
      {house: '2nd', words: ['II1','II2','II3','II4','II5','II6','II7','II8','II9','II10']},
      {house: '3rd', words: ['III1','III2','III3','III4','III5','III6','III7','III8','III9','III10']},
      {house: '4th', words: ['IV1','IV2','IV3','IV4','IV5','IV6','IV7','IV8','IV9','IV10']},
      {house: '5th', words: ['V1','V2','V3','V4','V5','V6','V7','V8','V9','V10']},
      {house: '6th', words: ['VI1','VI2','VI3','VI4','VI5','VI6','VI7','VI8','VI9','VI10']},
      {house: '7th', words: ['VII1','VII2','VII3','VII4','VII5','VII6','VII7','VII8','VII9','VII10']},
      {house: '8th', words: ['VIII1','VIII2','VIII3','VIII4','VIII5','VIII6','VIII7','VIII8','VIII9','VIII10']},
      {house: '9th', words: ['IX1','IX2','IX3','IX4','IX5','IX6','IX7','IX8','IX9','IX10']},
      {house: '10th', words: ['X1','X2','X3','X4','X5','X6','X7','X8','X9','X10']},
      {house: '11th', words: ['XI1','XI2','XI3','XI4','XI5','XI6','XI7','XI8','XI9','XI10']},
      {house: '12th', words: ['XII1','XII2','XII3','XII4','XII5','XII6','XII7','XII8','XII9','XII10']},
    ],
    planetCoordArray: [
      {coords: {x: 169,y: 38.5}, position: 12},
      {coords: {x: 102,y: 56.5}, position: 1},
      {coords: {x: 55,y: 106.5}, position: 2},
      {coords: {x: 39,y: 169.5}, position: 3},
      {coords: {x: 58,y: 230.5}, position: 4},
      {coords: {x: 105,y: 276.5}, position: 5},
      {coords: {x: 169,y: 290.5}, position: 6},
      {coords: {x: 231,y: 275.5}, position: 7},
      {coords: {x: 276,y: 229.5}, position: 8},
      {coords: {x: 296,y: 168.5}, position: 9},
      {coords: {x: 282,y: 107.5}, position: 10},
      {coords: {x: 273,y: 60.5}, position: 11},
    ],
    signCoordArray: [
      {coords: {x: 153,y: 87.5}, position: 1},
      {coords: {x: 77,y: 169.5}, position: 2},
      {coords: {x: 50,y: 270.5}, position: 3},
      {coords: {x: 84,y: 377.5}, position: 4},
      {coords: {x: 155,y: 445.5}, position: 5},
      {coords: {x: 261,y: 469.5}, position: 6},
      {coords: {x: 364,y: 442.5}, position: 7},
      {coords: {x: 443,y: 372.5}, position: 8},
      {coords: {x: 467,y: 278.5}, position: 9},
      {coords: {x: 446,y: 167.5}, position: 10},
      {coords: {x: 371,y: 85.5}, position: 11},
      {coords: {x: 263,y: 54.5}, position: 12},
    ],
    houseCoordArray: [
      {coords: {x: 221.5,y: 126}, position: 1},
      {coords: {x: 116.5,y: 240}, position: 2},
      {coords: {x: 76.5,y: 385}, position: 3},
      {coords: {x: 135.5,y: 537}, position: 4},
      {coords: {x: 235.5,y: 634}, position: 5},
      {coords: {x: 374.5,y: 663}, position: 6},
      {coords: {x: 514.5,y: 635}, position: 7},
      {coords: {x: 626.5,y: 535}, position: 8},
      {coords: {x: 668.5,y: 385}, position: 9},
      {coords: {x: 635.5,y: 239}, position: 10},
      {coords: {x: 528.5,y: 123}, position: 11},
      {coords: {x: 376.5,y: 81}, position: 12},
    ],

  }
  // added combined arrays eg [{sign: 'x',planet:'y',phrases:['xyx']}] ???



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
    this.interpretation = {
      planet: {state: false, interp: ''},
      sign: {state: false, interp: ''},
      house: {state: false, interp: ''},
    };
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
      img: '',
      desc: '',
    };
    this.activeRings = [1,2,3];
  }

  componentDidUpdate() {

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
      console.log('canvas click1');
      // console.log('planet click',e);
        let mousePos = this.getMousePos(canvas1, e);
        // console.log('planet ring',mousePos.x + ',' + mousePos.y);
        let clickInfo = {
          ring: 'planet',
          ringNo: 1,
          coords: {
            x: mousePos.x,
            y: mousePos.y,
          },
          target: '',
          img: '',
          desc: '',
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
      console.log('canvas click2');
      // console.log('sign click',e);
        let mousePos = this.getMousePos(canvas2, e);
        // console.log('sign ring',mousePos.x + ',' + mousePos.y);
        let clickInfo = {
          ring: 'sign',
          ringNo: 2,
          coords: {
            x: mousePos.x,
            y: mousePos.y,
          },
          target: '',
          img: '',
          desc: '',
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
      console.log('canvas click3');
      // console.log('house click',e);
        let mousePos = this.getMousePos(canvas3, e);
        // console.log('house ring',mousePos.x + ',' + mousePos.y);
        let clickInfo = {
          ring: 'house',
          ringNo: 3,
          coords: {
            x: mousePos.x,
            y: mousePos.y,
          },
          target: '',
          img: '',
          desc: '',
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

    if (args.ring === 'house') {
      let x = args.coords.x;
      let y = args.coords.y;
      let rad = 30;

      for (const elem of this.state.[args.ring+'CoordArray']) {
        if (this.circlePointCheck(x, y, elem.coords.x, elem.coords.y, rad) === true) {
          let index;
          let rotPos = this.["rot"+args.ringNo+'']/30;
          let steps;
          let stepDir;
          if (elem.position >= 6) {
            steps = 12 - elem.position;
            stepDir = '>';
            index = rotPos-steps;

            if (index < 1) {
              index = index + 12;
            }
          }
          if (elem.position < 6) {
            steps = elem.position;
            stepDir = '<';
            index = rotPos+steps;

            if (index > 12) {
              index = index - 12;
            }
          }
          args.target = this.state.[args.ring+'Array'][index].value;
          args.desc = this.state.[args.ring+'Array'][index].desc;
          args.img = this.state.[args.ring+'Array'][index].img;

        }
      }

    }
    if (args.ring === 'sign') {
      let x = args.coords.x;
      let y = args.coords.y;
      let rad = 25;

      for (const elem of this.state.[args.ring+'CoordArray']) {
        if (this.circlePointCheck(x, y, elem.coords.x, elem.coords.y, rad) === true) {
          let index;
          let rotPos = this.["rot"+args.ringNo+'']/30;
          let steps;
          let stepDir;
          if (elem.position >= 6) {
            steps = 12 - elem.position;
            stepDir = '>';
            index = rotPos-steps;

            if (index < 1) {
              index = index + 12;
            }
          }
          if (elem.position < 6) {
            steps = elem.position;
            stepDir = '<';
            index = rotPos+steps;

            if (index > 12) {
              index = index - 12;
            }
          }
          args.target = this.state.[args.ring+'Array'][index].value;
          args.desc = this.state.[args.ring+'Array'][index].desc;
          args.img = this.state.[args.ring+'Array'][index].img;

        }
      }

    }
    if (args.ring === 'planet') {
      let x = args.coords.x;
      let y = args.coords.y;
      let rad = 20;

      for (const elem of this.state.[args.ring+'CoordArray']) {
        if (this.circlePointCheck(x, y, elem.coords.x, elem.coords.y, rad) === true) {
          let index;
          let rotPos = this.["rot"+args.ringNo+'']/30;
          let steps;
          let stepDir;
          if (elem.position >= 6) {
            steps = 12 - elem.position;
            stepDir = '>';
            index = rotPos-steps;

            if (index < 1) {
              index = index + 12;
            }
          }
          if (elem.position < 6) {
            steps = elem.position;
            stepDir = '<';
            index = rotPos+steps;

            if (index > 12) {
              index = index - 12;
            }
          }
          args.target = this.state.[args.ring+'Array'][index].value;
          args.desc = this.state.[args.ring+'Array'][index].desc;
          args.img = this.state.[args.ring+'Array'][index].img;

        }
      }

    }

    this.setState({
      clickInfoState: true,
      ringClickInfo: args,
    })


    // this.[this.state.selectedRingName]

    // let rect = {x:x1 ,y:y1 ,width: 80,height:50}
    // console.log('rectBound',x>rect.x && x<rect.x+rect.width && y>rect.y && y<rect.y+rect.height);
    // console.log('circBound',this.circlePointCheck(x, y, x3, y3, rad));
  }
  circlePointCheck = (x, y, x3, y3, rad) => {
    let dist_points = (x - x3) * (x - x3) + (y - y3) * (y - y3);
    rad *= rad;
    if (dist_points < rad) {
        return true;
    }
    return false;
  }
  closeClickInfo = () => {
    this.clickInfoState = false
    // this.setState({
    //   clickInfoState: false
    // })
  }

  componentWillUnmount() {

  }

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
    console.log('selecting ring 2');
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
    // console.log('1a',this.selectedRing);
    // console.log('2a',this.state.selectedRing);

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

    // console.log('1b',this.selectedRing);
    // console.log('2b',this.state.selectedRing);
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
    // console.log('1c',this.selectedRing);
    // console.log('2c',this.state.selectedRing);

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
      // console.log(elem,inc);

      switch(elem) {
         case 1: {
           // console.log('planet @',this.state.planetArray[inc].value);
            this.planet = this.state.planetArray[inc].value;

            break;
         }
         case 2: {
           // console.log('sign @',this.state.signArray[inc].value);
            this.sign = this.state.signArray[inc].value;

            break;
         }
         case 3: {
           // console.log('house @',this.state.houseArray[inc].value);
            this.house = this.state.houseArray[inc].value;

            break;
         }
         default: {
            break;
         }
      }

    }

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

    // console.log('generate interpretation for ',toInterpret);

    this.generateInterpetation(toInterpret)

  }

  generateInterpetation = (toInterpret) => {

    // check toInterpret for exaltation, detriment and domicile

    let interpretation = [
      {key: 'planet', val: '', values: []},
      {key: 'sign', val: '', values: []},
      {key: 'house', val: '', values: []},
    ]

    let thisInterpretation = {
      planet: {state: false, interp: ''},
      sign: {state: false, interp: ''},
      house: {state: false, interp: ''},
    };

    for (const elem of toInterpret) {
      if (elem.type === 'planet') {

        let preDictionary = this.state.[elem.type+'InterpArray'];
        for (const item of preDictionary) {
          if (item.planet === elem.value) {
            let dictionary = item.words;
            dictionary = dictionary.sort(() => Math.random() - 0.5);
            let selection = dictionary.slice(0,4);

            for (const interpElem of interpretation) {
              if (interpElem.key === 'planet') {
                interpElem.val = item.planet;
                interpElem.values.push(selection);
              }
            }
          }
        }
        thisInterpretation.planet.state = true;
      }
      if (elem.type === 'sign') {

        let preDictionary = this.state.[elem.type+'InterpArray'];

        for (const item of preDictionary) {
          if (item.sign === elem.value) {
            let dictionary = item.words;
            dictionary = dictionary.sort(() => Math.random() - 0.5);
            let selection = dictionary.slice(0,4);

            for (const interpElem of interpretation) {
              if (interpElem.key === 'sign') {
                interpElem.val = item.sign;
                interpElem.values.push(selection);
              }
            }
          }
        }
        thisInterpretation.sign.state = true;
      }
      if (elem.type === 'house') {

        let preDictionary = this.state.[elem.type+'InterpArray'];

        for (const item of preDictionary) {
          if (item.house === elem.value) {
            let dictionary = item.words;
            dictionary = dictionary.sort(() => Math.random() - 0.5);
            let selection = dictionary.slice(0,4);

            for (const interpElem of interpretation) {
              if (interpElem.key === 'house') {
                interpElem.val = item.house;
                interpElem.values.push(selection);
              }
            }
          }
        }
        thisInterpretation.house.state = true;
      }

    }

    console.log('...finalInterpretation...',interpretation);
    if (thisInterpretation.planet.state === true ) {
      thisInterpretation.planet.interp = `Your ${interpretation[0].val}: which represents ${interpretation[0].values[0][0]}, ${interpretation[0].values[0][1]}, ${interpretation[0].values[0][3]}...`
    }
    if (thisInterpretation.sign.state === true ) {
      thisInterpretation.sign.interp = `Being in ${interpretation[1].val}: has the qualities of ${interpretation[1].values[0][0]}, ${interpretation[1].values[0][1]}, ${interpretation[1].values[0][3]}...`
    }
    if (thisInterpretation.house.state === true ) {
      thisInterpretation.house.interp = `particularly in these areas of life ${interpretation[2].values[0][0]}, ${interpretation[2].values[0][1]}, ${interpretation[2].values[0][3]}...`
    }
    this.interpretation = thisInterpretation;
    // console.log('froome',this.interpretation);

    // this.interpretation =`
    //   Your ${interpretation[0].val}: which represents ${interpretation[0].values[0][0]}, ${interpretation[0].values[0][1]}, ${interpretation[0].values[0][3]}... \n
    //
    //   Being in ${interpretation[1].val}: has the qualities of ${interpretation[1].values[0][0]}, ${interpretation[1].values[0][1]}, ${interpretation[1].values[0][3]}...
    //
    //   particularly in these areas of life ${interpretation[2].values[0][0]}, ${interpretation[2].values[0][1]}, ${interpretation[2].values[0][3]}...
    // `;


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

  let toToggle = this.selectedRing;
  let index = this.activeRings.indexOf(toToggle)

  if (this.activeRings.includes(toToggle) === true) {
    this.activeRings.splice(index,1)
    this.toggleDraw(toToggle,'remove')
  } else {
    this.activeRings.push(toToggle);
    this.toggleDraw(toToggle,'add')
  }

  this.setState({
    toggledRing: toToggle
  })


  this.checkStats();
}

  toggleDraw = (toToggle,action) => {

  const canvas = this.['canvasRef'+toToggle+''].current;
  const context = canvas.getContext('2d');

  if (action == 'remove') {
    const img = this.refs.['imageTogggled'+toToggle+''];
    context.drawImage(img,canvas.width/2-img.width/2,canvas.height/2-img.width/2);
  }
  if (action == 'add') {
    const img = this.refs.['image'+toToggle+''];
    context.drawImage(img,canvas.width/2-img.width/2,canvas.height/2-img.width/2);
  }

}


  render() {

    return (


        <div className="KnobBoxTop">

          <RingInfo
            planet={this.planet}
            sign={this.sign}
            house={this.house}
            interpretation={this.interpretation}
            activeRings={this.activeRings}
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
              <img src={ringToggled1} className='mainKnob' ref="imageTogggled1" alt="logo" />
              <img src={ringToggled2} className="mainKnob" ref="imageTogggled2" alt="logo" />
              <img src={ringToggled3} className="mainKnob" ref="imageTogggled3" alt="logo" />

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
