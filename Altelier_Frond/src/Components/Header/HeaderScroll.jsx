import React from 'react';
import { Container, Nav } from 'react-bootstrap';

const HeaderScroll = () => {
  const menuItems = [
    { title: 'WOMAN', link: '/woman' },
    { title: 'MALE', link: '/male' },
    { title: 'CHILDREN', link: '/children' },
    { title: 'HOME', link: '/home' },
    { title: 'BOOK', link: '/book' },
    { title: 'COSMETICS', link: '/cosmetics' },
    { title: 'SHOES&BAGS', link: '/shoes-bags' },
    { title: 'ACCESSORIES', link: '/accessories' },
    { title: 'ELECTRONICS', link: '/electronics' },
    
  ];

  return (
    <Container fluid className="border-bottom">
      <Nav className="justify-content-center py-3">
        {menuItems.map((item, index) => (
          <Nav.Link 
            key={index} 
            href={item.link}
            className={`px-3 fw-bold ${item.isHighlighted ? 'text-danger' : 'text-dark'}`}
            style={{
              fontSize: '14px',
              transition: 'color 0.3s ease',
              letterSpacing: '0.5px'
            }}
          >
            {item.title}
          </Nav.Link>
        ))}
      </Nav>

      <style>
        {`
          .nav-link:hover {
            color: #dc3545 !important; /* Change hover color here */
          }
        `}
      </style>
    </Container>
  );
};

export default HeaderScroll;