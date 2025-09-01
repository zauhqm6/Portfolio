import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiWordpress,
  DiGithub,
  DiSass
} from "react-icons/di";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiContentful,
  SiWoocommerce,
  SiWebflow,
  // SiShopify,
  SiNodedotjs,      // Correct for Node.js
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiPostman,
  SiNpm,
  SiWebpack,
  SiJest,
  SiCypress,
  SiFigma,
  SiGoogleanalytics,
  SiGit,
  // SiRedux,
  SiGooglechrome,   // Correct for Chrome DevTools
  SiGoogletagmanager // Correct for Google Tag Manager
} from "react-icons/si";
import { FaUsers, FaAccessibleIcon, FaRegFileAlt } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Core Front */}
      <Col xs={4} md={2} className="tech-icons"><DiHtml5 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiCss3 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTypescript /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNextdotjs /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiBootstrap /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTailwindcss /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiSass /></Col>
      {/* CMS & Content Management */}
      <Col xs={4} md={2} className="tech-icons"><DiWordpress /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiWoocommerce /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiContentful /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiWebflow /></Col>
      {/* Full-Stack & Backend */}
      <Col xs={4} md={2} className="tech-icons"><SiNodedotjs /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiExpress /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMongodb /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGraphql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostman /></Col>
      {/* Tools & Workflows */}
      <Col xs={4} md={2} className="tech-icons"><SiGit /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiGithub /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNpm /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiWebpack /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJest /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCypress /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGooglechrome /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFigma /></Col>
      {/* Analytics & Optimization */}
      <Col xs={4} md={2} className="tech-icons"><SiGoogleanalytics /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGoogletagmanager /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaAccessibleIcon /></Col>
      {/* Collaboration & Practices */}
      <Col xs={4} md={2} className="tech-icons"><FaUsers /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaRegFileAlt /></Col>
    </Row>
  );
}

export default Techstack;
