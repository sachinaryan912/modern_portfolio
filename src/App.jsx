

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import SideBar from './pages/SideBar';
function App() {

  


  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SideBar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
