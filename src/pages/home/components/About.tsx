import { faBrain, faCalendarAlt, faLaptopHouse, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react'
import FeatureCard from '../../../core/components/feature-card/FeatureCard';
import './About.scss';

export class About extends Component {
  designIcon = <FontAwesomeIcon icon={faPaintBrush} className="feature_card__icon" />
  remoteIcon = <FontAwesomeIcon icon={faLaptopHouse} className="feature_card__icon" />
  businessIcon = <FontAwesomeIcon icon={faBrain} className="feature_card__icon" />
  flexIcon = <FontAwesomeIcon icon={faCalendarAlt} className="feature_card__icon" />

  cards = [
    {icon: this.designIcon, title: 'Design', description: 'Create a website that strengthens your company’s brand while ensuring ease of use and simplicity.'},
    {icon: this.remoteIcon, title: 'Teleworking', description: 'Create a website that strengthens your company’s brand while ensuring ease of use and simplicity.'},
    {icon: this.businessIcon, title: 'Business', description: 'Translating your business logics into secure and maintainable code.'},
    {icon: this.flexIcon, title: 'Flexibility', description: 'Create a website that strengthens your company’s brand while ensuring ease of use and simplicity.'}
  ]
  
  render() {
    return (
      <section id="about" className="container">
        <h2>ABOUT</h2>
        <div className="feauture__container">
          {this.cards.map( i => {
            return <FeatureCard
                    icon={i.icon}
                    title={i.title}
                    description={i.description} />
            })
          }
        </div>
      </section>
    )
  }
}

export default About
