import { Component } from 'react'
import ProjectCard from '../../../../core/components/project-card/ProjectCard';
import './Projects.scss';

export class Projects extends Component {
  projects = [
    {imgUrl: 'projects/batatabit.png', children: <>
      <p className='text-center h3'><a href='https://rodrigobosarreyes.github.io/batatabit/' target="_blank" rel="noopener noreferrer">Batatabit</a></p>
      <p className='px-4 description'>My first landing page, made with HTML and CSS using flexbox, fully responsive. <a href='https://rodrigobosarreyes.github.io/batatabit/' target="_blank" rel="noopener noreferrer">Click here!</a></p>
    </>},
    {imgUrl: 'https://dummyimage.com/602x400/000/fff'},
    {imgUrl: 'https://dummyimage.com/603x400/000/fff'},
    {imgUrl: 'https://dummyimage.com/604x400/000/fff'},
    {imgUrl: 'https://dummyimage.com/605x400/000/fff'},
    {imgUrl: 'https://dummyimage.com/606x400/000/fff'},
  ]
  
  render() {
    return (
      <div className="bg-gray">
        <section id="projects" className="container">
          <h2>PROJECTS</h2>
          <div className="projects__content row no-gutters">
            {this.projects.map( (p, i) => {
              return (
                <div className="col my-3" key={i}>
                  <ProjectCard imgUrl={p.imgUrl}>
                    {p.children}
                  </ProjectCard>
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
