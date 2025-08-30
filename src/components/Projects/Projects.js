import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/caroline.png";
import chatify from "../../Assets/Projects/Alhikmah.png";
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
import nhe from "../../Assets/Projects/nhe.png";
import ppm from "../../Assets/Projects/ppm.png";
import azgard from "../../Assets/Projects/azgard.png";
import debattle from "../../Assets/Projects/debattle.png";
import ganymede from "../../Assets/Projects/ganymede.png";
import metrix from "../../Assets/Projects/metrix.png";
import asab from "../../Assets/Projects/asab.png";
import ar from "../../Assets/Projects/AR.png";
import gforce from "../../Assets/Projects/GFORCE.png";
import adfluenced from "../../Assets/Projects/Adfluenced.png";
import autogarageseo from "../../Assets/Projects/AUTOGARAGESEO.png";
import mall from "../../Assets/Projects/mall.png";
import mts from "../../Assets/Projects/MTS.png";
import pgvillage from "../../Assets/Projects/pgvillage.png";
import mte from "../../Assets/Projects/mte.png";
import premiumtyres from "../../Assets/Projects/premiumtyres.png";
import gtyres from "../../Assets/Projects/gtyres.png";
import sc from "../../Assets/Projects/SC.png";
import hts from "../../Assets/Projects/HTS.png";
import antyres from "../../Assets/Projects/ANTYRES.png";
import tyresgiant from "../../Assets/Projects/tyresgiant.png";
import autoveto from "../../Assets/Projects/autoveto.png";
import pjtyres from "../../Assets/Projects/PJTYRES.png";
import discounttyres from "../../Assets/Projects/DISCOUNTTYRES.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Top 3 cards remain fixed */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ar}
              isBlog={false}
              title="AR Service Centre"
              description="I've developed a comprehensive automotive service website for AR Service Centre, providing car servicing, MOT testing, and repair services. This platform showcases their expertise in automotive care with a professional and user-friendly interface."
              demoLink="https://arservicecentre.co.uk"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gforce}
              isBlog={false}
              title="GForce Tyres"
              description="I've created a dynamic website for GForce Tyres, an RAC approved tyre and car service provider. This platform showcases their comprehensive automotive services with an intuitive design that helps customers find the right tyres and services."
              demoLink="https://gforcetyres.co.uk"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adfluenced}
              isBlog={false}
              title="Ad Fluence"
              description="I've developed a comprehensive influencer marketing platform that connects brands with content creators. This innovative solution streamlines collaboration and maximizes marketing impact through strategic partnerships."
              demoLink="https://adfluenced.co.uk"
            />
          </Col>

          {/* Shuffle the rest */}
          {(() => {
            // Array of remaining project card props
            const cards = [
              {
                imgPath: chatify,
                isBlog: false,
                title: "Alhikma International",
                description: "I've created an enriching Islamic website on WordPress, dedicated to daily Khutbaat and thought-provoking videos. Embark on a journey of spiritual growth as we delve into insightful content together, nurturing a deeper connection with faith and understanding.",
                demoLink: "http://alhikmahinternational.org/"
              },
              {
                imgPath: bitsOfCode,
                isBlog: false,
                title: "Virtuentez POS",
                description: "I've meticulously designed a modern POS software using Tailwind CSS. This intuitive system streamlines point-of-sale operations with efficiency and style. Experience seamless transactions and elegant UI, making business management a breeze."
              },
              {
                imgPath: editor,
                isBlog: false,
                title: "Dr Caroline Osman",
                description: "Created a doctor's website, providing a user-friendly interface to access vital medical services and information. This digital hub facilitates easy appointment scheduling, offers insightful medical content, and ensures a seamless user experience.",
                demoLink: "https://drcarolineosman.com/en/dr-caroline-osman/"
              },
              {
                imgPath: Craft,
                isBlog: false,
                title: "Craft A Maid",
                description: "Experience convenience and cleanliness with our Singapore maid services website. I've designed a platform that streamlines the booking of cleaning appointments, providing top-notch household care.",
                demoLink: "https://craftamaid.com.sg/"
              },
              {
                imgPath: cyclo,
                isBlog: false,
                title: "Cyclo Fans",
                description: "I've developed a platform dedicated to showcasing and distributing high-quality cyclofan solutions for various industries. Made a seamless guaranteeing effortless exploration and efficient purchasing of essential industrial equipment",
                demoLink: "https://cyclo.softinfotechsolutions.com/"
              },
              {
                imgPath: dap,
                isBlog: false,
                title: "Dapsocially",
                description: "I created this website to provide innovative services encompassing live social broadcasts, dynamic digital signage, and impactful TV billboards.",
                demoLink: "https://dapsocially.app/"
              },
              {
                imgPath: deal,
                isBlog: false,
                title: "Deals 4 Trip",
                description: "I meticulously designed this travel agency website, seamlessly connecting wanderers with their dream destinations. Experience the world through our user-friendly interface and curated travel offerings.",
                demoLink: "https://deals4trip.com/"
              },
              {
                imgPath: edu,
                isBlog: false,
                title: "EDU Australia",
                description: "I played an integral role in crafting the online presence of EDU Australia, showcasing its educational excellence. Empowering students worldwide to pursue knowledge through an intuitive virtual gateway.",
                demoLink: "https://virtuehost.net/clients/edu-australia/"
              },
              {
                imgPath: jump,
                isBlog: false,
                title: "Jump Nation",
                description: "I contributed to the creation of the JumpNation website, an exhilarating amusement park in the UAE. Sharing boundless joy and heart-pounding adventures through our digital platform.",
                demoLink: "https://jumpnation.ae/"
              },
              {
                imgPath: nova,
                isBlog: false,
                title: "Nova Institute",
                description: "At Nova Institute, an esteemed Australian university, I played a pivotal role in establishing the website. Empowering students to embark on a journey of academic excellence and future possibilities through our digital platform.",
                demoLink: "https://nit.edu.au/"
              },
              {
                imgPath: nvc,
                isBlog: false,
                title: "Nova Vocational College",
                description: "Shaping the digital presence of NOVA Vocational College was my endeavor. Our website opens doors for students to immerse in hands-on learning and skill enhancement opportunities",
                demoLink: "http://nvc.edu.au/"
              },
              {
                imgPath: patio,
                isBlog: false,
                title: "Patio Screens by Holmes",
                description: "In the realm of e-commerce, I masterminded a Woocommerce website specializing in premium patio screens. Elevating outdoor living by offering quality and style through our online store.",
                demoLink: "https://patioscreensbyholmes.com/"
              },
              {
                imgPath: prime,
                isBlog: false,
                title: "Prime NYC Domains",
                description: "I spearheaded the creation of a domain marketplace, where digital identities find their home. Explore and secure your online presence through our platform, simplifying the path to virtual success.",
                demoLink: "https://primedomains.nyc/"
              },
              {
                imgPath: komerce,
                isBlog: false,
                title: "Vkommerce",
                description: "As a driving force behind an e-commerce powerhouse specializing in Shopify, I contributed to crafting seamless online retail experiences. Empowering businesses with top-tier Shopify and e-commerce solutions.",
                demoLink: "https://vkommerce.com/"
              },
              {
                imgPath: vnpk,
                isBlog: false,
                title: "Virtuenetz Pakistan",
                description: "Crafting the digital facade of a software development powerhouse, I architected the website on WordPress. Infusing it with high-speed functionality and top-tier SEO strategies, we stand as a beacon of technological expertise.",
                demoLink: "https://virtuenetz.pk"
              },
              {
                imgPath: vncom,
                isBlog: false,
                title: "Virtuenetz",
                description: "As the architect behind a software firm's online presence, I harnessed React JS to sculpt a dynamic website. Leveraging WordPress as a versatile CMS, I seamlessly integrated blogs and services, epitomizing technical prowess.",
                demoLink: "https://virtuenetz.com"
              },
              {
                imgPath: nhe,
                isBlog: false,
                title: "Nova Higher Education",
                description: "As the architect behind a software firm's online presence, I harnessed React JS to sculpt a dynamic website. Leveraging WordPress as a versatile CMS, I seamlessly integrated blogs and services, epitomizing technical prowess.",
                demoLink: "https://nhe.nit.edu.au/"
              },
              {
                imgPath: asab,
                isBlog: false,
                title: "Al-Asab",
                description: "As the architect behind a software firm's online presence, I harnessed React JS to sculpt a dynamic website. Leveraging WordPress as a versatile CMS, I seamlessly integrated blogs and services, epitomizing technical prowess.",
                demoLink: "https://alasab.com/"
              },
              {
                imgPath: azgard,
                isBlog: false,
                title: "Azgard Properties",
                description: "As the architect behind a software firm's online presence, I harnessed React JS to sculpt a dynamic website. Leveraging WordPress as a versatile CMS, I seamlessly integrated blogs and services, epitomizing technical prowess.",
                demoLink: "https://azgard.ae/"
              },
              {
                imgPath: ppm,
                isBlog: false,
                title: "Pictogram Place Makers",
                description: "As the architect behind a software firm's online presence, I harnessed React JS to sculpt a dynamic website. Leveraging WordPress as a versatile CMS, I seamlessly integrated blogs and services, epitomizing technical prowess.",
                demoLink: "https://pplacemakers.wixsite.com/website-1"
              },
              {
                imgPath: debattle,
                isBlog: false,
                title: "Debattle",
                description: "As the architect behind a software firm's online presence, I harnessed React JS to sculpt a dynamic website. Leveraging WordPress as a versatile CMS, I seamlessly integrated blogs and services, epitomizing technical prowess.",
                demoLink: "https://debattle.co.uk/"
              },
              {
                imgPath: ganymede,
                isBlog: false,
                title: "Ganymede",
                description: "As the architect behind a software firm's online presence, I harnessed React JS to sculpt a dynamic website. Leveraging WordPress as a versatile CMS, I seamlessly integrated blogs and services, epitomizing technical prowess.",
                demoLink: "https://ganymede.gs/"
              },
              {
                imgPath: metrix,
                isBlog: false,
                title: "Metrix +",
                description: "As the architect behind a software firm's online presence, I harnessed React JS to sculpt a dynamic website. Leveraging WordPress as a versatile CMS, I seamlessly integrated blogs and services, epitomizing technical prowess.",
                demoLink: "https://metrixplus.com/"
              },
              {
                imgPath: autogarageseo,
                isBlog: false,
                title: "Auto Garage Marketing",
                description: "I've developed a comprehensive SEO and marketing solution specifically designed for automotive businesses. This platform helps garage owners improve their online visibility and attract more customers through strategic search engine optimization.",
                demoLink: "https://autogarageseo.com"
              },
              {
                imgPath: mall,
                isBlog: false,
                title: "Mall Project",
                description: "I've created a modern e-commerce platform for a shopping mall, providing seamless online shopping experiences. This digital marketplace connects retailers with customers through an intuitive and responsive interface.",
                demoLink: "https://example.com/mall"
              },
              {
                imgPath: mts,
                isBlog: false,
                title: "MTS Solutions",
                description: "I've developed a comprehensive business solutions website that showcases innovative services and technologies. This platform demonstrates our commitment to delivering cutting-edge solutions for modern businesses.",
                demoLink: "https://example.com/mts"
              },
              {
                imgPath: pgvillage,
                isBlog: false,
                title: "PG Village MOT & Car Servicing",
                description: "I've created a professional automotive service website for PG Village, offering MOT testing, car servicing, and repairs. This platform showcases their expertise with affordable pricing and expert mechanics.",
                demoLink: "https://pgvillagemot.com"
              },
              {
                imgPath: mte,
                isBlog: false,
                title: "Mobile Tyre Experts",
                description: "I've developed a mobile tyre service platform that provides 24/7 tyre fitting and repair services. This website ensures customers receive professional tyre services at their convenience with expert mobile technicians.",
                demoLink: "https://mobiletyreexperts.com"
              },
              {
                imgPath: premiumtyres,
                isBlog: false,
                title: "Premium Tyres",
                description: "I've created an e-commerce platform specializing in premium tyre sales and services. This website provides customers with easy access to high-quality tyres and professional automotive services.",
                demoLink: "https://premiumtyres.co.uk"
              },
              {
                imgPath: gtyres,
                isBlog: false,
                title: "GForce Tyres Guildford",
                description: "I've developed a comprehensive tyre retail website offering affordable tyres and automotive services in Guildford. This platform ensures customers find quality tyres and professional fitting services.",
                demoLink: "https://gforcetyresguildford.co.uk"
              },
              {
                imgPath: sc,
                isBlog: false,
                title: "Safari Autos & Bodyworks",
                description: "I've created a professional automotive bodywork and paint repair website for Safari Autos. This platform showcases their expertise in paint and dent repair services in Thornton Heath.",
                demoLink: "https://safariautos.co.uk"
              },
              {
                imgPath: hts,
                isBlog: false,
                title: "Home Tyre Surgeons",
                description: "I've developed a mobile tyre fitting service website that offers 48-hour home tyre fitting. This platform provides convenient tyre services with professional mobile technicians coming to your location.",
                demoLink: "https://hometyresurgeons.co.uk"
              },
              {
                imgPath: antyres,
                isBlog: false,
                title: "AN Tyres",
                description: "I've created a specialized tyre and MOT service website for AN Tyres in Maidstone. This platform offers comprehensive automotive services including tyres, MOT testing, and car repairs.",
                demoLink: "https://antyres.co.uk"
              },
              {
                imgPath: tyresgiant,
                isBlog: false,
                title: "Tyres Giant",
                description: "I've developed a comprehensive tyre retail website that serves as a one-stop destination for all automotive tyre needs in Hartlepool. This platform offers quality tyres and professional services to customers.",
                demoLink: "https://tyresgiant.co.uk"
              },
              {
                imgPath: autoveto,
                isBlog: false,
                title: "Auto Veto MOT",
                description: "I've created an innovative automotive service website that provides MOT testing, tyre services, and mechanical repairs in Croydon. This website serves as a trusted resource for automotive services.",
                demoLink: "https://autovetomot.co.uk"
              },
              {
                imgPath: pjtyres,
                isBlog: false,
                title: "PJ Tyres Newcastle",
                description: "I've developed a professional tyre and automotive service website offering reliable tyres, servicing, and vehicle repairs in Newcastle Upon Tyne. This platform ensures customers receive quality automotive solutions.",
                demoLink: "https://pjtyres.co.uk"
              },
              {
                imgPath: discounttyres,
                isBlog: false,
                title: "Discount Tyre Center",
                description: "I've created a value-focused tyre retail platform that offers quality products at competitive prices. This website helps customers find affordable automotive solutions without compromising on quality.",
                demoLink: "https://discounttyresltd.co.uk"
              }
            ];

            // Fisher-Yates shuffle
            for (let i = cards.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [cards[i], cards[j]] = [cards[j], cards[i]];
            }

            return cards.map((card, idx) => (
              <Col md={4} className="project-card" key={card.title + idx}>
                <ProjectCard {...card} />
              </Col>
            ));
          })()}
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;