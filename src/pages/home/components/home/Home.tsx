import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';
import OutlineBtn from '../../../../core/components/outline-btn/OutlineBtn';
import TypewriterText from '../typewriter-text/TypewriterText';

export class Home extends Component {
  icon = <FontAwesomeIcon icon={faArrowRight} />;

  render() {
    return (
      <div id="home-container" className="home_page__container">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <TypewriterText></TypewriterText>
              <div className="btn-container">
                <OutlineBtn text="View my work" icon={this.icon}/>
              </div>
            </div>
          </div>
        </div>
        <div className='light x1'></div>
        <div className='light x2'></div>
        <div className='light x3'></div>
        <div className='light x4'></div>
        <div className='light x5'></div>
        <div className='light x6'></div>
        <div className='light x7'></div>
        <div className='light x8'></div>
        <div className='light x9'></div>
      </div>
    )
  }
}

export default Home
