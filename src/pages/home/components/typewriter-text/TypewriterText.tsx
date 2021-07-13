import React, { Component } from 'react';

import './TypewriterText.scss';

export class TypewriterText extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="static-text">I'm</div>
        <ul className="dynamic-texts">
          <li><span>Rodrigo Bosarreyes</span></li>
          <li><span>a software designer</span></li>
          <li><span>a frontend developer</span></li>
          <li><span>a backend developer</span></li>
          <li><span>a good mentor</span></li>
        </ul>
      </div>
    )
  }
}

export default TypewriterText;
