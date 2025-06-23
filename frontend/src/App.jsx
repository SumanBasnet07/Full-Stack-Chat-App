import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup'
import Login from './components/Login'
import HomePage from './pages/HomePage';
import { useAuth } from './context/AuthProvider';
import toast,{Toaster} from 'react-hot-toast'
const App = () => {
  const {authUser} = useAuth();
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={authUser? <HomePage />:<Signup/>} />
        <Route path="/login" element={authUser? <HomePage/>:<Login />} />
        <Route path="/" element={authUser?<HomePage/>: <Login/>} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
    </>
  
  )
}

export default App