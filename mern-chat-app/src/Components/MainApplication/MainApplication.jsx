import React, { useState, useEffect } from 'react';
import './../../App.css';
import Sidebar from './../Sidebar/Sidebar';
import Chat from './../Chat/Chat';

function MainApplication () {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="app">
      <div className={`appBody ${isSidebarOpen ? '' : 'collapsed'}`}>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Chat />
      </div>
    </div>
  );
}

export default MainApplication;