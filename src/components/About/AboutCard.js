import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jayam Pandit</span> from{" "}
            <span className="purple">Bhopal, India.</span>
            <br />
            I am passionate about <span className="purple">Product Management, AI/ML, and Startups</span>, with hands-on experience in{" "}
            <span className="purple">building scalable AI-driven products</span> and working at the intersection of <span className="purple">technology and business strategy</span>.
            <br />
            <br />
            🎓 I am currently pursuing a <span className="purple">B.Tech in Mechatronics</span> from{" "}
            <span className="purple">IIIT Bhagalpur (Graduating 2025)</span>.
            <br />
            📌 I have experience working in product and tech roles, leading teams, and solving critical business problems.
            <br />
            🚀 I built multiple AI-powered products, including an <span className="purple">AI-based size chart generator</span> and an <span className="purple">e-commerce platform for artisans</span>.
            <br />
            <br />
            <strong>Some of my recent experiences:</strong>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Associate Product Management Intern at <span className="purple">Roomzy</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> Built an AI-driven e-commerce solution for <span className="purple">Flipkart</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> Developed a crowdfunding platform for <span className="purple">IIITM ROTARACT Club</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> Led market research, talking to 1000+ customers before launching MVPs
            </li>
          </ul>

          <br />
          <p style={{ textAlign: "justify" }}>
            Besides my professional journey, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🚀 Entrepreneurship & Startups
            </li>
            <li className="about-activity">
              <ImPointRight /> 🤖 AI & Robotics
            </li>
            <li className="about-activity">
              <ImPointRight /> 📖 Reading & Philosophy
            </li>
            <li className="about-activity">
              <ImPointRight /> ✈️ Traveling & Exploring Cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", fontWeight: "bold" }}>
            "Build products that make a difference and solve real-world problems!"
          </p>
          <footer className="blockquote-footer">Jayam Pandit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

