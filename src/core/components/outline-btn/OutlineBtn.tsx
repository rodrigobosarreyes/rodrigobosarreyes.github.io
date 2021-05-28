import React, { Component } from 'react';
import './OutlineBtn.scss';

type ButtonProps = {
  text: string,
  icon?: any
}

export class OutlineBtn extends Component<ButtonProps> {
  constructor(props: any) {
    super(props);
  }
  
  render() {
    return (
      <button className="dark">{this.props.text} {this.props.icon}</button>
    )
  }
}

export default OutlineBtn
