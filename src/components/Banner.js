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
                <h1>{`Hi! I'm Praveen K T  `} <br></br><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer", "Full Stack Developer"]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a software engineer with expertise in full-stack development, data science, and cloud technologies, proficient in Python, JavaScript, Java, C++, and Golang. I am currently pursuing a Master's in Computer Science at the University of Central Florida (UCF) with a 3.889 GPA, where I work as a Graduate Assistant, developing a cloud-based research data portal and implementing ML-based student analytics dashboards. Previously, I interned at CVS Health, where I contributed to API security, real-time prescription tracking, and optimizing the performance of the patient portal. As an ML Engineer at Young Minds Technology Solutions, I improved customer segmentation, automated chatbot responses, and built fraud detection systems. Additionally, I have earned certifications in AWS, GraphQL, and Secure Authentication, and I have published research in deep learning security.</p>
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
