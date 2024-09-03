import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
 return (
   <Card className="quote-card-view">
     <Card.Body>
       <blockquote className="blockquote mb-0">
         <p style={{ textAlign: "justify" }}>
         I am <span className="purple">Vikas Chaudhary</span>, a passionate Engineer with a background in electronics engineering and a keen interest in Android development, firmware design, and system optimization.
         <br />
         <br />
         My journey has led me to contribute to impactful projects at renowned organizations like 
      <span className="purple"> ISRO</span>, where I developed firmware for atmospheric research instruments, <span className="purple"> ASF Insignia</span> where I supported daily operations through system monitoring and fault diagnosis, while collaborating with interdisciplinary teams toapply electronics engineering principles and 
      <span className="purple"> Approids Technologies</span>, where I built robust Android applications utilizing real-time data synchronization and advanced backend integration.
           <br />
           <br />
           As a proactive leader, I have successfully guided teams to excel in national hackathons like the 
      <span className="purple"> Smart India Hackathon</span>, driving innovative solutions in high-pressure environments. My technical proficiency spans across multiple programming languages and tools, including 
      <span className="purple">  Kotlin, C++, Firebase</span>, and embedded systems, allowing me to tackle complex challenges with creativity and efficiency.
         
         <br />
         <br/>
        
      Currently pursuing my <span className="purple">Bachelor of Technology in Electronics</span> from 
      <span className="purple">Harcourt Butler Technical University</span>, I am committed to continuous learning and applying my skills to develop scalable, user-centric software solutions. I am eager to explore new opportunities where I can make a significant impact through technology and innovation.
    </p>
    <h3>Past Experience</h3>
         <ul>
             <li className="about-activity">
             <ImPointRight /> Project Intern at ISRO, VSSC, SPL.  
           </li>
            
           <li className="about-activity">
             <ImPointRight /> Intern at Approids Technologies.    
           </li>
              
           <li className="about-activity">
             <ImPointRight /> Intern at ASF Insignia.
           </li>
              
           <li className="about-activity">
             <ImPointRight /> Team Lead for Smart India Hackathon '23, GOI.    
           </li>
          
         </ul>
         <h3>Extracurriculars</h3>
         <ul>
             <li className="about-activity">
             <ImPointRight /> Android Lead at GDSC.  
           </li>
            
           <li className="about-activity">
             <ImPointRight /> Event Organizer for Techathon and Hacktoberfest '23.    
           </li>
              
           <li className="about-activity">
             <ImPointRight /> Publicity Head at Association of Electronics Engineers (AETE).
           </li>
              
           <li className="about-activity">
             <ImPointRight /> Team Lead at Build For Bharat, ONDC    
           </li>
          
         </ul>
         <p style={{ textAlign: "justify" }}>
           Alongside my technical pursuits, I'm passionate about
         </p>
         <ul>
           <li className="about-activity">
             <ImPointRight /> Digital Marketing
           </li>
            <li className="about-activity">
             <ImPointRight /> Sales
           </li>
           <li className="about-activity">
             <ImPointRight /> Music
           </li>
           <li className="about-activity">
             <ImPointRight /> Traveling
           </li>
           <li className="about-activity">
             <ImPointRight /> Painting & Sketching
           </li>
         </ul>
         <p style={{ color: "rgb(155 126 172)" }}>
           "Not to throw the towel till the result is there"{" "}
         </p>
         <footer className="blockquote-footer">M.S Dhoni</footer>
       </blockquote>
     </Card.Body>
   </Card>
 );
}

export default AboutCard;
