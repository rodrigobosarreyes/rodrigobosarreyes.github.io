import { Component } from 'react'
import { ProjectCard } from '../../../../core/components/project-card/ProjectCard';
import './Projects.scss';

export class Projects extends Component {
  render() {
    return (
      <div className="bg-gray">
        <section id="projects" className="container">
          <h2>PROJECTS</h2>
          <div className="projects__content row no-gutters">
            <div className="col-3">
              <ProjectCard />
            </div>
            {/* <div className="col-3">
              <ProjectCard />
            </div>
            <div className="col-3">
              <ProjectCard />
            </div>
            <div className="col-3">
              <ProjectCard />
            </div>
            <div className="col-3">
              <ProjectCard />
            </div>
            <div className="col-3">
              <ProjectCard />
            </div>
            <div className="col-3">
              <ProjectCard />
            </div>
            <div className="col-3">
              <ProjectCard />
            </div> */}
          </div>
        </section>  
      </div>
    )
  }
}

export default Projects
