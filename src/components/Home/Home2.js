import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/vikas.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
  <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
      LET ME <span className="purple"> INTRODUCE </span> MYSELF
    </h1>
    <p className="home-about-body">
    As an <i><b className="purple">Electronics Engineering</b></i> student with a strong foundation in programming, 
    I specialize in Android development using <i><b className="purple"> Kotlin</b></i> and embedded systems design. 
    <br/>
    <br/>
    I have experience working on impactful projects at <i><b className="purple">ISRO</b></i> and leading teams in 
    national hackathons like the <i><b className="purple">Smart India Hackathon</b></i>, 
    where I developed innovative solutions under high-pressure environments.
      <br />
      <br />
      My areas of interest span <i><b className="purple">building innovative Android technologies and products</b></i>, as well as delving into the realms of <i><b className="purple">open-source contributions and problem-solving</b></i>.
      <br />
      <br />

      My skills include <i><b className="purple">C++, Kotlin, Firebase, and API integration</b></i>, 
      with a passion for building scalable, user-centric applications. 
      I am dedicated to continuous learning and actively contribute to 
      the open-source community, aiming to stay at the forefront of 
      technological advancements and drive innovation in software development.
    </p>
  </Col>
  <Col md={4} className="myAvtar">
    <Tilt>
      <img src={myImg} className="img-fluid" alt="avatar" />
    </Tilt>
  </Col>
</Row>
          <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vickyvikas514"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/vickyvikas514"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="http://www.linkedin.com/in/vickyvikas514"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vickyvikas514/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
