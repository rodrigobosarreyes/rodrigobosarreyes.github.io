import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './ProjectCard.scss';

type ProjectCardProps = {
  imgUrl: string;
  children?: JSX.Element;
}

const ProjectCard = (props: ProjectCardProps): JSX.Element => {
  const [open, toggle] = useState(false);

  const onClickCancel = () => {
    toggle(false);
  }

  const onClickArrow = () => {
    toggle(true);
  }

  return (
    <div className="project_card__container center">
        <div className="project_card__content center" style={{backgroundImage: `url(${props.imgUrl})`}}>
          <div className="arr_container center" onClick={onClickArrow}>
            <FontAwesomeIcon icon={faArrowRight} className="rb__icon"/>
          </div>
          <div className={`left_container ${open ? 'active' : 'off'}`}>
            {props.children}
            <div className="cancel center" onClick={onClickCancel}>
              <FontAwesomeIcon icon={faTimes} className="cancel__icon"/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProjectCard;
