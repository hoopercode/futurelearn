import React, { useState } from 'react';
import ServiceOverlay from './ServiceOverlay';
import './Services.css';

const serviceList = [
  {
    title: 'AI & Digital Literacy Workshops',
    detailedDescription: 'In our AI & Digital Literacy workshops, we teach educators how to implement AI-powered tools that automate tasks like grading, provide real-time feedback, and assist in lesson planning. Participants will also explore tools such as Google AI, Kahoot, and Edpuzzle to create engaging, interactive learning experiences.'
  },
  {
    title: 'Customized Professional Development',
    detailedDescription: 'No two schools are the same. That’s why we design Professional Development (PD) that fits your specific goals, from improving digital literacy to integrating new technologies into the curriculum. Our sessions focus on practical, hands-on learning, ensuring that educators walk away with skills they can immediately apply in their classrooms.'
  },
  {
    title: 'AI-Powered Assessment Solutions',
    detailedDescription: 'With AI-Powered Assessment Solutions, educators can reduce the time spent grading while increasing the quality of feedback. In this session, we explore tools that automate essay grading, provide structured feedback, and even track student progress over time. The goal is to equip teachers with the tools to make assessments more efficient and effective.'
  },
  {
    title: 'Teacher Support & Mentorship Programs',
    detailedDescription: 'Our Teacher Support & Mentorship Programs offer one-on-one guidance to help educators navigate the challenges of modern teaching. We provide ongoing technical support, introduce new digital tools, and help teachers develop strategies to improve classroom engagement and management.'
  }
];

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeOverlay = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="services">
      <h2>What We Offer</h2>
      <div className="service-cards">
        {serviceList.map((service, index) => (
          <div 
            key={index} 
            className="service-card" 
            onClick={() => handleServiceClick(service)}  // Make the entire card clickable
          >
            <h3>{service.title}</h3>
            {/* You can keep the button for aesthetic purposes, but remove its click functionality */}
            <button className="learn-more-btn">Learn More</button>
          </div>
        ))}
      </div>

      {selectedService && (
        <ServiceOverlay
          service={selectedService}
          onClose={closeOverlay}
        />
      )}
    </section>
  );
}

export default Services;
