import React, { useState } from 'react';
import axios from 'axios';
import useConversation from '../zustand/useConversation.js';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation(); // ✅ should be setMessage not setMessages

  const sendMessage = async (messageText) => {
    if (!messageText.trim()) return;
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/message/send/${selectedConversation._id}`,
        { message: messageText },
        { withCredentials: true }
      );

      const newMessage = response.data.newMessage;
      setMessage([...messages, newMessage]); // ✅ only add the actual message
    } catch (error) {
      console.log("error in send message", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;
