import { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, CardBody } from "react-bootstrap";
import { ArrowRightCircle, Download, ExclamationOctagon } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import ccat from '../img/cvsu.png'
import ama from '../img/ama.png'
import TrackVisibility from 'react-on-screen';
import '../css/Education.css'
import {motion, useInView, useMotionValueEvent, useScroll, useTransform} from 'framer-motion'

function educ(){
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
    <section className="education" id="education">
      <h1 className="education-header">Education / Work Experience</h1>
      <Container py={5}>
        <div className="main-timeline-2">

          <motion.div ref={ref1} animate={{x: isInView1 ? "0%" : "100%", opacity: isInView1 ? "100%" : "0%"}} transition={{ duration: 0.8, ease: "easeInOut" }} className="timeline-2 right-2">
            <Card>
              <CardBody p={4}>
                <h3 className="fw-bold">Datascope Communications (Phil), Inc.</h3>
                <h4>Software Programmer</h4>
                <p className="text-muted mb-4"><FontAwesomeIcon icon={faClock} /> 2023-2025</p>
                  <ul className="acheivement-lists">
                    <li>Debugged and developed high-performance C/C++ file validation program that processed hundreds of records per second, reducing manual output errors. </li>
                    <li>Automated data workflows and created validation reports using C#.NET and LINQ, improving efficiency for datasets containing millions of records. </li>
                    <li>Enhanced system reliability and optimized memory handling by integrating in-house DLLs and external libraries, reducing file output errors. </li>
                    <li>Created documentation efforts by creating SDLC process and flowcharts, improved team onboarding time. </li>

                  </ul>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div ref={ref2} animate={{x: isInView2 ? "0%" : "-100%", opacity: isInView2 ? "100%" : "0%"}} transition={{ duration: 0.8, ease: "easeOut" }}  className="timeline-2 left-2">
            <Card>
              <img src={ccat} className="card-img-top" alt="Responsive image"></img>
              <CardBody p={4}>
                <h3 className="fw-bold">Cavite State University</h3>
                <h4>Bachelor of Science in Information Technology</h4>
                <p className="text-muted mb-4"><FontAwesomeIcon icon={faClock} /> 2018-2023</p>
                  <ul className="acheivement-lists">
                    <li>Vice-President Lister</li>
                    <li>Cum Laude</li>
                  </ul>
              </CardBody>
            </Card>
          </motion.div>
        
          <motion.div ref={ref3} animate={{x: isInView3 ? "0%" : "100%", opacity: isInView3 ? "100%" : "0%"}} transition={{ duration: 0.8, ease: "easeOut" }} className="timeline-2 right-2">
            <Card>
              <img src={ama} className="card-img-top" alt="Responsive image"></img>
              <CardBody p={4}>
                <h3 className="fw-bold">AMA Cavite Campus</h3>
                <h4>ICT – Computer Programming</h4>
                <p className="text-muted mb-4"><FontAwesomeIcon icon={faClock} /> 2016-2018</p>
                  <ul className="acheivement-lists">
                    <li>Academic Excellence Award</li>
                  </ul>
              </CardBody>
            </Card>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}

export default educ;