import { useState, useEffect } from 'react';

const testimonials = [
    {
      id: 1,
      image: "https://placekitten.com/150/150", // Using placekitten for demo images
      name: "Emma Thompson",
      handle: "@emmaai",
      comment: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented."
    },
    {
      id: 2,
      image: "https://placekitten.com/151/151", // Different sizes to get different images
      name: "David Park",
      handle: "@davidtech",
      comment: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution."
    },
    {
      id: 3,
      image: "https://placekitten.com/152/152",
      name: "Sofia Rodriguez",
      handle: "@sofiami",
      comment: "Finally, an AI tool that actually understands the context! The accuracy in natural language processing is impressive."
    }
  ];

export default function TestimonialCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <h1>Trusted by developers worldwide</h1>
        <p className="subtitle">Join thousands of developers who are already building the future with our AI platform</p>
        
        <div className="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`testimonial ${index === currentTestimonial ? 'active' : ''}`}
            >
                <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
                </div>
                
              <p className="testimonial-text">"{testimonial.comment}"</p>
              <div className="testimonial-author">
                <h3>{testimonial.name}</h3>
                <span>{testimonial.handle}</span>
              </div>
            </div>
          ))}
          
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}