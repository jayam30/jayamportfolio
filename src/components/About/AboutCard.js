import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jayam Pandit</span>
            from <span className="purple"> Bhopal.</span>
            <br />
            I am looking for an opportunity where i can contribute with my skills.
            <br />
            I have completed B.Tech in Mechatronics from Indian Institute of Information Technology Bhagalpur (2025)
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Entrepreneurship
            </li>
            <li className="about-activity">
              <ImPointRight /> Philosophical
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jayam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
