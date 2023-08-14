import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/caroline.png";
import chatify from "../../Assets/Projects/Alhikmah.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/POS.png";
import Craft from "../../Assets/Projects/craftamaid.png";
import cyclo from "../../Assets/Projects/Cyclofans.png";
import dap from "../../Assets/Projects/Dapscocialy.png";
import deal from "../../Assets/Projects/deal4trip.png";
import edu from "../../Assets/Projects/eduaus.png";
import jump from "../../Assets/Projects/Jumpnation.png";
import nova from "../../Assets/Projects/nova.png";
import nvc from "../../Assets/Projects/NVC.png";
import patio from "../../Assets/Projects/patio.png";
import prime from "../../Assets/Projects/Prime NYC.png";
import komerce from "../../Assets/Projects/vkommerce.png";
import vnpk from "../../Assets/Projects/VN.pk.png";
import vncom from "../../Assets/Projects/vn.com.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Alhikma International"
              description="I've created an enriching Islamic website on WordPress, dedicated to daily Khutbaat and thought-provoking videos. Embark on a journey of spiritual growth as we delve into insightful content together, nurturing a deeper connection with faith and understanding."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="http://alhikmahinternational.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Virtuentez POS"
              description="I've meticulously designed a modern POS software using Tailwind CSS. This intuitive system streamlines point-of-sale operations with efficiency and style. Experience seamless transactions and elegant UI, making business management a breeze."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Dr Caroline Osman"
              description="Created a doctor's website, providing a user-friendly interface to access vital medical services and information. This digital hub facilitates easy appointment scheduling, offers insightful medical content, and ensures a seamless user experience."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://drcarolineosman.com/en/dr-caroline-osman/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Craft}
              isBlog={false}
              title="Craft A Maid"
              description="Experience convenience and cleanliness with our Singapore maid services website. I've designed a platform that streamlines the booking of cleaning appointments, providing top-notch household care."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://craftamaid.com.sg/"              
            />
          </Col> 
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cyclo}
              isBlog={false}
              title="Cyclo Fans"
              description="I've developed a platform dedicated to showcasing and distributing high-quality cyclofan solutions for various industries.Made a seemless guaranteeing effortless exploration and efficient purchasing of essential industrial equipment"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://cyclo.softinfotechsolutions.com/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dap}
              isBlog={false}
              title="Dapsocially"
              description="I created this website  to provide innovative services encompassing live social broadcasts, dynamic digital signage, and impactful TV billboards."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://dapsocially.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deal}
              isBlog={false}
              title="Deals 4 Trip"
              description="I meticulously designed this travel agency website, seamlessly connecting wanderers with their dream destinations. Experience the world through our user-friendly interface and curated travel offerings."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://deals4trip.com/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edu}
              isBlog={false}
              title="EDU Australia"
              description="I played an integral role in crafting the online presence of EDU Australia, showcasing its educational excellence. Empowering students worldwide to pursue knowledge through an intuitive virtual gateway."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://virtuehost.net/clients/edu-australia/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jump}
              isBlog={false}
              title="Jump Nation"
              description="I contributed to the creation of the JumpNation website, an exhilarating amusement park in the UAE. Sharing boundless joy and heart-pounding adventures through our digital platform."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://jumpnation.ae/"              
            />
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nova}
              isBlog={false}
              title="Nova Institute"
              description="At Nova Institute, an esteemed Australian university, I played a pivotal role in establishing the website. Empowering students to embark on a journey of academic excellence and future possibilities through our digital platform."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://nit.edu.au/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nvc}
              isBlog={false}
              title="Nova Vocational College"
              description="Shaping the digital presence of NOVA Vocational College was my endeavor. Our website opens doors for students to immerse in hands-on learning and skill enhancement opportunities"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="http://nvc.edu.au/"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={patio}
              isBlog={false}
              title="Patio Screens by Holmes"
              description="In the realm of e-commerce, I masterminded a Woocommerce website specializing in premium patio screens. Elevating outdoor living by offering quality and style through our online store."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://patioscreensbyholmes.com/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prime}
              isBlog={false}
              title="Prime NYC Domains"
              description="I spearheaded the creation of a domain marketplace, where digital identities find their home. Explore and secure your online presence through our platform, simplifying the path to virtual success."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://primedomains.nyc/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={komerce}
              isBlog={false}
              title="Vkommerce"
              description="As a driving force behind an e-commerce powerhouse specializing in Shopify, I contributed to crafting seamless online retail experiences. Empowering businesses with top-tier Shopify and e-commerce solutions."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://vkommerce.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vnpk}
              isBlog={false}
              title="Virtuenetz Pakistan"
              description="Crafting the digital facade of a software development powerhouse, I architected the website on WordPress. Infusing it with high-speed functionality and top-tier SEO strategies, we stand as a beacon of technological expertise."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://virtuenetz.pk"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vncom}
              isBlog={false}
              title="Virtuenetz"
              description="As the architect behind a software firm's online presence, I harnessed React JS to sculpt a dynamic website. Leveraging WordPress as a versatile CMS, I seamlessly integrated blogs and services, epitomizing technical prowess."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://virtuenetz.com"              
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
