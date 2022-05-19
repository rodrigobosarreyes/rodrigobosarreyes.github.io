import { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-scroll";

export class HomeNavbar extends Component {
  links = [
    {label: 'Home', link: 'home-container'},
    {label: 'About', link: 'about'},
    {label: 'Projects', link: 'projects'},
    {label: 'Blog', link: 'blog'},
    {label: 'Contact', link: 'contact'}
  ];
  
  constructor(props: any) {
    super(props);
    window.onscroll = () => {
      const home = document.getElementById('home-container') || {offsetHeight: 0} ;
      if (window.scrollY > home.offsetHeight) {
        document.getElementById('home-navbar')?.classList.add('fixed-top');
        const navbarHeight = document.getElementById('home-navbar')?.offsetHeight;
        document.body.style.paddingTop = navbarHeight + 'px';
      } else {
        document.getElementById('home-navbar')?.classList.remove('fixed-top');
        document.body.style.paddingTop = '0';
      }
    }
  }
  
  render() {
    return (
      <div className="home_navbar__container bg-dark">
        <style type="text/css">
          {`
          .my-link {
            padding: 0 15px;
            color: white;
            font-weight: 400;
            text-decoration: none;
          }
          .my-link:hover,
          .my-link.active {
            color: #c7493a;
            font-weight: 600;
            text-decoration: none;
          }
          `}
        </style>
        <div className="container navbar-container">
          <Navbar bg="dark" expand="lg" id="home-navbar" variant="dark" style={{ fontSize: '1.7rem' }}>
            <Navbar.Brand href="#" style={{ fontSize: '1.7rem' }}>Rodrigo Bosarreyes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {this.links.map( link => (
                  <Nav.Link key={link.link}><Link className='my-link' activeClass="active" spy={true} smooth={true} duration={500} to={link.link}>{link.label}</Link></Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    )
  }
}

export default HomeNavbar
