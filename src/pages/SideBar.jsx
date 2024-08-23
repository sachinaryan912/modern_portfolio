import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css"
function Sidebar() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const amPm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${amPm}`;
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const dateString = now.toLocaleDateString(undefined, options);

      setTime(timeString);
      setDate(dateString);
    }

    const intervalId = setInterval(updateClock, 1000);
    updateClock(); 

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const [activeTab, setActiveTab] = useState("/"); // Default active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      {/* Sidebar Section */}
      <div className="sidebar">
        <img
          src="./assets/images/profile_img.png"
          className="img-thumb mb-3"
          alt="Profile"
        />
        <div className="downloadBtn" id="downResume">
          <p>
            <i className="bx bxs-cloud-download"></i>Download Resume
          </p>
        </div>
        <div className="mt-4 mb-3 clock-container">
          <div id="date" className="date">{date}</div>
          <div id="clock" className="clock">{time}</div>
        </div>
        <nav style={{width:'100%'}}>
          <ul className="nav flex-column" style={{padding:0}}>
            <li
              className={`nav-item ${activeTab === "/" ? "active" : ""}`}
              id="home"
            >
              <Link
                to="/"
                className="nav-link"
                onClick={() => handleTabClick("/")}
              >
                <i className="bx bxs-home"></i> Home
              </Link>
            </li>
            <li
              className={`nav-item ${activeTab === "/about" ? "active" : ""}`}
              id="about"
            >
              <Link
                to="/about"
                className="nav-link"
                onClick={() => handleTabClick("/about")}
              >
                <i className="bx bxs-user-circle"></i> About
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeTab === "/projects" ? "active" : ""
              }`}
              id="projects"
            >
              <Link
                to="/projects"
                className="nav-link"
                onClick={() => handleTabClick("/projects")}
              >
                <i className="bx bxs-grid"></i> Projects
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeTab === "/achievements" ? "active" : ""
              }`}
              id="achievements"
            >
              <Link
                to="/achievements"
                className="nav-link"
                onClick={() => handleTabClick("/achievements")}
              >
                <i className="bx bxs-award"></i> Achievements
              </Link>
            </li>
            <li
              className={`nav-item ${activeTab === "/contact" ? "active" : ""}`}
              id="contact"
            >
              <Link
                to="/contact"
                className="nav-link"
                onClick={() => handleTabClick("/contact")}
              >
                <i className="bx bxs-envelope"></i> Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Section */}
      <div className="main-content1">
        {/* This is where your routed components will be rendered */}
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
