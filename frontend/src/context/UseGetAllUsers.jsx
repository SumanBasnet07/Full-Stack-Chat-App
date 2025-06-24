import React, { useState } from 'react'
import { useEffect } from 'react';
import Cookies from 'js-cookie'
import axios from 'axios'

const UseGetAllUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      const getUsers = async ()=>{
        setLoading(true)
        try {
              const token = Cookies.get('jwt');
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/allusers`,{
            withCredentials:true,
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        setAllUsers(response.data)
        setLoading(false)
        } catch (error) {
            console.log(error)
        }
      
      }
      getUsers();
    }, [])

    return[allUsers, loading]
    
}

export default UseGetAllUsers