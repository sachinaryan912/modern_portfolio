import React from 'react';
import data from './localDB.json'; // Adjust the path as needed
import '../App.css'
const Achievements = () => {
  // Destructure achievements from data, with default empty object if undefined
  const { achievements = {} } = data;
console.log("loggg",data)
  // Add default values to avoid rendering issues if data is missing
  const title = achievements.title || "Achievements";
  const description = achievements.description || "Here are some of my notable achievements and recognitions.";
  const list = achievements.list || [];

  return (
    <div className="achievements col-md-9 p-5 mt-4">
      <h1 className="text-white">{title}</h1>
      <p className="mt-4" style={{ color: 'grey' }}>
        {description}
      </p>
      <ul className="mt-4" style={{ color: 'lightgrey' }}>
        {list.length > 0 ? list.map((item, index) => (
          <li key={index}>{item}</li>
        )) : <li>No achievements listed.</li>}
      </ul>
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
        <p>© Copyright 2024. All rights Reserved. Sachin Kumar</p>
      </div>
    </div>
  );
}

export default Achievements;
