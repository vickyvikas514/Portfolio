import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              /*imgPath={chatify}*/
              isBlog={false}
              title="NEWSaMania"
              description="Discover a new era of news on Android. Access headlines, and
              explore stories effortlessly. Immerse in a world of information with a
              tap. Stay informed, effortlessly. Try now for an immersive news
              journey that brings the world to your fingertips. Download and
              review the future of news consumption today"
              ghLink="https://github.com/vickyvikas514/NEWSaMania"
              demoLink="https://drive.google.com/drive/folders/1nXVYc18uqLDSRRXckiCyzZVW3V7_gAWC?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              /*imgPath={leaf}*/
              isBlog={false}
              title="DevByte"
              description="This Android application showcases its functionality exclusively on
              Android devices. Introducing our app, DevByte your ultimate companion for organized access to Google Developers' channel content. DevByte curates playlists from Google Developers, delivering their insightful videos in a structured, easy-to-navigate manner. Whether you're a seasoned developer or a beginner, you can explore topics efficiently, enhancing your learning experience."
              ghLink="https://github.com/vickyvikas514/DevBytes-app-"
              demoLink="https://drive.google.com/drive/folders/1uq57gIFLgkKIrHM72kAbTa2s6nxa74bT?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              /*imgPath={bitsOfCode}*/
              isBlog={false}
              title="WordoPedia"
              description="This application, optimized for Android phones, showcases an
              interactive alphabet-based interface. Each alphabet section hosts an
              encyclopedia of words commencing with that letter. A simple tap
              directs users to corresponding web searches. Experience and
              evaluate the app's unique functionality."
              ghLink="https://github.com/vickyvikas514/word_game"
              demoLink="https://drive.google.com/drive/folders/1BQ2mIysGmRaVEn38OYU4WSNnzFu-8uzA?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              /*imgPath={leaf}*/
              isBlog={false}
              title="Sportinfo"
              description="This application necessitates an Android device for a firsthand experience.Introducing our Sports Info App, a user-friendly layout representation of the Slide Pane design. Seamlessly explore a diverse list of sports with just a tap. By selecting a specific sport, you unlock a full detailed description.,"
              ghLink="https://github.com/vickyvikas514/Sporting"
              demoLink="https://drive.google.com/drive/folders/10bqFdq0SN1MEr0abwFd2RVFrwHOkWCpv?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              /*imgPath={editor}*/
              isBlog={false}
              title="Jumbly"
              description="This application necessitates an Android device for a firsthand experience. It offers an organized and visually pleasing compendium of diverse words, currently presented in a scrambled format. Your objective is to unscramble these words, enhancing your score in the process. Progressing through words updates your score, and you can gauge your performance at the end. Scores dynamically adjust as you solve or skip words, with an option to view correct answers. Feel free to explore."
              ghLink="https://github.com/vickyvikas514/Unscramble-the-words"
              demoLink="https://drive.google.com/drive/folders/1l7kOcYEIXCVStKSI8zB5WDLKNHB_ESTs?usp=drive_link"              
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              /*imgPath={suicide}*/
              isBlog={false}
              title="WordXplore"
              description="I successfully debuted in utilizing Flutter and Dart by creating a
              multiplatform word library app. Users can save liked words in your
              library."
              ghLink="https://github.com/vickyvikas514/First-Flutter-Project"
               demoLink="https://www.linkedin.com/posts/vickyvikas514_it-was-a-great-learning-experience-for-me-activity-7027161542458585088-ZM5S?utm_source=share&utm_medium=member_desktop" 
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
