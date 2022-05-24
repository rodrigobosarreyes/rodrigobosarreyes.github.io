import { faBrain, faCalendarAlt, faLaptopHouse, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react'
import FeatureCard from '../../../core/components/feature-card/FeatureCard';
import './About.scss';
import pp from '../../../assets/images/about/leyo.jpeg';
import Skills, { ISkill } from './skills/Skills';

export class About extends Component {
  designIcon = <FontAwesomeIcon icon={faPaintBrush} className="feature_card__icon" />
  remoteIcon = <FontAwesomeIcon icon={faLaptopHouse} className="feature_card__icon" />
  businessIcon = <FontAwesomeIcon icon={faBrain} className="feature_card__icon" />
  flexIcon = <FontAwesomeIcon icon={faCalendarAlt} className="feature_card__icon" />

  cards = [
    {icon: this.designIcon, title: 'Design', description: 'Create a website that strengthens your company\'s brand while ensuring ease of use and simplicity.'},
    {icon: this.remoteIcon, title: 'Teleworking', description: 'Availability to work remotely, I have worked remotly for more than two years.'},
    {icon: this.businessIcon, title: 'Business', description: 'Translating your business logics into secure and maintainable code.'},
    {icon: this.flexIcon, title: 'Flexibility', description: 'I\'m able to adapt my schedule to the project\'s needs'}
  ]

  skills: ISkill[] = [
    {name: 'Angular', level: 100},
    {name: 'React', level: 50},
    {name: 'Typescript', level: 75},
    {name: 'Javascript', level: 75},
    {name: 'Bootstrap', level: 75},
    {name: 'HTML/CSS', level: 100},
    {name: 'NodeJS', level: 50},
    {name: 'Python', level: 75},
    {name: 'Java', level: 100},
  ]

  years = new Date().getFullYear() - 2019;
  
  constructor(props: any) {
    super(props);
    this.skills.sort((a, b) => {
      return b.level - a.level;
    })
  }

  generateAnchor(link: string, text: string): JSX.Element {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">{text}</a>
    )
  }
  
  render() {
    return (
      <section id="about" className="container">
        <h2>ABOUT</h2>
        <div className="feauture__container row">
          {this.cards.map( i => {
            return (
              <div className="col col-lg-3 mb-4">
                <FeatureCard
                    icon={i.icon}
                    title={i.title}
                    description={i.description} />
              </div>
            )
            })
          }
        </div>
        <div className="personal_info__container row justify-content-center">
          <article className="col-12 col-lg-6">

            <div className="image__container">
              <img src={pp} alt="Selfie :)" />
            </div>
            <div className="text__container mt-3 px-3">
              <h3 className='text-center'>Who I am?</h3>
              <p className=''>I'm a full-stack developer for <a href="https://www.nttdata.com/" target="_blank" rel="noopener noreferrer"><strong>NTT DATA </strong></a> 
              since 2019 in Salamanca, Spain. During these {this.years} years I have been able to successfully face multiple challengers which range from developing
              a Landing Page, to leading an entire team, through the development of corporative web applications in which I have had the opportunity to experiment with technologies
              such as {this.generateAnchor('https://angular.io/', 'Angular')}, {this.generateAnchor('https://www.java.com/en/download/help/whatis_java.html', 'Java')},
              &nbsp;{this.generateAnchor('https://www.python.org/', 'Python')} and {this.generateAnchor('https://www.docker.com/', 'Docker')}.
              As you can see, I'm passionate about technology, I love creating new products and I enjoy its process.
              Also I like to share my knowledge with everyone, I'm an open book!.</p>
            </div>
          </article>
          <article className="col-12 col-lg-6 align-self-center">
            <div className="skills__container">
              <Skills skills={this.skills} />
            </div>
          </article>
        </div>
      </section>
    )
  }
}

export default About
