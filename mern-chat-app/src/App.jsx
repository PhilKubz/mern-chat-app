import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import MainApplication from './Components/MainApplication/MainApplication';
import Pusher from 'pusher-js';
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/messages/sync');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error.message);
        if (error.response) {
          console.error('Error details:', error.response.data);
          console.error('Status code:', error.response.status);
        }
      }
    };
  
    fetchData();
  }, []);


  useEffect(() => {

    const pusher = new Pusher('6041f35a7db0b5201e12', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])


  console.log(messages)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/main" element={<MainApplication messages={messages}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
