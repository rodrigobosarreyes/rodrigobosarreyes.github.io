import { Component } from 'react';
import './FeatureCard.scss';

type FeatureCardProps = {
  icon: any,
  title: string,
  description: string
}

export class FeatureCard extends Component<FeatureCardProps> {
  
  
  render() {
    return (
      <div className="card__container">
        <div className="icon__container">
          {this.props.icon}
        </div>
        <div className="title">
          {this.props.title}
        </div>
        <div className="description">
          {this.props.description}
        </div>
      </div>
    )
  }
}

export default FeatureCard
