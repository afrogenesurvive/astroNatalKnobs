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
import ring1 from '../assets/img/ring1.png';
import ring2 from '../assets/img/ring2.png';
import ring3 from '../assets/img/ring3.png';
import ringToggled1 from '../assets/img/ringToggled1.png';
import ringToggled2 from '../assets/img/ringToggled2.png';
import ringToggled3 from '../assets/img/ringToggled3.png';

import ringMobile1 from '../assets/img/ringMobile1.png';
import ringMobile2 from '../assets/img/ringMobile2.png';
import ringMobile3 from '../assets/img/ringMobile3.png';
import ringToggledMobile1 from '../assets/img/ringToggledMobile1.png';
import ringToggledMobile2 from '../assets/img/ringToggledMobile2.png';
import ringToggledMobile3 from '../assets/img/ringToggledMobile3.png';

import firstHouseImg from '../assets/img/infoImages/1stHouse.png';
import secondHouseImg from '../assets/img/infoImages/2ndHouse.png';
import thirdHouseImg from '../assets/img/infoImages/3rdHouse.png';
import fourthHouseImg from '../assets/img/infoImages/4thHouse.png';
import fifthHouseImg from '../assets/img/infoImages/5thHouse.png';
import sixthHouseImg from '../assets/img/infoImages/6thHouse.png';
import seventhHouseImg from '../assets/img/infoImages/7thHouse.png';
import eigthHouseImg from '../assets/img/infoImages/8thHouse.png';
import ninthHouseImg from '../assets/img/infoImages/9thHouse.png';
import tenthHouseImg from '../assets/img/infoImages/10thHouse.png';
import eleventhHouseImg from '../assets/img/infoImages/11thHouse.png';
import twelfthHouseImg from '../assets/img/infoImages/12thHouse.png';
import aquariusImg from '../assets/img/infoImages/aquarius.png';
import ariesImg from '../assets/img/infoImages/aries.png';
import taurusImg from '../assets/img/infoImages/taurus.png';
import geminiImg from '../assets/img/infoImages/gemini.png';
import cancerImg from '../assets/img/infoImages/cancer.png';
import leoImg from '../assets/img/infoImages/leo.png';
import virgoImg from '../assets/img/infoImages/virgo.png';
import libraImg from '../assets/img/infoImages/libra.png';
import scorpioImg from '../assets/img/infoImages/scorpio.png';
import sagittariusImg from '../assets/img/infoImages/sagittarius.png';
import capricornImg from '../assets/img/infoImages/capricorn.png';
import piscesImg from '../assets/img/infoImages/pisces.png';
import ascendantImg from '../assets/img/infoImages/ascendant.png';
import sunImg from '../assets/img/infoImages/sun.png';
import moonImg from '../assets/img/infoImages/moon.png';
import mercuryImg from '../assets/img/infoImages/mercury.png';
import venusImg from '../assets/img/infoImages/venus.png';
import marsImg from '../assets/img/infoImages/mars.png';
import jupiterImg from '../assets/img/infoImages/jupiter.png';
import saturnImg from '../assets/img/infoImages/saturn.png';
import uranusImg from '../assets/img/infoImages/uranus.png';
import neptuneImg from '../assets/img/infoImages/neptune.png';
import plutoImg from '../assets/img/infoImages/pluto.png';
import northNodeImg from '../assets/img/infoImages/northNode.png';

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
    mobile: false,
    ringSizes: [0,300,450,645],
    ring1Size: 330,
    ring2Size: 530,
    ring3Size: 730,
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
      {value: 'ascendant', img: ascendantImg, desc: '...The Ascendant defines, in part, the first impression we make on others in a personal rather than professional sense. It represents our physical appearance, our physical bodies and overall health, and the body ego. It is our natural and personal defense mechanisms that we use to adapt to, and cope with, our environment...'},
      {value: 'sun', img: sunImg, desc: '...Represents: Our identity, our ego, and what we strive to be In the chart, the position of the Sun by zodiac sign represents the native’s life purpose and the style in which they leave their mark in the world. Rules the sign of Leo. Exalted in Aries, in its detriment in Aquarius, and in its fall in Libra...'},
      {value: 'moon', img: moonImg, desc: '...In the natal chart, the position of the Moon by sign shows how we emote and respond to our environment, as well as our instinctual habits, especially in our homes and in private. How do we instinctively react or respond to problems? What do we feel we need for a sense of security?...'},
      {value: 'mercury', img: mercuryImg, desc: '...Mercury’s action is to take things apart and put them back together again. look to Mercury in the chart to reveal how individuals get their point across, how they study, and how they process information. Mercury by sign shows an individual’s style of communication...'},
      {value: 'venus', img: venusImg, desc: '...We look to Venus in the natal chart to see how we approach relationships of the heart, as well as what gives us pleasure. Venus rules attachments to others. It rules attractiveness–both the ability to attract and attraction to others (and things)...'},
      {value: 'mars', img: marsImg, desc: '...Mars rules our animal instincts for aggression, anger, and survival. Our sexual desires come under the rule of Mars. Mars is the push that gets us out of bed in the morning, our drive and desire nature, and our active energy. In the chart, the position of Mars by sign shows our basic sexual nature, how we express our anger (our temper), what makes us angry, and our first instinct to act...'},
      {value: 'jupiter', img: jupiterImg, desc: '...Jupiter has generally been associated with good luck and bounty. Optimism and growth (including mental and spiritual growth) come under its rule. In the chart, the position of Jupiter by sign reveals how we express our generosity and tolerance. It shows how we go about trusting others and improving our lives. Where do we look for wisdom and understanding...'},
      {value: 'saturn', img: saturnImg, desc: '...Saturn is often associated with our fathers or father/authority figures. In the chart, the position of Saturn by sign and house reveals our own limitations, fears, and sense of responsibility. Saturn brings definition, and often limitation, to the planets it aspects...'},
      {value: 'uranus', img: uranusImg, desc: '...The position of Uranus shows where individuals look to stir things up, put a new spin on situations, and go against established thought or order.Uranus aspecting other planets in the chart color those energies with some willfulness, quirkiness, and originality. Where we find Uranus in the chart is where we see some refusal to blend in with others (and situations), and some erratic life patterns....'},
      {value: 'neptune', img: neptuneImg, desc: '...By house, Neptune’s position shows where intuition, dreams, and psychic sensitivity come into play. Natives may be able to rise above the demands of the ego in the areas of Neptune’s influence...'},
      {value: 'pluto', img: plutoImg, desc: '...In the chart, the position of Pluto by sign will be shared with other people in the same generation due to the comparatively slow movement of Pluto, the outermost planet, in the heavens. By house, the position of Pluto shows where individuals search for truths and deeper meaning. This area of life may be associated with change, upheaval, power struggles, and issues of control...'},
      {value: 'north node', img: northNodeImg, desc: '...The Nodes of the Moon represent points of personal karmic imbalance. The North Node represents the kinds of experiences that we must work to develop in order to work with our karma and to grow spiritually. The South Node represents those experiences and qualities that come naturally to us, that are over-developed, and that we tend to fall back on....'},
    ],
    signArray: [
      {value: 'empty', img: '', desc: '......'},
      {value: 'aries', img: ariesImg, desc: '...aries...'},
      {value: 'taurus', img: taurusImg, desc: '...taurus...'},
      {value: 'gemini', img: geminiImg, desc: '...gemini...'},
      {value: 'cancer', img: cancerImg, desc: '...cancer...'},
      {value: 'leo', img: leoImg, desc: '...leo...'},
      {value: 'virgo', img: virgoImg, desc: '...virgo...'},
      {value: 'libra', img: libraImg, desc: '...libra...'},
      {value: 'scorpio', img: scorpioImg, desc: '...scorpio...'},
      {value: 'sagittarius', img: sagittariusImg, desc: '...sagittarius...'},
      {value: 'capricorn', img: capricornImg, desc: '...capricorn...'},
      {value: 'aquarius', img: aquariusImg, desc: '...aquarius...'},
      {value: 'pisces', img: piscesImg, desc: '...pisces...'},
    ],
    houseArray: [
      {value:'empty', img: '', desc: '.......'},
      {value:'1st', img: firstHouseImg, desc: '....The first house begins the zodiac, and covers the all “firsts”: first impressions, the self and appearance, leadership, new initiatives, fresh starts and beginnings. The sign on the cusp, or starting edge, of this house, is referred to as your rising sign or ascendant....'},
      {value:'2nd', img: secondHouseImg, desc: '....The second house covers all matters related to your immediate material and physical environment—taste, smells, sound, touch, sights. The second house also rules income, money, and self-esteem...'},
      {value:'3rd', img: thirdHouseImg, desc: '....3rd...'},
      {value:'4th', img: fourthHouseImg, desc: '....4th...'},
      {value:'5th', img: fifthHouseImg, desc: '....5th...'},
      {value:'6th', img: sixthHouseImg, desc: '....6th...'},
      {value:'7th', img: seventhHouseImg, desc: '....7th...'},
      {value:'8th', img: eigthHouseImg, desc: '....8th...'},
      {value:'9th', img: ninthHouseImg, desc: '....9th...'},
      {value:'10th', img: tenthHouseImg, desc: '....10th...'},
      {value:'11th', img: eleventhHouseImg, desc: '....11th...'},
      {value:'12th', img: twelfthHouseImg, desc: '....12th...'},
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
    clickInfoState: true,
    ringInfoState: true,
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
      {coords: {x: 156,y: 41}, position: 12, mobileCoords: {x: 80, y: 19}},
      {coords: {x: 102,y: 56.5}, position: 1, mobileCoords: {x: 48, y: 27}},
      {coords: {x: 55,y: 100}, position: 2, mobileCoords: {x: 25, y: 50}},
      {coords: {x: 38,y: 159}, position: 3, mobileCoords: {x: 17, y: 81}},
      {coords: {x: 57,y: 214}, position: 4, mobileCoords: {x: 28 , y: 111}},
      {coords: {x: 100,y: 258}, position: 5, mobileCoords: {x: 50, y: 133}},
      {coords: {x: 157,y: 272}, position: 6, mobileCoords: {x: 81, y: 140}},
      {coords: {x: 213,y: 259}, position: 7, mobileCoords: {x: 110, y: 134}},
      {coords: {x: 254,y: 219}, position: 8, mobileCoords: {x: 133, y: 112}},
      {coords: {x: 273,y: 160}, position: 9, mobileCoords: {x: 142, y: 81}},
      {coords: {x: 256,y: 99}, position: 10, mobileCoords: {x: 133, y: 52}},
      {coords: {x: 219,y: 57}, position: 11, mobileCoords: {x: 112, y: 28}},
    ],
    signCoordArray: [
      {coords: {x: 129,y: 70}, position: 1, mobileCoords: {x: 66, y: 38}},
      {coords: {x: 58,y: 144}, position: 2, mobileCoords: {x: 31, y: 75}},
      {coords: {x: 36,y: 233}, position: 3, mobileCoords: {x: 21, y: 120}},
      {coords: {x: 66,y: 328}, position: 4, mobileCoords: {x: 36, y: 166}},
      {coords: {x: 128,y: 390}, position: 5, mobileCoords: {x: 66, y: 198}},
      {coords: {x: 224,y: 412}, position: 6, mobileCoords: {x: 112, y: 207}},
      {coords: {x: 316,y: 385}, position: 7, mobileCoords: {x: 158, y: 193}},
      {coords: {x: 384,y: 324}, position: 8, mobileCoords: {x: 190, y: 163}},
      {coords: {x: 411,y: 240}, position: 9, mobileCoords: {x: 204, y: 112}},
      {coords: {x: 388,y: 140}, position: 10, mobileCoords: {x: 193, y: 84}},
      {coords: {x: 321,y: 67}, position: 11, mobileCoords: {x: 161, y: 38}},
      {coords: {x: 225,y: 40}, position: 12, mobileCoords: {x: 113, y: 25}},
    ],
    houseCoordArray: [
      {coords: {x: 183,y: 98}, position: 1, mobileCoords: {x: 115, y: 77}},
      {coords: {x: 82,y: 202}, position: 2, mobileCoords: {x: 66, y: 125}},
      {coords: {x: 52,y: 334}, position: 3, mobileCoords: {x: 51, y: 190}},
      {coords: {x: 98,y: 477}, position: 4, mobileCoords: {x: 73, y: 251}},
      {coords: {x: 192,y: 565}, position: 5, mobileCoords: {x: 121, y: 298}},
      {coords: {x: 321,y: 590}, position: 6, mobileCoords: {x: 180, y: 309}},
      {coords: {x: 449,y: 565}, position: 7, mobileCoords: {x: 242, y: 301}},
      {coords: {x: 550,y: 471}, position: 8, mobileCoords: {x: 289, y: 255}},
      {coords: {x: 589,y: 333}, position: 9, mobileCoords: {x: 210, y: 188}},
      {coords: {x: 561,y: 194}, position: 10, mobileCoords: {x: 297, y: 122}},
      {coords: {x: 461,y: 100}, position: 11, mobileCoords: {x: 250, y: 72}},
      {coords: {x: 321,y: 52}, position: 12, mobileCoords: {x: 182, y: 54}},
    ],
    switch: false,
  }
  // added combined arrays eg [{sign: 'x',planet:'y',phrases:['xyx']}] ???


  constructor(props) {
    super(props);
    this.rot = this.state.rot;
    this.canvasRef1 = React.createRef();
    this.canvasRef2 = React.createRef();
    this.canvasRef3 = React.createRef();
    this.canvasRefMobile1 = React.createRef();
    this.canvasRefMobile2 = React.createRef();
    this.canvasRefMobile3 = React.createRef();
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
      img: 'empty',
      desc: '',
    };
    this.activeRings = [1,2,3];
    this.mobile = false;
    this.ring1Size =
    this.ring1Size = 300;
    this.ring2Size = 450;
    this.ring3Size = 645;
  }

  componentDidUpdate() {

  }

  componentDidMount() {
    console.log('window dimensions:', window.innerWidth, window.innerHeight);
    let mobile = false;
    if (window.innerWidth < 750) {
      this.mobile = true;
      mobile = true;
    }
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
    const imgMobile1 = this.refs.imageMobile1;
    const imgMobile2 = this.refs.imageMobile2;
    const imgMobile3 = this.refs.imageMobile3;

    if (mobile === true) {
      // let elem = document.getElementsByClassName('canvasBox2');
      // elem[0].classList.add('canvasBox2Mobile');

      canvas1.width = 150;
      canvas2.width = 230;
      canvas3.width = 365;
      canvas1.height = 150;
      canvas2.height = 230;
      canvas3.height = 365;

      imgMobile3.onload=function(){
        context1.drawImage(imgMobile1,canvas1.width/2-imgMobile1.width/2,canvas1.height/2-imgMobile1.width/2);
        context2.drawImage(imgMobile2,canvas2.width/2-imgMobile2.width/2,canvas2.height/2-imgMobile2.width/2);
        context3.drawImage(imgMobile3,canvas3.width/2-imgMobile3.width/2,canvas3.height/2-imgMobile3.width/2);
      }
    }

    if (mobile === false) {
      img3.onload=function(){
        context1.drawImage(img1,canvas1.width/2-img1.width/2,canvas1.height/2-img1.width/2);
        context2.drawImage(img2,canvas2.width/2-img2.width/2,canvas2.height/2-img2.width/2);
        context3.drawImage(img3,canvas3.width/2-img3.width/2,canvas3.height/2-img3.width/2);
      }
    }

    this.checkStats();
    this.canvasListeners()

  }

  init = () => {

    // this.setState({
    //   switch: true
    // })
    console.log('mobile init',this.mobile,this.state.mobile);

    const canvas1 = this.canvasRef1.current;
    const canvas2 = this.canvasRef2.current;
    const canvas3 = this.canvasRef3.current;

    // console.log('1',canvas1.width,'2',canvas2.width,'3',canvas3.width);
    // console.log('1a',this.ring1Size,'2a',this.ring2Size,'3a',this.ring3Size);
    // console.log('1b',this.state.ring1Size,'2b',this.state.ring2Size,'3b',this.state.ring3Size);
    const context1 = canvas1.getContext('2d');
    const context2 = canvas2.getContext('2d');
    const context3 = canvas3.getContext('2d');
    context1.clearRect(0, 0, canvas1.width, canvas1.height)
    context2.clearRect(0, 0, canvas2.width, canvas2.height)
    context3.clearRect(0, 0, canvas3.width, canvas3.height)

    // canvas1.removeEventListener("click", e => {
    //   console.log('remove event listener');
    // });
    // canvas2.removeEventListener("click", e => {
    //   console.log('remove event listener');
    // });
    // canvas3.removeEventListener("click", e => {
    //   console.log('remove event listener');
    // });

    if (this.mobile === true) {

      let elem = document.getElementsByClassName('canvasBox2');
      elem[0].classList.add('canvasBox2Mobile');
      canvas1.width = 150;
      canvas2.width = 230;
      canvas3.width = 365;
      canvas1.height = 150;
      canvas2.height = 230;
      canvas3.height = 365;

      const imgMobile1 = this.refs.imageMobile1;
      const imgMobile2 = this.refs.imageMobile2;
      const imgMobile3 = this.refs.imageMobile3;
      // console.log('1',imgMobile1,'2',imgMobile2,'3',imgMobile3);

      // imgMobile3.onload = function(){
        context1.drawImage(imgMobile1,canvas1.width/2-imgMobile1.width/2,canvas1.height/2-imgMobile1.width/2);
        context2.drawImage(imgMobile2,canvas2.width/2-imgMobile2.width/2,canvas2.height/2-imgMobile2.width/2);
        context3.drawImage(imgMobile3,canvas3.width/2-imgMobile3.width/2,canvas3.height/2-imgMobile3.width/2);

      // }

      // this.canvasMobileListeners()
    } else {


      let elem = document.getElementsByClassName('canvasBox2');
      elem[0].classList.remove('canvasBox2Mobile');
      canvas1.width = 300;
      canvas2.width = 450;
      canvas3.width = 645;
      canvas1.height = 300;
      canvas2.height = 450;
      canvas3.height = 645;

      const img1 = this.refs.image1;
      const img2 = this.refs.image2;
      const img3 = this.refs.image3;

      context1.drawImage(img1,canvas1.width/2-img1.width/2,canvas1.height/2-img1.width/2);
      context2.drawImage(img2,canvas2.width/2-img2.width/2,canvas2.height/2-img2.width/2);
      context3.drawImage(img3,canvas3.width/2-img3.width/2,canvas3.height/2-img3.width/2);

    }

    this.checkStats();
    this.canvasListeners();
    this.resetHighlights();

  }

  canvasListeners = () => {
    console.log('adding canvas listeners');
    let canvas1 = this.canvasRef1.current;
    let canvas2 = this.canvasRef2.current;
    let canvas3 = this.canvasRef3.current;

    canvas1.addEventListener("click", e => {
      // console.log('planet click',e);
        let mousePos = this.getMousePos(canvas1, e);
        console.log('planet ring',mousePos.x + ',' + mousePos.y);
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
        this.setClickInfo(clickInfo);
    });
    canvas2.addEventListener("click", e => {
      // console.log('sign click',e);
        let mousePos = this.getMousePos(canvas2, e);
        console.log('sign ring',mousePos.x + ',' + mousePos.y);
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
        this.setClickInfo(clickInfo);
    });
    canvas3.addEventListener("click", e => {
      // console.log('house click',e);
        let mousePos = this.getMousePos(canvas3, e);
        console.log('house ring',mousePos.x + ',' + mousePos.y);
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
        this.setClickInfo(clickInfo);
    });

  }

  setClickInfo = (args) => {
    console.log('setting click info');
    this.setState({
      // clickInfoState: false,
      ringClickInfo: {
        ring: '',
        coords: {
          x: '',
          y: '',
        },
        target: '',
        img: 'empty',
        desc: '',
      }
    })
    // this.clickInfoState = false;

    if (args.ring === 'house') {
      // console.log('clickset house');
      let x = args.coords.x;
      let y = args.coords.y;
      let rad = 30;

      if (this.mobile === true) {
        rad = 15;
      }

      for (const elem of this.state.[args.ring+'CoordArray']) {
        let coordsCheck = {
          x: '',
          y: '',
        }
        if (this.mobile === true) {
          coordsCheck = elem.mobileCoords;
        } else {
          coordsCheck = elem.coords;
        }

        if (this.circlePointCheck(x, y, coordsCheck.x, coordsCheck.y, rad) === true) {
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

          this.setState({
            clickInfoState: true,
            ringClickInfo: args,
          })
          this.clickInfoState = true;

        }
      }

    }
    if (args.ring === 'sign') {
      // console.log('clickset sign');
      let x = args.coords.x;
      let y = args.coords.y;
      let rad = 25;

      if (this.mobile === true) {
        rad = 10;
      }

      for (const elem of this.state.[args.ring+'CoordArray']) {
        let coordsCheck = {
          x: '',
          y: '',
        }
        if (this.mobile === true) {
          coordsCheck = elem.mobileCoords;
        } else {
          coordsCheck = elem.coords;
        }

        if (this.circlePointCheck(x, y, coordsCheck.x, coordsCheck.y, rad) === true) {
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

          this.setState({
            clickInfoState: true,
            ringClickInfo: args,
          })
          this.clickInfoState = true;

        }
      }

    }
    if (args.ring === 'planet') {
      // console.log('clickset planet');
      let x = args.coords.x;
      let y = args.coords.y;
      let rad = 20;

      if (this.mobile === true) {
        rad = 7;
      }

      for (const elem of this.state.[args.ring+'CoordArray']) {

        let coordsCheck = {
          x: '',
          y: '',
        }
        if (this.mobile === true) {
          coordsCheck = elem.mobileCoords;
        } else {
          coordsCheck = elem.coords;
        }

        if (this.circlePointCheck(x, y, coordsCheck.x, coordsCheck.y, rad) === true) {
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

          this.setState({
            clickInfoState: true,
            ringClickInfo: args,
          })
          this.clickInfoState = true;

        }
      }

    }

    // this.setState({
    //   clickInfoState: true,
    //   ringClickInfo: args,
    // })
    // this.clickInfoState = true;

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

  toggleClickInfo = () => {
    if (this.state.clickInfoState === true) {
      this.clickInfoState = false
      this.setState({
        clickInfoState: false
      })
    } else {
      this.clickInfoState = true
      this.setState({
        clickInfoState: true
      })
    }

  }
  toggleRingInfo = () => {
    if (this.state.ringInfoState === true) {
      this.setState({
        ringInfoState: false
      })
    } else {
      this.setState({
        ringInfoState: true
      })
    }

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
    let thisInterpretation2 = {
      planet: {state: false, interp: {
        a: '',
        b: '',
        c: '',
        d: '',
      }},
      sign: {state: false, interp: {
        a: '',
        b: '',
        c: '',
        d: '',
      }},
      house: {state: false, interp: {
        a: '',
        b: '',
      }},
    };

    for (const elem of toInterpret) {
      if (elem.type === 'planet') {

        let preDictionary = this.state.[elem.type+'InterpArray'];
        for (const item of preDictionary) {
          if (item.planet === elem.value) {
            let dictionary = item.words;
            dictionary = dictionary.sort(() => Math.random() - 0.5);
            let selection = dictionary.slice(0,7);

            for (const interpElem of interpretation) {
              if (interpElem.key === 'planet') {
                interpElem.val = item.planet;
                interpElem.values.push(selection);
              }
            }
          }
        }
        thisInterpretation.planet.state = true;
        thisInterpretation2.planet.state = true;
      }
      if (elem.type === 'sign') {

        let preDictionary = this.state.[elem.type+'InterpArray'];

        for (const item of preDictionary) {
          if (item.sign === elem.value) {
            let dictionary = item.words;
            dictionary = dictionary.sort(() => Math.random() - 0.5);
            let selection = dictionary.slice(0,7);

            for (const interpElem of interpretation) {
              if (interpElem.key === 'sign') {
                interpElem.val = item.sign;
                interpElem.values.push(selection);
              }
            }
          }
        }
        thisInterpretation.sign.state = true;
        thisInterpretation2.sign.state = true;
      }
      if (elem.type === 'house') {

        let preDictionary = this.state.[elem.type+'InterpArray'];

        for (const item of preDictionary) {
          if (item.house === elem.value) {
            let dictionary = item.words;
            dictionary = dictionary.sort(() => Math.random() - 0.5);
            let selection = dictionary.slice(0,7);

            for (const interpElem of interpretation) {
              if (interpElem.key === 'house') {
                interpElem.val = item.house;
                interpElem.values.push(selection);
              }
            }
          }
        }
        thisInterpretation.house.state = true;
        thisInterpretation2.house.state = true;
      }

    }

    console.log('...finalInterpretation...',interpretation);
    if (thisInterpretation.planet.state === true ) {
      thisInterpretation.planet.interp = `Your ${interpretation[0].val}: which represents ${interpretation[0].values[0][0]}, ${interpretation[0].values[0][1]}, ${interpretation[0].values[0][3]}...`;
      thisInterpretation2.planet.interp.a = 'Your ';
      thisInterpretation2.planet.interp.b = ' '+interpretation[0].val+' ';
      thisInterpretation2.planet.interp.c = 'which represents' ;
      thisInterpretation2.planet.interp.d = [interpretation[0].values[0][0],interpretation[0].values[0][1],interpretation[0].values[0][2],interpretation[0].values[0][3],interpretation[0].values[0][4],interpretation[0].values[0][5],interpretation[0].values[0][6]];
    }
    if (thisInterpretation.sign.state === true ) {
      thisInterpretation.sign.interp = `Being in ${interpretation[1].val}: has the qualities of ${interpretation[1].values[0][0]}, ${interpretation[1].values[0][1]}, ${interpretation[1].values[0][3]}...`;
      thisInterpretation2.sign.interp.a = 'Being in ';
      thisInterpretation2.sign.interp.b = ' '+interpretation[1].val+' ';
      thisInterpretation2.sign.interp.c =  ': has the qualities of ';
      thisInterpretation2.sign.interp.d = [interpretation[1].values[0][0],interpretation[1].values[0][1],interpretation[1].values[0][2],interpretation[1].values[0][3],interpretation[1].values[0][4],interpretation[1].values[0][5],interpretation[1].values[0][6]];
    }
    if (thisInterpretation.house.state === true ) {
      thisInterpretation.house.interp = `particularly in these areas of life ${interpretation[2].values[0][0]}, ${interpretation[2].values[0][1]}, ${interpretation[2].values[0][3]}...`;
      thisInterpretation2.house.interp.a = ' particularly in these areas of life ';
      thisInterpretation2.house.interp.b = [interpretation[2].values[0][0],interpretation[2].values[0][1],interpretation[2].values[0][2],interpretation[2].values[0][3],interpretation[2].values[0][4],interpretation[2].values[0][5],interpretation[2].values[0][6]];
    }
    // this.interpretation = thisInterpretation;
    this.interpretation = thisInterpretation2;

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
    let image;
    image = this.refs.['image'+this.state.selectedRing];

    if (this.mobile === true) {
      image = this.refs.['imageMobile'+this.state.selectedRing];
    }

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
    let img;
    if (this.mobile === true ) {
      img = this.refs.['imageTogggledMobile'+toToggle+''];
    } else {
      img = this.refs.['imageTogggled'+toToggle+''];
    }
    context.drawImage(img,canvas.width/2-img.width/2,canvas.height/2-img.width/2);
  }
  if (action == 'add') {
    let img;
    if (this.mobile === true ) {
      img = this.refs.['imageMobile'+toToggle+''];
    } else {
      img = this.refs.['image'+toToggle+''];
    }
    context.drawImage(img,canvas.width/2-img.width/2,canvas.height/2-img.width/2);
  }

}

  toggleMobile = () => {
    if (this.state.mobile === true || this.mobile === true) {
      this.setState({
        mobile: false,
        ring1Size: 300,
        ring2Size: 450,
        ring3Size: 645,
      })
      this.mobile = false;
      this.ring1Size = 300;
      this.ring2Size = 450;
      this.ring3Size = 645;
      this.init()
    } else {
      this.setState({
        mobile: true,
        ring1Size: 150,
        ring2Size: 230,
        ring3Size: 365,
      })
      this.mobile = true;
      this.ring1Size = 150;
      this.ring2Size = 230;
      this.ring3Size = 365;
      this.init()
    }
    // window.location.reload(false);
    // if (this.state.mobile) {
    //   console.log('gooper');
    // }

  }

  render() {

    return (


        <div className="KnobBoxTop">

          <Controls
            controlsInput={this.controlsInput}
            ringToggle={this.toggleRing}
            toggleMobile={this.toggleMobile}
            ringInfoState={this.state.ringInfoState}
            toggleRingInfo={this.toggleRingInfo}
          />

          {this.state.ringInfoState === true && (
            <RingInfo
              planet={this.planet}
              sign={this.sign}
              house={this.house}
              interpretation={this.interpretation}
              activeRings={this.activeRings}
              selectedRingName={this.state.selectedRingName}
              toggleRingInfo={this.toggleRingInfo}
            />
          )}


          {this.state.clickInfoState === true && (
            <RingInfoClick
              data={this.state.ringClickInfo}
              toggleClickInfo={this.toggleClickInfo}
              state={this.state.clickInfoState}
            />
          )}


          <div className="canvasBox">
            <div className="pointerBox">

              <FontAwesomeIcon icon={faCaretDown} className="pointerIcon" size="5x"/>
            </div>

            <div className="canvasBox2">
            <canvas
              width="645"
              height="645"
              ref={this.canvasRef3}
              className={this.state.canvasClass3}
            />
            <canvas
              width="450"
              height="450"
              ref={this.canvasRef2}
              className={this.state.canvasClass2}
            />
            <canvas
              width="300"
              height="300"
              ref={this.canvasRef1}
              className={this.state.canvasClass1}
            />
            </div>


            <div className="controlsBox">

              <div>
                <img src={ring1} className='mainKnob' ref="image1" alt="logo" />
                <img src={ring2} className="mainKnob" ref="image2" alt="logo" />
                <img src={ring3} className="mainKnob" ref="image3" alt="logo" />
                <img src={ringToggled1} className='mainKnob' ref="imageTogggled1" alt="logo" />
                <img src={ringToggled2} className="mainKnob" ref="imageTogggled2" alt="logo" />
                <img src={ringToggled3} className="mainKnob" ref="imageTogggled3" alt="logo" />
              </div>


              <div>
                <img src={ringMobile1} className='mainKnob' ref="imageMobile1" alt="logo" />
                <img src={ringMobile2} className="mainKnob" ref="imageMobile2" alt="logo" />
                <img src={ringMobile3} className="mainKnob" ref="imageMobile3" alt="logo" />
                <img src={ringToggledMobile1} className='mainKnob' ref="imageTogggledMobile1" alt="logo" />
                <img src={ringToggledMobile2} className="mainKnob" ref="imageTogggledMobile2" alt="logo" />
                <img src={ringToggledMobile3} className="mainKnob" ref="imageTogggledMobile3" alt="logo" />
              </div>


            </div>

          </div>

        </div>

    )
  }

}

export default Knob4;
