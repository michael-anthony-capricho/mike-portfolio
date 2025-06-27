import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import fb from '../icons/facebook-app-symbol.png'
import ig from '../icons/instagram.png'
import linkedin from '../icons/linkedin.png'
import '../css/Navbar.css'

function BasicExample() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const onScroll = () =>{
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onscroll);

        return () => window.removeEventListener("scroll", onscroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    } 

  return (
    <Navbar collapseOnSelect expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">Mike</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink == 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#education" className={activeLink == 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education/Work Experience</Nav.Link>
            <Nav.Link href="#projects" className={activeLink == 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
            <Nav.Link href="#skills" className={activeLink == 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#contact-me" className={activeLink == 'contactme' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contactme')}>Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <span className='navbar-text'>
            <div className='social-icon'>
                <a><img src={fb}></img></a>
                <a><img src={ig}></img></a>
                <a><img src={linkedin}></img></a>
            </div>
          </span>
      </Container>
    </Navbar>
  );
}

export default BasicExample;