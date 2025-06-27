import { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, CardBody } from "react-bootstrap";
import { ArrowRightCircle, Download, ExclamationOctagon } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import webpos from '../img/webpos.png';
import portfolio from '../img/portfolio.png';
import TrackVisibility from 'react-on-screen';
import '../css/Projects.css';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import {motion, useInView, useMotionValueEvent, useScroll, useTransform} from 'framer-motion'


function project(){
    const ref1 = useRef(null); 
      const ref2 = useRef(null); 
      const ref3 = useRef(null); 
    
      const isInView1 = useInView(ref1, {
        amount: "100%",
      });
      const isInView2 = useInView(ref2, {
        amount: "100%"
      });
      const isInView3 = useInView(ref3, {
        amount: "100%"
      });
      return (
        <section className="projects" id="projects">
          <h1 className="projects-header">Projects</h1>
          <Container py={5}>
            <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                <MDBCol>
                    <motion.div ref={ref1} animate={{x: isInView1 ? "0%" : "-100%", opacity: isInView1 ? "100%" : "0%"}} transition={{ duration: 0.8, ease: "easeInOut" }}>
                        <MDBCard>
                            <MDBCardImage
                                src={webpos}
                                alt='WebPOS: Web-based Food Ordering System'
                                position='top'
                                style={{ width: '100%', height: '500px', objectFit: 'cover',  objectPosition: 'center' }}
                            />
                            <MDBCardBody>
                                <MDBCardTitle>WebPOS: Web-based Food Ordering System</MDBCardTitle>
                                <MDBCardText>
                                A web-based food ordering platform with QR code scanning and integrated online payments (PayPal, PayMongo). Features real-time inventory tracking and a Node.js + Firebase backend, serving 100+ daily users efficiently.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </motion.div>
                </MDBCol>
                <MDBCol>
                    <motion.div ref={ref1} animate={{x: isInView1 ? "0%" : "100%", opacity: isInView1 ? "100%" : "0%"}} transition={{ duration: 0.8, ease: "easeInOut" }}>
                        <MDBCard>
                            <MDBCardImage
                                src={portfolio}
                                alt='Portfolio'
                                position='top'
                                style={{ width: '100%', height: '500px', objectFit: 'cover',  objectPosition: 'center' }}
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Portfolio</MDBCardTitle>
                                <MDBCardText>
                                A personal portfolio website built with React.js as a learning project to explore modern front-end frameworks. Showcases my projects, skills, and experience in a clean, responsive design.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </motion.div>
                </MDBCol>
            </MDBRow>
          </Container>
        </section>
      )
}

export default project;