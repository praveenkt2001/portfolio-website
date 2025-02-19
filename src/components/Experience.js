import React, { useState } from 'react';
import { EXPERIENCES } from '../constants/index1';
import { motion } from 'framer-motion';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <section id="experience">
    <div className='experience-section'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className='experience-title'
      >
        Experience
      </motion.h1>
      
      <div className='experience-container'>
        {/* Left Side - Experience Cards */}
        <div className="experience-list">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedExperience(experience)}
            >
              <p className='experience-role'>{experience.role}</p>
              <p className='experience-company'>{experience.company}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Right Side - Detailed Experience View */}
        <div className="experience-details">
          {selectedExperience ? (
            <div className="experience-info">
              <p className='experience-year'>{selectedExperience.year}</p>
              <h6 className='experience-role-full'>
                {selectedExperience.role} - <span className='experience-company-full'>{selectedExperience.company}</span>
              </h6>
              <p className='experience-description'>{selectedExperience.description}</p>
              <div className='experience-technologies'>
                {selectedExperience.technologies.map((tech, index) => (
                  <span key={index} className='experience-tech-badge'>{tech}</span>
                ))}
              </div>
            </div>
          ) : (
            <div className="experience-placeholder">
              <p>👈 Click here to know more about my experience!</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Experience;
