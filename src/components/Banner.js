import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/p3.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineer", "Full Stack Developer","Application Developer", "Software Programmer","Back-End Developer","Front-End Developer"];
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

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Praveen Kumar Thabjul  `} <br></br><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer", "Full Stack Developer"]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a Master's in Computer Science candidate at the University of Central Florida (3.89/4.00 GPA), Results-driven Full Stack Developer with 3+ years of experience in designing and deploying scalable web applications using Spring Boot, React, and AWS. Proven ability to architect microservices, integrate machine learning models, and implement secure, cloud-native solutions. Adept at leveraging Java, Python, and JavaScript across backend and frontend systems. Demonstrated excellence in delivering production-grade features using CI/CD, Docker, and Agile methodologies. Strong foundation in data analytics, DevOps, and cloud infrastructure, with a passion for building performance-optimized, user-centric applications.. Open to relocation.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <a href="https://www.linkedin.com/in/praveenkt2001/"><ArrowRightCircle size={25} /></a></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="d-flex justify-content-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""} >
                  <img src={headerImg} alt="Header Img" className="img-fluid" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
