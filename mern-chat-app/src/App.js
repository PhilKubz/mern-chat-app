import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Chat from './Components/Chat/Chat';

function App() {
  return (
    <div className="app">
      <div className="appBody">
      <Sidebar />
      <Chat />
      </div>
    </div>
  );
}

export default App;
