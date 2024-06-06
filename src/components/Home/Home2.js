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
      As an Electronics and Telecommunication Engineering student, I have developed a profound passion for programming and cutting-edge technologies. I have honed my skills in programming languages such as <i><b className="purple">C++, Kotlin, C#, and Dart</b></i>, with a particular emphasis on <i><b className="purple">Android app development using Kotlin</b></i>.
      <br />
      <br />
      My areas of interest span <i><b className="purple">building innovative Android technologies and products</b></i>, as well as delving into the realms of <i><b className="purple">open-source contributions and problem-solving</b></i>.
      <br />
      <br />
      Whenever an opportunity arises, I eagerly apply my expertise in <b className="purple">Kotlin Compose</b>, <i><b className="purple">Flutter</b></i>, and <i><b className="purple">REST APIs</b></i> to craft exceptional products that push the boundaries of what's possible. I thrive on tackling complex challenges, leveraging my strong foundation in problem-solving and digital skill sets to deliver innovative solutions.
      <br />
      <br />
      Alongside my technical pursuits, I actively contribute to the open-source community, fostering collaboration and knowledge-sharing. My goal is to continuously expand my horizons, stay updated with the latest advancements, and contribute to the ever-evolving technological landscape.
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
