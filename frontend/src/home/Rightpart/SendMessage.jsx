import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../context/useSendMessage.js';

const SendMessage = () => {
  const {loading, sendMessage} = useSendMessage();
  const [message, setMessage] = useState('')
  const handleSend = async (e) =>{
    e.preventDefault();
    await sendMessage(message)
    setMessage("")
  }
  return (
    <form action=""onSubmit={handleSend}>
    <div className="flex w-full h-12 bg-gray-800 py-2 items-center space-x-2 lg:mt-1 px-5">
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-grow h-full px-4 rounded-full bg-gray-700 text-white focus:outline-none"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        />
      <IoSend onClick={handleSend}/>
    </div>
        </form>
  );
};


export default SendMessage