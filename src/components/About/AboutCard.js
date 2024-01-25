import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">VIKAS CHAUDHARY </span>
            from  GHAZIABAD, India.
            <br /> I am a pre-final year student pursuing Bachelor of Technology
            in <span className="purple">Electronics and Telecommunication </span> at HBTU Kanpur.
            <br />
            Additionally, I am the <span className="purple"> Android Lead at GDSC </span>, HBTU Kanpur. Reached the final round of <span className="purple"> SIH'23 </span> and uses various coding platforms to improve my problem solving skills.
            <br />
            <br />
            Apart from Tech, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Digital Marketing
            </li>
            <li className="about-activity">
              <ImPointRight /> Listning Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling


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
