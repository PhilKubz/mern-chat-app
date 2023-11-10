import React, { useState} from 'react';
import './Chat.css';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import axios from '../../axios';

function Chat({messages}) {

  const [input, setInput] = useState("");


  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      "message": input,
      "name": "User",
      "timestamp": "demo timestamp",
      "received": false
  });

    setInput("");
  };





  return (
    <div className="chat">
        <div className='chatHeader'>
            <Avatar />

            <div className='chatHeaderInfo'>
                <h3>Room Name</h3>
                <p>Last seen at...</p>
            </div>

            <div className='chatHeaderRight'>
             <IconButton>
               <SearchOutlinedIcon />
             </IconButton>
             <IconButton>
               <AttachFileIcon />
             </IconButton>
             <IconButton>
               <MoreVertIcon />
             </IconButton>
            </div>           
        </div>
                    
        <div className='chatBody'>
        {messages && messages.map(message => (
          <p className={`chatMessage ${message.received && "chatReceiver"}`}>
            <span className='chatName'>{message.name}</span>
            {message.message}
            <span className='chatTimestamp'>{message.timestamp}</span>
          </p>
        ))}
      </div>

        <div className='chatFooter'>
            <InsertEmoticonOutlinedIcon />
            <form>
                <input 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                placeholder='Type a message' 
                type='text'
                />
                <button onClick={sendMessage} type='submit'>
                  Send a message
                </button>
            </form>
                <MicOutlinedIcon />
        </div>

    </div>
  )
}

export default Chat