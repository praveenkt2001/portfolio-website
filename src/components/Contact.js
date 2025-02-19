import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { CONTACT } from "../constants/index1";
import { motion } from 'framer-motion';
export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
           
          <div className="flex justify-center items-center">
      {/* Centered container for content */}
      <div className="w-full max-w-7xl px-6">
        {/* Section Title */}
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl font-semibold text-white"
        >
          Get in Touch
        </motion.h1>

        {/* Flexbox Container for Contact Details */}
        <div className="flex justify-center items-center text-center lg:text-left mt-6">
          {/* Contact Information Section */}
          <div className="flex flex-col justify-center items-center lg:items-start">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="my-4 text-neutral-300"
            >
              {CONTACT.address}
            </motion.p>

            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="my-4 text-neutral-300"
            >
              {CONTACT.phoneNo}
            </motion.p>

            <motion.a
              href={`mailto:${CONTACT.email}`}
              whileHover={{ scale: 1.1, color: '#8b5cf6' }}
              transition={{ duration: 0.3 }}
              className="text-neutral-300 border-b-2 border-neutral-500 hover:border-purple-500 transition-all"
            >
              {CONTACT.email}
            </motion.a>
          </div>
        </div>
      </div>
    </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
