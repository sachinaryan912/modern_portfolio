import React from 'react';
import data from './localDB.json'; // Adjust the path as needed
import '../App.css'
import CustomTimeline from '../components/CustomTimeline';
import SkillChips from '../components/Skill';
const About = () => {
  const about = data.about; // Extract the 'about' data from JSON

  return (
    <div className="about mt-4 col-md-9 p-5">
      <h1>About Me</h1>
      <p className="mt-4" style={{fontSize: "16px", fontFamily: "Inter, sans-serif"}}>
        {about.expandedAbout}
      </p>

      <div className="mt-5 location1" style={{ color: '#8f8f8f' }}>
        <div className="loc">
          <p>
            <i className='bx bxs-map-pin' style={{ color: '#4CE6A6', marginRight: '10px' }}></i> 
            {about.experience[0].jobLocation} {/* Display the first location */}
          </p>
        </div>
        <div className="dotted-line-container1">
          <div className="dotted-line"></div>
        </div>
      </div>
      <h2 className="mt-5 text-white" style={{color: "#fff"}}>Experience</h2>
      <CustomTimeline timeLineData={about.experience}/>

     
      {/* <div className="timeline1 mb-5">
        {about.experience.map((exp, index) => (
          <div key={index} className="experience-node">
            <h5>{exp.role}</h5>
            <p>{exp.company} ({exp.duration})</p>
            <p>{exp.jobLocation}</p>
          </div>
        ))}
      </div> */}

      <div className="dotted-line-container mt-5" style={{ width: '100%' }}>
        <div className="dotted-line" style={{ width: '100%' }}></div>
      </div>

      <h2 className="mt-5 text-white" style={{color: "#fff"}}>Skills</h2>
      <div className="mt-4">
        <p style={{fontSize: "16px", fontFamily: "Inter, sans-serif"}}>{about.skill.description}</p>
        <div className="skill-container" id="skill-container">
            <SkillChips skills={about.skill.skills}/>
      
        </div>
      </div>

      {/* <div key={index} className="skill">
              <img src={skill.logo} alt={skill.tag} width="50" height="50" />
              <p>{skill.tag}</p>
            </div> */}

      <div className="mt-5 location1" style={{ color: '#8f8f8f' }}>
        <div className="dotted-line-container">
          <div className="dotted-line"></div>
        </div>
        <div className="moreAbout">
          <p>View Achievements <i className='bx bx-right-arrow-alt'></i></p>
        </div>
      </div>

      <h2 className="mt-5 text-white" style={{color: "#fff"}}>Education</h2>
      <CustomTimeline timeLineData={about.education}/>

      <div className="dotted-line-container mt-5" style={{ width: '100%' }}>
        <div className="dotted-line" style={{ width: '100%' }}></div>
      </div>

      <div className="connect mt-4 mb-4">
        <div className="arrows">
          <i className='bx bx-right-arrow-alt'></i>
          <i className='bx bx-right-arrow-alt'></i>
          <i className='bx bx-right-arrow-alt'></i>
        </div>
        <div>
          <p>Let's Connect!</p>
        </div>
      </div>

      <div className="copyright" style={{ color: 'gainsboro' }}>
        <p>© Copyright 2024. All rights Reserved. {data.home.name}</p> {/* Display the name from home section */}
      </div>
    </div>
  );
};

export default About;
