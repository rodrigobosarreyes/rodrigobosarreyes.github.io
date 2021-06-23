import { Component } from 'react';
import './Skills.scss';

type SkillsProps = {
  skills: ISkill[]
};

export class Skills extends Component<SkillsProps> {
  render() {
    return (
      <div className="skills__container">
        <div className="row">
          <div className="skill__header offset-3 col">
            <span>Basic</span>
            <span>Good</span>
            <span>Expert</span>
            <span>Specialist</span>
          </div>
        </div>
        {this.props.skills.map( (s: ISkill, idx) => {
          return (
            <div className="row" key={idx}>
              <div className="skill__label col-3">{s.name}</div>
              <div className="skill__value col">
                <div className="bar"></div>
                <div className={'line__' + s.level}></div>
              </div>
            </div>
          )
        })}
        {/* <div className="row">
          <div className="skill__label col-3">HTML/CSS</div>
          <div className="skill__value col">
            <div className="bar"></div>
            <div className="line__25"></div>
          </div>
        </div> */}
      </div>
    )
  }
}  

export default Skills;

export interface ISkill {
  name: string,
  level: 25 | 50 | 75 | 100
}
