import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import '../App.css';
import './knob2n3.css';
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


class Knob2 extends Component {

  state = {
    deg: null,
    deg2: null,
  };

  constructor(props) {
    super(props);

    this.fullAngle = props.degrees;
    this.startAngle = (360 - props.degrees) / 2;
    this.endAngle = this.startAngle + props.degrees;
    this.margin = props.size * 0.15;
    this.currentDeg = Math.floor(
      this.convertRange(
        props.min,
        props.max,
        this.startAngle,
        this.endAngle,
        props.value
      )
    );
    this.setState({ deg: this.currentDeg });


    this.fullAngle2 = props.degrees2;
    this.startAngle2 = (360 - props.degrees2) / 2;
    this.endAngle2 = this.startAngle2 + props.degrees2;
    this.margin2 = props.size2 * 0.15;
    this.currentDeg2 = Math.floor(
      this.convertRange(
        props.min2,
        props.max2,
        this.startAngle2,
        this.endAngle2,
        props.value2
      )
    );
    this.setState({ deg2: this.currentDeg2 });
  }

  componentDidUpdate() {
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  startDrag = e => {
    console.log('starting drag')
    e.preventDefault();
    const knob = e.target.getBoundingClientRect();
    const pts = {
      x: knob.left + knob.width / 2,
      y: knob.top + knob.height / 2
    };
    const moveHandler = e => {
      this.currentDeg = this.getDeg(e.clientX, e.clientY, pts);
      if (this.currentDeg === this.startAngle) this.currentDeg--;
      let newValue = Math.floor(
        this.convertRange(
          this.startAngle,
          this.endAngle,
          this.props.min,
          this.props.max,
          this.currentDeg
        )
      );
      this.setState({ deg: this.currentDeg });
      // this.props.onChange(newValue);
    };
    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseup", e => {
      document.removeEventListener("mousemove", moveHandler);
    });
  };

  getDeg = (cX, cY, pts) => {
    const x = cX - pts.x;
    const y = cY - pts.y;
    let deg = Math.atan(y / x) * 180 / Math.PI;
    if ((x < 0 && y >= 0) || (x < 0 && y < 0)) {
      deg += 90;
    } else {
      deg += 270;
    }
    let finalDeg = Math.min(Math.max(this.startAngle, deg), this.endAngle);
    console.log('foo',finalDeg)
    return finalDeg;
  };

  convertRange = (oldMin, oldMax, newMin, newMax, oldValue) => {
    return (oldValue - oldMin) * (newMax - newMin) / (oldMax - oldMin) + newMin;
  };

  renderTicks = () => {
    let ticks = [];
    const incr = this.fullAngle / this.props.numTicks;
    const size = this.margin + this.props.size / 2;
    for (let deg = this.startAngle; deg <= this.endAngle; deg += incr) {
      const tick = {
        deg: deg,
        tickStyle: {
          height: size + 10,
          left: size - 1,
          top: size + 2,
          transform: "rotate(" + deg + "deg)",
          transformOrigin: "top"
        }
      };
      ticks.push(tick);
    }
    return ticks;
  };

  renderTicks2 = () => {
    let ticks2 = [];
    const incr = this.fullAngle2 / this.props.numTicks2;
    const size = this.margin2 + this.props.size2 / 2;
    for (let deg = this.startAngle2; deg <= this.endAngle2; deg += incr) {
      const tick2 = {
        deg: deg,
        tickStyle2: {
          height: size + 10,
          left: size - 1,
          top: size + 2,
          transform: "rotate(" + deg + "deg)",
          transformOrigin: "top"
        }
      };
      ticks2.push(tick2);
    }
    return ticks2;
  };

  dcpy = o => {
    return JSON.parse(JSON.stringify(o));
  };

  render() {

    let kStyle = {
      width: this.props.size,
      height: this.props.size
    };
    let iStyle = this.dcpy(kStyle);
    let oStyle = this.dcpy(kStyle);
    oStyle.margin = this.margin;
    if (this.props.color) {
      oStyle.backgroundImage =
        "radial-gradient(100% 70%,hsl(210, " +
        this.currentDeg +
        "%, " +
        this.currentDeg / 5 +
        "%),hsl(" +
        Math.random() * 100 +
        ",20%," +
        this.currentDeg / 36 +
        "%))";
    }
    iStyle.transform = "rotate(" + this.state.deg + "deg)";


    let kStyle2 = {
      width: this.props.size2,
      height: this.props.size2
    };
    let iStyle2 = this.dcpy(kStyle2);
    let oStyle2 = this.dcpy(kStyle2);
    oStyle2.margin = this.margin2;
    if (this.props.color2) {
      oStyle2.backgroundImage =
        "radial-gradient(100% 70%,hsl(210, " +
        this.currentDeg2 +
        "%, " +
        this.currentDeg2 / 5 +
        "%),hsl(" +
        Math.random() * 100 +
        ",20%," +
        this.currentDeg2 / 36 +
        "%))";
    }
    iStyle2.transform = "rotate(" + this.state.deg2 + "deg)";

    return (
      <div className="KnobBoxTop">


      <div className="App-header">
      <Row>
      <Col md={6}>
      <div className="knob 2ndKnob" style={kStyle2}>
        <div className="ticks">
          {this.props.numTicks2
            ? this.renderTicks2().map((tick2, i) => (
                <div
                  key={i}
                  className={
                    "tick" + (tick2.deg <= this.currentDeg2 ? " active" : "")
                  }
                  style={tick2.tickStyle2}
                />
              ))
            : null}
        </div>
        <div className="knob outer" style={oStyle2} onMouseDown={this.startDrag}>
          <div className="knob inner" style={iStyle2}>
            <div className="grip" />
          </div>
        </div>
      </div>
      </Col>

      <Col md={6}>
      <div className="knob topKnob" style={kStyle}>
        <div className="ticks">
          {this.props.numTicks
            ? this.renderTicks().map((tick, i) => (
                <div
                  key={i}
                  className={
                    "tick" + (tick.deg <= this.currentDeg ? " active" : "")
                  }
                  style={tick.tickStyle}
                />
              ))
            : null}
        </div>
        <div className="knob outer" style={oStyle} onMouseDown={this.startDrag}>
          <div className="knob inner" style={iStyle}>
            <div className="grip" />
          </div>
        </div>
      </div>
      </Col>

      </Row>



      </div>
      </div>
    )
  }

}

export default Knob2;
