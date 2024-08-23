import React from 'react';
import data from './localDB.json'; // Adjust the path as needed
import '../App.css'
import ProjectCard from './ProjectCard';
import LetsConnect from '../components/LetsConnect';

const Home = () => {
  const home = data.home; // Extract 'home' data from JSON
  const projects = data.projects; // Extract 'projects' data from JSON

  return (
    <div className="home col-md-9 p-5">
      <div className="intro mt-5">
        <h1>Hello! I'm {home.name}.</h1>
        <h3 className="text-container">
          <div className="text-content">
            {home.jobPositions.map((position, index) => (
              <div key={index}>{position}</div>
            ))}
          </div>
        </h3>
        <p className="mt-4 compactTxt">{home.compactAbout}</p>
      </div>

      <div className="mt-5 location" style={{ color: '#8f8f8f' }}>
        <div className="loc">
          <p style={{fontSize: "1.2vw"}}>
            <i className="bx bxs-map-pin" style={{ color: '#4CE6A6', marginRight: '10px' }}></i>
            {home.location}
          </p>
        </div>
        <div className="dotted-line-container">
          <div className="dotted-line"></div>
        </div>
        <div className="moreAbout">
          <p>More About me <i className="bx bx-right-arrow-alt"></i></p>
        </div>
      </div>

      <h2 className="mt-4" style={{ color: 'rgb(191, 191, 191)' }}>Recent Projects</h2>
      <div
  className="row mt-4"
  style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "20px" }}
>
        {projects.projectsList.slice(0, 2).map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            
            <ProjectCard
              image={`/assets/images/${project.image}`}
              title={project.title}
              category={project.category}
              description={project.description}
              type="home"
              actions={[
                { label: 'View Project', onClick: () => window.open(project.link, '_blank') }
              ]}
            />
          </div>
        ))}
      </div>

      <div className="mt-3 location1" style={{ color: '#8f8f8f' }}>
        <div className="dotted-line-container">
          <div className="dotted-line"></div>
        </div>
        <div className="moreAbout">
          <p>View All Projects <i className="bx bx-right-arrow-alt"></i></p>
        </div>
      </div>
        <LetsConnect/>
      
    </div>
  );
};

export default Home;
