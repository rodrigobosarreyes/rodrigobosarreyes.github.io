import React, { Component } from 'react';
import './HomePage.scss';
import About from './components/About';
import Home from './components/home/Home';
import HomeNavbar from './components/navbar/HomeNavbar';
import Projects from './components/projects/Projects';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';

export class HomePage extends Component {
  render() {
    
    return (
      <div>
        <Home />
        <main>
          <HomeNavbar />
          <About />
          <Projects />
          <Blog />
          <Contact />
        </main>
      </div>
    )
  }
}

export default HomePage;
