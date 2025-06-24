import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useAuth } from "./AuthProvider";
import {io} from 'socket.io-client'
const socketContext = createContext();


export const useSocketContext = ()=>{
    return useContext(socketContext);
}

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([])
  const authUser = useAuth();
  

  useEffect(() => {
    if(authUser?.authUser?.user?._id){
        const socket = io(`${import.meta.env.VITE_BACKEND_URL}`, {
      query: {
        userId: authUser.authUser.user._id,

      },
    });
    setSocket(socket)
    socket.on("getOnlineUsers", (users) =>{
        setOnlineUsers(users)
    })
    return()=>socket.close();
    } else{
        if(socket){
            socket.colse();
            setSocket(null);
        }
    }
    
  }, [authUser]);
  return(
    <socketContext.Provider value={{socket, onlineUsers}}>
        {children}
    </socketContext.Provider>
  )
};
