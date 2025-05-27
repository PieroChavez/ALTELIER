import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const TeamMember = ({ member }) => {
  return (
    <Card className="border-0 h-100">
      <div className="position-relative" style={{ paddingTop: '100%' }}>
        <Card.Img
          src={member.image.src}
          alt={member.image.alt}
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        />
      </div>
      <Card.Body className="px-0">
        <Card.Title className="h5 fw-semibold">{member.name}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">{member.jobTitle}</Card.Subtitle>
        <Card.Text>{member.description}</Card.Text>
        <div className="d-flex gap-3 mt-3">
          {member.socialLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-dark">
              {link.icon}
            </a>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

const Comunity = () => {
  const teamMembers = [
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Team member 1",
      },
      name: "John Doe",
      jobTitle: "Senior Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare size={24} /> },
        { href: "#", icon: <FaXTwitter size={24} /> },
        { href: "#", icon: <BiLogoDribbble size={24} /> },
      ],
    },
    // ... Add more team members as needed
  ];

  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col lg={8}>
          <p className="text-primary fw-semibold mb-3">Our Team</p>
          <h2 className="display-4 fw-bold mb-4">Meet the experts</h2>
          <p className="lead">Join our amazing team of professionals dedicated to delivering excellence.</p>
        </Col>
      </Row>

      <Row className="g-4">
        {teamMembers.map((member, index) => (
          <Col key={index} md={6} lg={4}>
            <TeamMember member={member} />
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        <Col md={8} lg={6}>
          <div className="bg-light p-4 rounded">
            <h3 className="h4 fw-bold mb-3">We're hiring!</h3>
            <p className="mb-4">Join our growing team and be part of something amazing.</p>
            <Button variant="primary">View Open Positions</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Comunity;