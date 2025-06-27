import { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, CardBody, Form } from "react-bootstrap";
import { ArrowRightCircle, Download, ExclamationOctagon } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import cSharp from '../img/csharp.png'
import dotNet from '../img/dotnet.png'
import cpp from '../img/c++.svg'
import js from '../img/javascript.png'
import htmlPng from '../img/html.png'
import cssPng from '../img/css.png'
import nodejsPng from '../img/nodejs.webp'
import jqueryPng from '../img/jquery.png'
import sqlPng from '../img/sql.png'
import firebasePng from '../img/firebase.png'
import apiPng from '../img/api.png'
import reacjsPng from '../img/reactjs.webp'
import TrackVisibility from 'react-on-screen';
import '../css/Skills.css'
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import {motion, stagger, transform, useInView, useMotionValueEvent, useScroll, useTransform} from 'framer-motion'


function skills(){
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

    const showcont = {
        show: {
            transition: {
                staggerChildren: .1,
            }
        }
    }

    const item = {
        hidden: {
            opacity: 0,
            y: 200
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [.6, .01, .05, .95],
                duration: 1.6
            }
        },
        exit: {
            opacity: 0,
            y: -200,
            transition: {
                ease: 'easeInOut',
                duration: .8
            }
        }
    }

    const item1 = {
        show: {
            opacity: 0,
            y: 0,
        }
    }
    
      return (
        <section className="skills" id="skills">
          <h1 className="skills-header">Skills</h1>
          <Container py={5}>
            <motion.div 
                    ref={ref1}
                    variants={showcont}
                    initial='hidden'
                    animate={isInView1 ? "show" : "hidden"}
                    exit='exit'>
            <MDBRow className='row-cols-1 row-cols-md-5 g-4'>
                
                    <MDBCol>
                        <motion.div variants={item}>
                            <MDBCard alignment="center" className="card-size">
                            <MDBCardImage
                                src={cSharp}
                                alt='C#'
                                position='top'
                                style={{objectFit: 'cover',  objectPosition: 'center', textAlign: 'center', width: '100px', height: '100px' }}
                            />
                            <MDBCardBody>
                                <MDBCardTitle>C#</MDBCardTitle>
                            </MDBCardBody>
                            </MDBCard>
                        </motion.div>
                    </MDBCol>

                    <MDBCol>
                        <motion.div variants={item}>
                            <MDBCard alignment="center" className="card-size">
                            <MDBCardImage
                                src={dotNet}
                                alt='.NET'
                                position='top'
                                style={{objectFit: 'cover',  objectPosition: 'center', textAlign: 'center', width: '100px', height: '100px' }}
                            />
                            <MDBCardBody>
                                <MDBCardTitle>.NET</MDBCardTitle>
                            </MDBCardBody>
                            </MDBCard>
                        </motion.div>
                    </MDBCol>

                    <MDBCol>
                        <motion.div variants={item}>
                            <MDBCard alignment="center" className="card-size">
                            <MDBCardImage
                                src={cpp}
                                alt='C++'
                                position='top'
                                style={{objectFit: 'cover',  objectPosition: 'center', textAlign: 'center', width: '100px', height: '100px' }}
                            />
                            <MDBCardBody>
                                <MDBCardTitle>C++</MDBCardTitle>
                            </MDBCardBody>
                            </MDBCard>
                        </motion.div>
                    </MDBCol>

                    <MDBCol>
                        <motion.div variants={item}>
                            <MDBCard alignment="center" className="card-size">
                            <MDBCardImage
                                src={js}
                                alt='JavaScript'
                                position='top'
                                style={{objectFit: 'cover',  objectPosition: 'center', textAlign: 'center', width: '100px', height: '100px' }}
                            />
                            <MDBCardBody>
                                <MDBCardTitle>JavaScript</MDBCardTitle>
                            </MDBCardBody>
                            </MDBCard>
                        </motion.div>
                    </MDBCol>

                    <MDBCol>
                        <motion.div variants={item}>
                            <MDBCard alignment="center" className="card-size">
                            <MDBCardImage
                                src={htmlPng}
                                alt='HTML'
                                position='top'
                                style={{objectFit: 'cover',  objectPosition: 'center', textAlign: 'center', width: '100px', height: '100px' }}
                            />
                            <MDBCardBody>
                                <MDBCardTitle>HTML</MDBCardTitle>
                            </MDBCardBody>
                            </MDBCard>
                        </motion.div>
                    </MDBCol>

                    <MDBCol>
                        <motion.div variants={item}>
                            <MDBCard alignment="center" className="card-size">
                            <MDBCardImage
                                src={cssPng}
                                alt='CSS'
                                position='top'
                                style={{objectFit: 'cover',  objectPosition: 'center', textAlign: 'center', width: '100px', height: '100px' }}
                            />
                            <MDBCardBody>
                                <MDBCardTitle>CSS</MDBCardTitle>
                            </MDBCardBody>
                            </MDBCard>
                        </motion.div>
                    </MDBCol>

                    <MDBCol>
                        <motion.div variants={item}>
                            <MDBCard alignment="center" className="card-size">
                            <MDBCardImage
                                src={nodejsPng}
                                alt='NodeJs'
                                position='top'
                                style={{objectFit: 'cover',  objectPosition: 'center', textAlign: 'center', width: '100px', height: '100px' }}
                            />
                            <MDBCardBody>
                                <MDBCardTitle>NodeJS</MDBCardTitle>
                            </MDBCardBody>
                            </MDBCard>
                        </motion.div>
                    </MDBCol>

                    <MDBCol>
                        <motion.div variants={item}>
                            <MDBCard alignment="center" className="card-size">
                            <MDBCardImage
                                src={jqueryPng}
                                alt='JQuery'
                                position='top'
                                style={{objectFit: 'cover',  objectPosition: 'center', textAlign: 'center', width: '100px', height: '100px' }}
                            />
                            <MDBCardBody>
                                <MDBCardTitle>JQuery</MDBCardTitle>
                            </MDBCardBody>
                            </MDBCard>
                        </motion.div>
                    </MDBCol>

                    <MDBCol>
                        <motion.div variants={item}>
                            <MDBCard alignment="center" className="card-size">
                            <MDBCardImage
                                src={sqlPng}
                                alt='SQL'
                                position='top'
                                style={{objectFit: 'cover',  objectPosition: 'center', textAlign: 'center', width: '100px', height: '100px' }}
                            />
                            <MDBCardBody>
                                <MDBCardTitle>SQL</MDBCardTitle>
                            </MDBCardBody>
                            </MDBCard>
                        </motion.div>
                    </MDBCol>

                    <MDBCol>
                        <motion.div variants={item}>
                            <MDBCard alignment="center" className="card-size">
                            <MDBCardImage
                                src={firebasePng}
                                alt='Firebase Database'
                                position='top'
                                style={{objectFit: 'cover',  objectPosition: 'center', textAlign: 'center', width: '100px', height: '100px' }}
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Firebase Database</MDBCardTitle>
                            </MDBCardBody>
                            </MDBCard>
                        </motion.div>
                    </MDBCol>

                    <MDBCol>
                        <motion.div variants={item}>
                            <MDBCard alignment="center" className="card-size">
                            <MDBCardImage
                                src={apiPng}
                                alt='API Integration'
                                position='top'
                                style={{objectFit: 'cover',  objectPosition: 'center', textAlign: 'center', width: '100px', height: '100px' }}
                            />
                            <MDBCardBody>
                                <MDBCardTitle>API Integration</MDBCardTitle>
                            </MDBCardBody>
                            </MDBCard>
                        </motion.div>
                    </MDBCol>

                    <MDBCol>
                        <motion.div variants={item}>
                            <MDBCard alignment="center" className="card-size">
                            <MDBCardImage
                                src={reacjsPng}
                                alt='ReactJS'
                                position='top'
                                style={{objectFit: 'cover',  objectPosition: 'center', textAlign: 'center', width: '100px', height: '100px' }}
                            />
                            <MDBCardBody>
                                <MDBCardTitle>ReactJS</MDBCardTitle>
                            </MDBCardBody>
                            </MDBCard>  
                        </motion.div>
                    </MDBCol>

                
            </MDBRow>
            </motion.div>
          </Container>
        </section>
      )
}

export default skills;