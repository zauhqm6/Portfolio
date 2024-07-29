// Experience.js
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import './exp.css'; // Import custom styles

const Experience = () => {
    const experiences = [
        {
            title: "MERN & WordPress & Shopify Developer",
            company: "GrabSomeFurniture",
            duration: "January 2024 - Present",
            location: "UK (remote)",
            description: [
                "Collaborated with designers, copywriters, and the marketing team to launch 4 products internationally, enhancing market reach.",
                "Ensured seamless integration of design elements, content, and marketing strategies for optimal user experience and visibility.",
                "Assisted in building and maintaining MERN stack applications, including frontend (React) and backend (Node.js) development.",
                "Contributed to the design and development of RESTful APIs to support frontend functionalities.",
                "Integrated MongoDB for efficient data management and improved application performance.",
                "Participated in code reviews and collaborated with senior developers to refine coding practices and optimize application performance."
            ],
            color: "#f0f8ff" // Light color for styling
        },
        {
            title: "WordPress & Front End Developer",
            company: "Virtuenetz",
            duration: "May 2021 - December 2023",
            location: "Pakistan",
            description: [
                "Developed over 35 high-impact, responsive websites using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, WordPress, and PHP, resulting in improved performance and increased user engagement.",
                "Utilized WordPress to create 20 dynamic websites, leading to a 25% increase in client satisfaction and a 10% boost in website traffic.",
                "Mentored 40 interns, reducing onboarding time by 40% through focused training workshops and code reviews.",
                "Effectively communicated technical concepts to non-technical stakeholders, collaborating with cross-functional teams on 15 projects to increase development efficiency by 20%."
            ],
            color: "#e6ffe6" // Light color for styling
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
