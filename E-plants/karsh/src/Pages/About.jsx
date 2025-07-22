import React from 'react';

import "./about.css"

function About() {
  return (
    <>
    
    <div className="about-page">
      <h2 className='ab'>About Green Heaven</h2>
      <section className='about us'>
        <div className='container'>
          <p className='myline'>Welcome to Green Heaven, your one-stop destination for beautiful, healthy plants delivered straight to your door. Whether you're a seasoned plant parent or just starting your green journey, we're here to help you grow—literally and figuratively.

At Green Heaven, we believe plants do more than just decorate your home or office—they bring life, purify air, boost mood, and connect us with nature. That’s why we’ve curated a diverse selection of indoor plants, succulents, flowering varieties, and gardening essentials to suit every space and skill level.</p>
</div>
      </section>

      <section className='choose'>
        <div className='container' style={{marginBottom:"60px"}}>
          <h5 className='ct'>Why choose us?</h5>
          <p className='cu'>🌿 Handpicked Quality: Every plant is selected by our expert horticulturists to ensure it meets our health and aesthetic standards.</p>
          <p className='cu'>🚚 Safe Delivery: We carefully package your plants to arrive fresh, thriving, and ready to impress.</p>
          <p className='cu'>💧 Care Made Simple: From detailed care instructions to responsive customer support, we make plant parenting easy and enjoyable.</p>
          <p className='cu'>🌱 Sustainable Practices: We care about the planet as much as we care about plants. Our packaging is eco-friendly, and we partner with growers who use responsible farming methods.</p>
        </div>
      </section>
      
        <section className="our-story">
        <div className="container">
          <h4 style={{marginLeft:"100px"}}><i>How We Grew???</i></h4>
          <div className="story-content">
            <div className="story-text">
              <p>
                Green Heaven began as a small family nursery in Portland, Oregon, with a passion for plants and a dream to share the joy of gardening with everyone. What started as a weekend farmers' market stall quickly blossomed into a thriving online business as we saw the growing demand for quality plants delivered with care.
              </p>
              <p>
                Today, we're proud to be one of the largest online plant retailers in the Pacific Northwest, serving plant lovers across the country. Our team of horticulturists, garden designers, and plant enthusiasts work tirelessly to ensure every plant we send out meets our high standards.
              </p>
            </div>
            <div className="story-image">
              <img src="https://media.istockphoto.com/id/1125436449/photo/flower-garden-greenhouse.jpg?s=612x612&w=0&k=20&c=Fd7QwcdVgzP44yimC266wW1OHJDJqz8qijZHtrmWWf0=" alt="Our nursery" />
            </div>
          </div>
        </div>
      </section>

      <section className="our-mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p className="mission-statement" style={{color:'black'}}>
          To bring the joy of greenery into every home and workplace, making plant care accessible, fun, and rewarding for everyone.

Join the growing Green Heaven community and experience the calming beauty of plants—delivered with love.
          </p>
          <div className="mission-values">
            <div className="value-card">
              <div className="value-icon">🌿</div>
              <h3>Sustainability</h3>
              <p>We practice eco-friendly growing methods and use sustainable packaging</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💚</div>
              <h3>Plant Health</h3>
              <p>Every plant is carefully nurtured and inspected before shipping</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌎</div>
              <h3>Community</h3>
              <p>We support local growers and urban greening initiatives</p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
    </>
  );
}

export default About;