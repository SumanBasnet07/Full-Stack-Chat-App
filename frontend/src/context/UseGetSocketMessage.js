import { useEffect } from "react";
import { useSocketContext } from "./SocketContext.jsx";
import useConversation from "../zustand/useConversation.js";
import sound from '../assets/notification.mp3'; 

const UseGetSocketMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessage } = useConversation(); // useConversation returns an object, not an array

  useEffect(() => {
    if (!socket) return;

    socket.on("newMessage", (newMessage) => {
      const notificationSound = new Audio(sound)
      notificationSound.play();
      setMessage([...messages, newMessage]); // Correct spread syntax inside array
    });

    return () => {
      socket.off("newMessage");
    };
  }, [socket, messages, setMessage]); // include all deps

  return null; // since this hook doesn't return JSX
};

export default UseGetSocketMessage;
