import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './ProjectCard.scss';

type ProjectCardProps = {
  idArrElement: string,
  idLeftElement: string,
  imgUrl: string
}

export class ProjectCard extends Component<ProjectCardProps> {
  arrowIcon = <FontAwesomeIcon icon={faArrowRight} className="rb__icon"/>;
  cancelIcon = <FontAwesomeIcon icon={faTimes} className="cancel__icon"/>;

  onClickCancel = () => {
    const arr = document.getElementById(this.props.idArrElement);
    const leftContainer = document.getElementById(this.props.idLeftElement);
    arr?.classList.remove('active_arr');
    if (leftContainer?.classList.contains('active')) {
      leftContainer.classList.remove('active');
      leftContainer.classList.add('off');
    }
  }

  onClickArrow = () => {
    const arr = document.getElementById(this.props.idArrElement);
    const leftContainer = document.getElementById(this.props.idLeftElement);
    arr?.classList.add('arr_container');
    if (leftContainer?.classList.contains('off')) {
      leftContainer.classList.remove('off');
      leftContainer.classList.add('active');
    }
  }
  
  render() {
    return (
      <div className="project_card__container center">
        <div className="project_card__content center" style={{backgroundImage: `url(${this.props.imgUrl})`}}>
          <div className="arr_container center" id={this.props.idArrElement} onClick={this.onClickArrow}>
            {this.arrowIcon}
          </div>
          <div className="left_container off" id={this.props.idLeftElement}>
            <p>Skills</p>
            <div className="cancel center" onClick={this.onClickCancel}>
              {this.cancelIcon}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectCard;
