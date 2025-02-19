import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

const skills = [
  "C", "Java", "Python", "JavaScript", "HTML", "CSS", "C++",
  "Angular", "React", "PHP", "jQuery", "TypeScript", "SQL","Docker", "Kubernetes"
];

const meterImages = [meter1, meter2, meter3];

// Helper function to get consistent index based on skill name
const getMeterIndex = (skill) => {
  // Create a simple hash from the skill name
  const hash = skill.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return hash % meterImages.length;
};

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => {
                  // Get consistent index for each skill
                  const meterIndex = getMeterIndex(skill);
                  return (
                    <div className="item" key={index}>
                      <img src={meterImages[meterIndex]} alt="Skill Meter" />
                      <h5>{skill}</h5>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};