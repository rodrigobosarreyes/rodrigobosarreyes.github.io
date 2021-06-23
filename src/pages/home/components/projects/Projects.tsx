import { Component } from 'react'
import { ProjectCard } from '../../../../core/components/project-card/ProjectCard';
import './Projects.scss';

export class Projects extends Component {
  projects = [
    {idArrElement: 'arr-1', idLeftElement: 'left-1', imgUrl: 'https://dummyimage.com/601x400/000/fff'},
    {idArrElement: 'arr-2', idLeftElement: 'left-2', imgUrl: 'https://dummyimage.com/602x400/000/fff'},
    {idArrElement: 'arr-3', idLeftElement: 'left-3', imgUrl: 'https://dummyimage.com/603x400/000/fff'},
    {idArrElement: 'arr-4', idLeftElement: 'left-4', imgUrl: 'https://dummyimage.com/604x400/000/fff'},
    {idArrElement: 'arr-5', idLeftElement: 'left-5', imgUrl: 'https://dummyimage.com/605x400/000/fff'},
    {idArrElement: 'arr-6', idLeftElement: 'left-6', imgUrl: 'https://dummyimage.com/606x400/000/fff'},
  ]
  
  render() {
    return (
      <div className="bg-gray">
        <section id="projects" className="container">
          <h2>PROJECTS</h2>
          <div className="projects__content row no-gutters">
            {this.projects.map( p => {
              return (
                <div className="col-3 my-3">
                  <ProjectCard idArrElement={p.idArrElement} idLeftElement={p.idLeftElement} imgUrl={p.imgUrl} />
                </div>
              )
            })}
          </div>
        </section>  
      </div>
    )
  }
}

export default Projects
