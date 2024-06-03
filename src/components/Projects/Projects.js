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
              title="KAMRE"
              description={
                <ul>
                    <li>
                    Drove the creation of an intuitive <span className="purple">room rental app</span>, 
                    facilitating smooth interactions between property owners and tenants.
                </li>
                <li>
                Engineered <span className="purple">real-time chat </span>functionality, ensured 
                cross-platform versatility, and optimized database operations. 
                The <span className="purple">"Liked Rooms"</span> feature empowers users to bookmark preferences.
                </li>
                <li>
                This app particularly benefits <span className="purple">individuals unable to afford 
                traditional brokerage fees</span>, offering an inclusive platform for seamless and affordable room searches.
                </li>
                <li>
                My contribution enhanced user experience and broadened 
                accessibility in the competitive realm of property rental applications.
                </li>
                </ul>
              }
              ghLink="https://github.com/vickyvikas514/ToRento"
              demoLink="https://drive.google.com/drive/folders/1K75w5GR9Fr5TeTMNLv9jiLRV_wqJLQd8?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              /*imgPath={chatify}*/
              isBlog={false}
              title="Service Founder"
              description={
                <ul>
                    <li>
                    Participated in <span className="purple">BuildForBharat Hackathon</span>, a dynamic and collaborative event 
focused on innovative solutions for optimizing the database for merchant and 
customers in terms of pin code.
                </li>
                <li>
                Contributed to the development of a cutting-edge solution that leverages a 
                <span className="purple">sophisticated algorithm to seamlessly connect an Android mobile app with a 
Firebase database</span>. Successfully validated the solution through rigorous testing, 
ensuring robustness and efficiency.
                </li>
                <li>
                Demonstrated the comprehensive platform's capabilities in a live presentation, 
highlighting <span className="purple">seamless integration, user authentication, and real-time data 
retrieval</span>. This experience showcased adaptability, problem-solving skills, and a 
collaborative approach in a fast-paced and competitive coding environment.
                </li>
                </ul>
              }
              ghLink="https://github.com/vickyvikas514/BuildForBharat"
              demoLink="https://drive.google.com/drive/folders/1kbIzGjW_j5T5DX3plYsWrqyizlSeReEU?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              /*imgPath={chatify}*/
              isBlog={false}
              title="NEWSaMania"
              description={
                <ul>
                    <li>
                    Discover a new era of <span className="purple">news on Android</span>.
              Access headlines, and explore stories effortlessly.
              Immerse in a world of information with a
              tap. Stay informed, effortlessly.
                </li>
                <li>
                Try now for an immersive news
              journey that brings the world to your fingertips.
                </li>
              
                </ul>
              }
            
              ghLink="https://github.com/vickyvikas514/NEWSaMania"
              demoLink="https://drive.google.com/drive/folders/1nXVYc18uqLDSRRXckiCyzZVW3V7_gAWC?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              /*imgPath={leaf}*/
              isBlog={false}
              title="DevByte"
              description={<ul>
                <li>
                This Android application showcases its functionality exclusively on
              Android devices. Introducing our app, DevByte your ultimate 
              companion for <span className="purple">organized access to Google Developers' channel 
              content</span>.
            </li>
            <li>
            DevByte curates playlists from Google Developers, <span className="purple">delivering their 
              insightful videos in a structured, easy-to-navigate manner</span>.
            </li>
            <li>
            Whether you're a seasoned developer or a beginner, 
              you can explore topics efficiently, enhancing your learning experience.
            </li>
          
            </ul>}
            
              ghLink="https://github.com/vickyvikas514/DevBytes-app-"
              demoLink="https://drive.google.com/drive/folders/1uq57gIFLgkKIrHM72kAbTa2s6nxa74bT?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              /*imgPath={bitsOfCode}*/
              isBlog={false}
              title="WordoPedia"
              description={<ul>
                <li>
                This application, optimized for Android phones, showcases an 
                <span className="purple">interactive alphabet-based interface</span>. Each alphabet section hosts an
              encyclopedia of words commencing with that letter.
            </li>
            <li>
            A simple tap
              directs users to corresponding web searches.
            </li>
            <li>
            Experience and
              evaluate the app's unique functionality.
            </li>
          
            </ul>}
              
              ghLink="https://github.com/vickyvikas514/word_game"
              demoLink="https://drive.google.com/drive/folders/1BQ2mIysGmRaVEn38OYU4WSNnzFu-8uzA?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Digital Alarm Clock"
              description={
                <ul>
                  <li>
                    Engineered a customizable <span className="purple">digital alarm clock</span> using an 8086 microprocessor, showcasing its versatility in real-world applications.
                  </li>
                  <li>
                    This project ranked among the <span className="purple">Top 5%</span> in the branch, demonstrating exceptional technical proficiency and problem-solving skills.
                  </li>
                </ul>
              }
              // Add your GitHub link and demo link if available
              ghLink="https://drive.google.com/file/d/1hEvOTK5rn7e-CjbPeOUG-uJlfHSyZShA/view"
              demoLink="https://drive.google.com/file/d/1hEvOTK5rn7e-CjbPeOUG-uJlfHSyZShA/view"
            />
          </Col>
                

          <Col md={4} className="project-card">
            <ProjectCard
              /*imgPath={editor}*/
              isBlog={false}
              title="IR Proximity Sensor"
              description={<ul>
                  <li>
                    Developed an innovative <span className="purple">IR proximity sensor</span> leveraging advanced technology for precise motion detection.
                  </li>
                  <li>
                    This project secured the <span className="purple">top rank</span> in the branch, showcasing exceptional technical proficiency and problem-solving skills.
                  </li>
                </ul>}
              
              ghLink="https://drive.google.com/file/d/1BauvqNTEkdpsAHz5590uLNKIP1OFXMAA/view?usp=drive_link"
              demoLink="https://drive.google.com/file/d/1BauvqNTEkdpsAHz5590uLNKIP1OFXMAA/view?usp=drive_link"              
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              /*imgPath={suicide}*/
              isBlog={false}
              title="WordXplore"
              description={<ul>
                <li>
                I successfully debuted in utilizing <span className="purple">Flutter and Dart</span> by creating a
              multiplatform word library app. Users can save liked words in your
              library.
            </li>
            
            </ul>}
               
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
