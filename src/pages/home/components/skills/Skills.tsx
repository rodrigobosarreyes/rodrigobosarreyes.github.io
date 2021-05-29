import { Component } from 'react';
import './Skills.scss';

export class Skills extends Component {
  render() {
    return (
      <div className="skills__container">
        <div className="row">
          <div className="skill__label col-3">CSS</div>
          <div className="skill__value col">
            <div className="bar"></div>
            <div className="line__25"></div>
          </div>
        </div>
        <div className="row">
          <div className="skill__label col-3">CSS</div>
          <div className="skill__value col">
            <div className="bar"></div>
            <div className="line__50"></div>
          </div>
        </div>
        <div className="row">
          <div className="skill__label col-3">CSS</div>
          <div className="skill__value col">
            <div className="bar"></div>
            <div className="line__75"></div>
          </div>
        </div>
        <div className="row">
          <div className="skill__label col-3">CSS</div>
          <div className="skill__value col">
            <div className="bar"></div>
            <div className="line__100"></div>
          </div>
        </div>
        <div className="row">
          <div className="skill__label col-3">CSS</div>
          <div className="skill__value col">
            <div className="bar"></div>
            <div className="line__25"></div>
          </div>
        </div>
        <div className="row">
          <div className="skill__label col-3">CSS</div>
          <div className="skill__value col">
            <div className="bar"></div>
            <div className="line__25"></div>
          </div>
        </div>
      </div>
    )
  }
}  

export default Skills;
