import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../img/grad_pic.jpg";
import cv from "../files/Capricho, Michael Anthony L.pdf";
import { ArrowRightCircle, Download } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import '../css/Banner.css'
import {motion, useInView, useMotionValueEvent, useScroll, useTransform} from 'framer-motion'

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Developer", "Aspiring Full Stack Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  const handleDownload = (e) => {
    const link = document.createElement("a");
    link.href = cv; // relative to public folder 
    link.download = "Capricho, Michael Anthony L.pdf"; // file name for download
    link.click();
    e.preventDefault(); 
  };


  return (
    <motion.div className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility> 
              {({ isVisible }) =>
              <motion.div 
                initial={{opacity: 0}} 
                whileInView={{opacity: 1}}
                viewport={{amount: "all"}}
                className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`I'm Mike`} <br></br> <span className="txt-rotate" data-rotate='[ "Software Developer", "Aspiring Full Stack Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I'm Mike, a Cum Laude graduate of Bachelor of Science in Information Technology with hands-on working experience as a Software Programmer. </p>
                  <button type="button" className="download-btn" onClick={() => handleDownload()}>Download CV <Download size={25} /></button>
              </motion.div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <TrackVisibility>
              {({ isVisible }) =>
                <motion.div initial={{opacity: 0}} 
                whileInView={{opacity: 1}}
                viewport={{amount: "all"}} className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" className="grad-pic"/>
                </motion.div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </motion.div>
  )
}

export default Banner;