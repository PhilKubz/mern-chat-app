import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Chat from './Components/Chat/Chat';

function App() {
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

export default App;



