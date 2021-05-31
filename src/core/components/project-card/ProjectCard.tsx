import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './ProjectCard.scss';


export class ProjectCard extends Component {
  arrowIcon = <FontAwesomeIcon icon={faArrowRight} className="rb__icon"/>;
  cancelIcon = <FontAwesomeIcon icon={faTimes} className="cancel__icon"/>;

  onClickCancel = () => {
    const arr = document.querySelector('.arr__container');
    const leftContainer = document.querySelector('.left__container');
    arr?.classList.remove('arr__container');
    if (leftContainer?.classList.contains('active__arr')) {
      leftContainer.classList.remove('active__arr');
      leftContainer.classList.add('off');
    }
  }

  onClickArrow = () => {
    console.log('onclick arrow');
    
    const arr = document.querySelector('.arr__container');
    const leftContainer = document.querySelector('.left__container');
    arr?.classList.add('arr__container');
    if (leftContainer?.classList.contains('off')) {
      leftContainer.classList.remove('off');
      leftContainer.classList.add('active__arr');
    }
  }
  
  render() {
    return (
      <div className="project_card__container">
        <div className="background__container">
          <div className="arr__container rb_center" onClick={this.onClickArrow}>
            {this.arrowIcon}
          </div>
        </div>
        {/* <div className="left__container off">
          <p>Hello world</p>
          <div className="center cancel" onClick={this.onClickCancel}>
            {this.cancelIcon}
          </div>
        </div> */}
      </div>
    )
  }
}

export default ProjectCard
