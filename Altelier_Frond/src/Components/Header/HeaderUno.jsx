import React from 'react';
import { Button } from 'react-bootstrap';
import { HeaderNavUno } from '../../assets/HeaderNav/HeaderNav'; 

export const HeaderUno = ({ 
  heading = "Medium length hero heading goes here",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons = [
    { title: "Button", variant: "primary" }, 
    { title: "Button", variant: "outline-primary" }
  ],
  image = {
    src: HeaderNavUno[6].logo,
    alt: "Placeholder image"
  }
}) => {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-4">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} variant={button.variant}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <img src={image.src} className="w-full h-auto" alt={image.alt}  
            style={{ maxHeight:'400px', height:'300px',objectFit: 'contain',margin:'0 auto', display: 'block' }}/>
            
          </div>
        </div>
      </div>
     

    </section>
    
  );
};

export default HeaderUno;