// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import devfest from "../../Assets/Projects/devfest.png";
// import qwen2 from "../../Assets/Projects/qwen2.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import ai_size from "../../Assets/Projects/ai size .png";

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={qwen2}
//               isBlog={false}
//               title="Product-Size-and-Weight-Detection-from-E-commerce-Images"
//               description="Product-Size-and-Weight-Detection-from-E-commerce-Images"
//               ghLink="https://github.com/jayam30/Product-Size-and-Weight-Detection-from-E-commerce-Images"
//               demoLink="https://chatify-49.web.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={ai_size}
//               isBlog={false}
//               title="AI Size Generator"
//               description="AI-Powered-Size-Chart-Generator"
//               ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
//               demoLink="https://blogs.soumya-jit.tech/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={devfest}
//               isBlog={false}
//               title="Editor.io"
//               description="io_extended_patna_23"
//               ghLink="https://github.com/jayam30/io_extended_patna_23"
//               demoLink="https://editor.soumya-jit.tech/"              
//             />
//           </Col>

//           {/* <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={leaf}
//               isBlog={false}
//               title="Plant AI"
//               description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
//               ghLink="https://github.com/soumyajit4419/Plant_AI"
//               demoLink="https://plant49-ai.herokuapp.com/"
//             />
//           </Col> */}

//           {/* <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={suicide}
//               isBlog={false}
//               title="Ai For Social Good"
//               description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
//               ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
//               // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
//             />
//           </Col> */}

//           {/* <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={emotion}
//               isBlog={false}
//               title="Face Recognition and Emotion Detection"
//               description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
//               Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
//               ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
//               // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
//             />
//           </Col> */}
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import devfest from "../../Assets/Projects/devfest.png";
import qwen2 from "../../Assets/Projects/qwen2.png";

import ai_size from "../../Assets/Projects/ai_size.png";
import charger_dashboard from "../../Assets/Projects/charger_dashboard.png";
import dash_dynamics from "../../Assets/Projects/dash_dynamics.png";
import global_crypto from "../../Assets/Projects/global_crypto.png";
import voting from "../../Assets/Projects/voting.png";

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
              imgPath={dash_dynamics}
              isBlog={false}
              title="Dash Dynamics Website"
              description="Charger Dashboard Smart Monitoring for Wireless EV Charging

Experience seamless **real-time monitoring and control with our Charger Dashboard. Designed for wireless EV charging stations, it provides instant updates on charging status, battery percentage, and efficiency.  

🔹 Live Charging Updates Powered by Node.js, WebSockets, and ESP32, ensuring real-time synchronization.  
🔹 Smart Integration Communicates directly with the **EVs Battery Management System (BMS) for accurate tracking.  
🔹User-Friendly Interface Intuitive design for effortless monitoring and control.  

Upgrade to a smarter, more efficient** charging experience!"
              ghLink="#" // Add GitHub link if applicable
              demoLink="https://www.dashdynamic.in/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={global_crypto}
              isBlog={false}
              title="Global Crypto Stats"
              description="A web application that provides real-time cryptocurrency market data, including price trends and stats  Our Crypto Exchange Platform provides a secure, fast, and intuitive environment for trading a wide range of digital assets. With cutting-edge security features, real-time market data, and a user-friendly interface, we ensure a seamless trading experience for both beginners and experienced traders.

Wide Range of Cryptocurrencies Access a diverse selection of popular digital assets for trading.
Advanced Security Industry-leading encryption and security measures to protect your funds and personal information.
Real-Time Market Data Track market trends and price movements with live updates for informed decision-making.
Easy-to-Use Interface Streamlined design for both novice and seasoned traders, making cryptocurrency trading simple and efficient.

Trade confidently with a platform designed for speed, security, and seamless user experience."
              ghLink="#" // Add GitHub link if applicable
              demoLink="https://novapaydb.netlify.app/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={charger_dashboard}
              isBlog={false}
              title="Charger Dashboard"
              description="**Charger Dashboard Real-Time EV Charging Monitoring**  

The Charger Dashboard is an advanced real-time monitoring system for **wireless EV charging stations**. It features a **Node.js backend with Express and WebSockets** for instant data synchronization between the **EV’s Battery Management System (BMS)** and the **frontend UI**. The **ESP32** communicates live charging updates to the server, ensuring accurate tracking of **charging percentage, status, and efficiency**. This seamless integration enhances user experience by providing real-time insights and control over the charging process."
              ghLink="https://github.com/jayam30/CHARGER_DASHBOARD"
              demoLink="https://charger-dashboard-pied.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devfest}
              isBlog={false}
              title="Editor.io"
              description="An advanced text editor built with modern web technologies, featuring real-time collaboration and markdown support."
              ghLink="https://github.com/jayam30/io_extended_patna_23"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ai_size}
              isBlog={false}
              title="AI Size Chart Generator"
              description="A tool that generates accurate size charts for apparel sellers using AI to reduce return rates and improve customer satisfaction."
              ghLink="https://github.com/jayam30/AI-Size-Chart-Generator"
              demoLink="#" // Add actual demo link if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qwen2}
              isBlog={false}
              title="Product Size & Weight Detection"
              description="An AI-powered solution to estimate the size and weight of e-commerce products using image processing and deep learning."
              ghLink="https://github.com/jayam30/Product-Size-and-Weight-Detection-from-E-commerce-Images"
              demoLink="#" // Add actual demo link if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voting}
              isBlog={false}
              title="Online Voting System"
              techStack="PHP, MySQL, HTML, CSS"
              description="A secure online voting system where registered voters can cast their votes using their unique Voter ID. The system ensures registration is done by the administrator and provides voting services to authenticated users.."
              ghLink="https://github.com/jayam30/Online-Voting-System"
              demoLink="#" // Add actual demo link if available
            />
          </Col>
          

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
