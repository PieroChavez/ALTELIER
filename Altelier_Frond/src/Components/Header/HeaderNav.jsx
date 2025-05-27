import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HeaderNavUno } from '../../assets/HeaderNav/HeaderNav';

const HeaderNav = () => {
  const [showArrows, setShowArrows] = useState({ left: true, right: true });
  const scrollRef = useRef(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowArrows({
        left: true,
        right: true
      });
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction * 200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Container fluid className="py-4 position-relative">
      <div 
        className="position-absolute start-0 top-50 translate-middle-y d-md-none" 
        style={{ 
          zIndex: 2,
          background: 'linear-gradient(to right, rgba(255,255,255,0.9), transparent)',
          padding: '20px 10px',
          cursor: 'pointer'
        }}
        onClick={() => scroll(-1)}
      >
        ←
      </div>
      
      <div 
        className="position-absolute end-0 top-50 translate-middle-y d-md-none" 
        style={{ 
          zIndex: 2,
          background: 'linear-gradient(to left, rgba(255,255,255,0.9), transparent)',
          padding: '20px 10px',
          cursor: 'pointer'
        }}
        onClick={() => scroll(1)}
      >
        →
      </div>
      
      <Row 
        ref={scrollRef}
        className="flex-nowrap overflow-auto justify-content-center align-items-center"
        onScroll={checkScroll}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {HeaderNavUno.map((brand, index) => (
          <Col key={index} className="text-center mx-2.5" xs="auto">
            <div className="rounded-circle bg-white border p-0 mb-2" 
                 style={{ width: '64px', height: '64px', margin: '0 auto', overflow: 'hidden'}}>
              <img
                src={brand.logo}
                alt={brand.name}
                className="img-fluid w-100 h-100"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
            <p className="small text-muted mb-0">{brand.name}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HeaderNav;