import React from 'react';
import './tips.css'; // Create this CSS file in the same directory

function Tips() {
  return (
    <div className="tips-page">
      <section className="plant-care-tips">
        <div className="container">
          <h2 className="section-title">Plant Care Tips</h2>
          <div className="tips-content">
            <div className="tips-text">
              <div className="tip-item">
                <span className="tip-number">1</span>
                <p>After receiving the plants, open the box 📦 as soon as possible</p>
              </div>
              <div className="tip-item">
                <span className="tip-number">2</span>
                <p>Air dry the plants for 2-3 hours in fresh air</p>
              </div>
              <div className="tip-item">
                <span className="tip-number">3</span>
                <p>Plant in well-drained soil (30% sand + 30% soil + 20% vermicompost + 20% perlite)</p>
              </div>
              <div className="tip-item">
                <span className="tip-number">4</span>
                <p>Water plants after 2-3 days and don't give direct sunlight to newly planted succulents for at least 10 days</p>
              </div>
              <div className="tip-note">
                <strong>Note:</strong> Always water succulents when the top layer of soil feels dry at the roots of the plant rather than the leaves.
              </div>
            </div>
            <div className="tips-image">
              <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae" alt="Succulent plants" />
            </div>
          </div>
        </div>
      </section>

      <section className="our-mission">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-statement" style={{color:'black',fontStyle:"italic"}}>
            To make gardening accessible to everyone by providing high-quality plants, expert advice, and exceptional service that helps our customers create their own green havens at home.
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
            <div className="value-card">
              <div className="value-icon">📚</div>
              <h3>Education</h3>
              <p>We provide resources to help plant lovers succeed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tips;