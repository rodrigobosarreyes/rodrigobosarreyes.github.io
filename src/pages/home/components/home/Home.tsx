import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';
import { Link } from 'react-scroll';
import OutlineBtn from '../../../../core/components/outline-btn/OutlineBtn';
import Typewriter from 'typewriter-effect';
import './Home.scss';

export class Home extends Component {
  icon = <FontAwesomeIcon icon={faArrowRight} />;
  nouns = ['Rodrigo Bosarreyes', 'a Full-Stack Developer', 'a Software Designer', 'a Mentor'];

  render() {
    return (
      <div id="home-container" className="home_page__container">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <h1>I'm <Typewriter options={{strings: this.nouns, loop: true, autoStart: true}}></Typewriter></h1>
              <div className="btn-container">
                <Link activeClass="active" spy={true} smooth={true} duration={500} to='projects'>
                  <OutlineBtn text="View my work" icon={this.icon}/>
                </Link>
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
