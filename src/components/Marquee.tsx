import React from 'react';
import './Marquee.css';

import angularLogo from '../images/icons/angular.svg';
import bootstrapLogo from '../images/icons/bootstrap.svg';
import javascriptLogo from '../images/icons/javascript.svg';
import reactLogo from '../images/icons/react.svg';
import pythonLogo from '../images/icons/python.svg';
import javaLogo from '../images/icons/java.png';
import htmlLogo from '../images/icons/html5.png';
import cssLogo from '../images/icons/css3.png';
import djangoLogo from '../images/icons/django.png';
import sqlLogo from '../images/icons/sql.png';
import springLogo from '../images/icons/spring.svg';

export default function Marquee() {
  const logos = [
    angularLogo,
    bootstrapLogo,
    javascriptLogo,
    reactLogo,
    pythonLogo,
    javaLogo,
    htmlLogo,
    cssLogo,
    djangoLogo,
    sqlLogo,
    springLogo,
  ]
  
  return (
    <div>
      <div className="scroll-left">
        <div className="inner">
          {logos.map( logo => {
            return (
              <img src={logo} alt=""/>
            )
          })}
        </div>
      </div>
    </div>
  )
}
