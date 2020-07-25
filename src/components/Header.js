import React, { useState } from 'react';
import NavBars from './NavBar';
import About from './pages/About';
import Projects from './Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {   
        switch(currentPage) 
        {
  
          case "About":   return <About />;
          case "Portfolio":   return <Projects />;
          case "Contact": return <Contact />;
          case "Resume": return <Resume />;

          default: return <About />
          
        }
      
  
      
  };
  

  return (
    <div>
      <NavBars currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          renderPage()
        }
      </div>
    </div>
  );
}

export default Portfolio;