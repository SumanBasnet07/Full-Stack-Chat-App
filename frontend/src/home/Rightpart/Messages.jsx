import React, { useEffect, useRef } from 'react'
import useGetMessage from '../../context/useGetMessage.js'
import Loading from '../../components/Loading.jsx'
import Message from './Message.jsx'
import UseGetSocketMessage from '../../context/UseGetSocketMessage.js'

const Messages = () => {
  const {loading, messages} = useGetMessage();
  UseGetSocketMessage();
  
  const lastMsgRef = useRef();
  useEffect(() => {
    setTimeout(()=>{
      if(lastMsgRef.current){
        lastMsgRef.current.scrollIntoView({behavior:"smooth"})
      }
    },100)
  }, [messages])
  

  return (
    <div className=' overflow-y-auto' style={{ height: "calc(100vh - 16vh)" }}>
      {loading?(<Loading/>):(messages.length>0 && messages.map((message)=>(
        <div key={message._id} ref={lastMsgRef}>
          <Message key={message._id} message={message}/>

        </div>
      )))}

        {!loading && messages.length===0 &&(
        <div>
          <p className='text-center mt-6'>Say! Hi to start conversation</p>
        </div>
        ) }
    </div>
  )
}

export default Messages