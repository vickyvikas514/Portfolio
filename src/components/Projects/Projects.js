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
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
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
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              /*imgPath={editor}*/
              isBlog={false}
              title="Jumbly"
              description="This application necessitates an Android device for a firsthand
              experience. It offers an organized and visually pleasing compendium
              of diverse words, currently presented in a scrambled format. Your
              objective is to unscramble these words, enhancing your score in the
              process. Progressing through words updates your score, and you can
              gauge your performance at the end. Scores dynamically adjust as you
              solve or skip words, with an option to view correct answers. Feel free
              to explore."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              /*imgPath={leaf}*/
              isBlog={false}
              title="Your Inventory"
              description="This Android application showcases its functionality exclusively on
              Android devices. Serving as an inventory management tool, it enables
              users to seamlessly update their temporary in-app inventory by
              adding or removing items. Users can effortlessly augment their
              inventory with item details like pricing and stock levels. The app
              incorporates an internal database accessible through SQL, facilitating
              developer-controlled modifications."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
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
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
