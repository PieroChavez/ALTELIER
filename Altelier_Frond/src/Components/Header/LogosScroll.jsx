import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const LogosScroll = () => {
  const logos = [
    { src: "/assets/HeaderNav/borcelle.svg", alt: "Borcelle logo" },
    { src: "/assets/HeaderNav/bright-light.svg", alt: "Bright & Light logo" },
    { src: "/assets/HeaderNav/chadanna.svg", alt: "Chadanna logo" },
    { src: "/assets/HeaderNav/cura.svg", alt: "Cura logo" },
    { src: "/assets/HeaderNav/good-sun.svg", alt: "Good Sun logo" },
    { src: "/assets/HeaderNav/humming-bird.svg", alt: "Humming Bird logo" },
    { src: "/assets/HeaderNav/ingoude.svg", alt: "Ingoude logo" },
    { src: "/assets/HeaderNav/moon-light.svg", alt: "Moon Light logo" },
    { src: "/assets/HeaderNav/olivia.svg", alt: "Olivia logo" },
    { src: "/assets/HeaderNav/stardust.svg", alt: "Stardust logo" }
  ];

  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center text-center mb-4">
        <Col md={8} lg={6}>
          <h2 className="fw-bold">Used by the world's leading companies</h2>
        </Col>
      </Row>
      
      <Row className="justify-content-center align-items-center">
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="logo-wrapper"
              style={{
                minWidth: '120px',
                maxWidth: '150px',
                height: 'auto',
                transition: 'transform 0.2s'
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="img-fluid"
                style={{
                  maxHeight: '50px',
                  filter: 'grayscale(100%)',
                  opacity: '0.7',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.filter = 'grayscale(100%)';
                  e.currentTarget.style.opacity = '0.7';
                }}
              />
            </div>
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default LogosScroll;