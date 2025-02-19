import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants/index1";
import "../App.css"; // Import the CSS file
import { AlignCenter } from "react-bootstrap-icons";

export const Projects = () => {
  return (
    <section id="projects">
    <div className="projects-container">
      <div className="projects-wrapper"  style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        {/* Heading aligned to left */}
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="projects-title"
        >
          Projects
        </motion.h1>

        {/* Projects List */}
        <div className="projects-list">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="project-card"
            >
              {/* Project Title (Left Side) */}
              <div className="project-title">{project.title}</div>

              {/* Description & Skills (Right Side) */}
              <div className="project-details">
                <p className="project-description">{project.description}</p>

                {/* Technology Tags */}
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Projects;
