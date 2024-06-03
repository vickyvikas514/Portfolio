import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
 return (
   <Card className="quote-card-view">
     <Card.Body>
       <blockquote className="blockquote mb-0">
         <p style={{ textAlign: "justify" }}>
           Hello there! I'm <span className="purple">Vikas Chaudhary</span>, an
           Electronics and Telecommunication Engineering student from
           Ghaziabad, India. Currently pursuing my Bachelor's degree at
           Harcourt Butler Technical University, Kanpur, I have a keen passion
           for telecommunications, embedded systems, and cutting-edge
           technologies.
           <br />
           <br />
           Throughout my academic journey, I've had the privilege of leading
           and contributing to various projects and initiatives. As the{" "}
           <span className="purple">Android Lead</span> at the Google Developer
           Student Club (GDSC) at HBTU, I've been instrumental in fostering an
           Android culture on campus and spearheading collaborative projects in
           the domain.
         </p>
         <ul>
             <li className="about-activity">
             <ImPointRight /> Gained valuable experience through internships,
             such as creating a user-specific Android app using Firebase, APIs,
             and other technologies at <span className="purple">Approids</span>
             .
           </li>
            <div style={{ marginBottom: '1rem' }}>
           <li className="about-activity">
             <ImPointRight /> Reached the grand finale of the prestigious{" "}
             <span className="purple">Smart India Hackathon '23</span>, where I
             led a team of six members from diverse backgrounds.
           </li>
              <div style={{ marginBottom: '1rem' }}>
           <li className="about-activity">
             <ImPointRight /> Actively participated in hackathons like{" "}
             <span className="purple">BuildForBharat</span>, organized by ONDC,
             where I contributed to innovative solutions for optimizing
             databases for merchants and customers.
           </li>
              <div style={{ marginBottom: '1rem' }}>
           <li className="about-activity">
             <ImPointRight /> Organized events like{" "}
             <span className="purple">Techathon and Hacktoberfest '23</span>,
             promoting innovation and open-source culture within the tech
             community.
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
             <ImPointRight /> Listening to Music
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
