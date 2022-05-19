import React, { Component } from 'react';
import './OutlineBtn.scss';

type ButtonProps = {
  text: string,
  icon?: any
}

export class OutlineBtn extends Component<ButtonProps> {
  render() {
    return (
      <button className="dark">{this.props.text} {this.props.icon}</button>
    )
  }
}

export default OutlineBtn
