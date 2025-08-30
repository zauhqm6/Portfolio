// Experience.js
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import './exp.css'; // Import custom styles

const Experience = () => {
    const experiences = [
        {
            title: "Web Developer (Part-time)",
            company: "Techzir Solutions",
            duration: "June 2025 – Present",
            location: "Remote",
            description: [
                "Built and customized 10+ WordPress websites, enhancing performance and mobile responsiveness.",
                "Developed reusable frontend components using HTML, CSS, and JavaScript, cutting development time by 20%.",
                "Optimized site loading speed, reducing average load times by up to 35% and improving SEO rankings.",
                "Resolved daily website issues and implemented updates, ensuring 99%+ uptime across client sites.",
                "Improved UI/UX by translating design concepts into interactive, mobile-friendly pages, boosting user engagement by 25%.",
                "Collaborated with clients to deliver tailored solutions, achieving a 95%+ satisfaction rate."
            ],
            color: "#f0f8ff"
        },
        {
            title: "Web Developer & Website Manager",
            company: "GForce Tyres",
            duration: "August 2024 – Present",
            location: "UK (Remote)",
            description: [
                "Managing and maintaining 25+ websites, ensuring 99% uptime and 30% faster load times.",
                "Implementing security protocols, reducing vulnerabilities by 40% across all managed sites.",
                "Developing, customizing, and maintaining WordPress themes, plugins, and APIs for improved site functionality and efficiency (+25% improvement).",
                "Collaborating with UI/UX designers to enhance user experience, resulting in a 20% increase in user engagement.",
                "Ensuring cross-browser compatibility, accessibility compliance, and mobile responsiveness for a seamless browsing experience.",
                "Integrating Google Analytics and conducting SEO optimization to enhance visibility and track performance."
            ],
            color: "#e6ffe6"
        },
        {
            title: "WordPress Developer",
            company: "GrabSomeFurniture",
            duration: "January 2024 – August 2024",
            location: "UK (Remote)",
            description: [
                "Designed, developed, and maintained 2 WooCommerce business websites and 2 agency-related websites, boosting sales by 40%.",
                "Implemented Google Analytics tracking and front-end SEO optimizations, increasing organic traffic.",
                "Launched 4 key products in international markets by collaborating with designers, copywriters, and marketing teams.",
                "Built a custom job management system using MERN stack, enhancing internal workflow efficiency."
            ],
            color: "#f0f8ff"
        },
        {
            title: "WordPress & Frontend Engineer",
            company: "Virtuenetz",
            duration: "May 2021 – December 2023",
            location: "Pakistan",
            description: [
                "Developed 35+ high-impact, responsive websites using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, WordPress, and PHP, improving performance and user engagement.",
                "Created 20 dynamic WordPress websites, increasing client satisfaction by 25% and driving 10% more web traffic.",
                "Mentored 40 interns, reducing onboarding time by 40% through structured training sessions and code reviews.",
                "Worked closely with backend teams to integrate RESTful APIs, optimize website performance, and implement best security practices.",
                "Effectively communicated technical concepts to cross-functional teams, improving development efficiency by 20%."
            ],
            color: "#e6ffe6"
        }
    ];

    return (
        <div className="experience-section">
            <h1 className="section-heading">
                <strong className="purple">Experience</strong>
            </h1>
            <Row>
                {experiences.map((exp, index) => (
                    <Col md={6} key={index} className="experience-card-col">
                        <Card className="experience-card" style={{ backgroundColor: exp.color }}>
                            <Card.Body>
                                <Card.Title>
                                    <FaBriefcase /> {exp.title}
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    <FaCalendarAlt /> {exp.duration}
                                </Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">{exp.company}</Card.Subtitle>
                                <Card.Text>
                                    <ul>
                                        {exp.description.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Experience;
