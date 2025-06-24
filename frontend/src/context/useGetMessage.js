 import React, { useEffect, useState } from 'react'
 import useConversation from '../zustand/useConversation.js'
 import axios from 'axios'
 const useGetMessage = () => {
    const [loading, setLoading] = useState(false)
    const {messages, setMessage, selectedConversation} = useConversation();

    useEffect(() => {
      const getMessages = async ()=>{
        setLoading(true);
        if(selectedConversation){
          try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/message/get/${selectedConversation._id}`,{withCredentials:true})
            setMessage(response.data)
            setLoading(false)
        } catch (error) {
            console.log("Error in getting Messages", error)
        }
        }
        
      }
    getMessages();
      
    }, [selectedConversation, setMessage])
    
   return {loading, messages}
 }
 
 export default useGetMessage