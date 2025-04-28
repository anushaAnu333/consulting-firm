// Programs.jsx
import React from 'react';
import './Programs.css';
import { programsData } from '../../data/programsData';
import { motion } from 'framer-motion';

const Programs = () => {
  return (
    <section className="programs-section" id="programs">
      <div className="programs-header">
        <h2 style={{ color: 'white' }}>Our Signature Programs</h2>
       
        <p style={{ color: 'white' }}>Tailored solutions to drive your success</p>
      </div>

      <div className="programs-grid">
        {programsData.map((program, idx) => (
          <motion.div
            key={program.heading}
            className={`program-card card-${idx % 2 === 0 ? 'left' : 'right'}`}
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="card-icon">{program.image}</div>
            <h3>{program.heading}</h3>
            <p>{program.details}</p>
            <motion.a
              href="#contact"
              className="card-link"
              whileHover={{ x: 5 }}
            >
              Learn More ↗
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Programs;