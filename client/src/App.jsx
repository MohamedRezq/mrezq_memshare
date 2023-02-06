import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Home from './containers/Home'

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const loggedUser = localStorage.getItem('user')
    if (!loggedUser) navigate('/login')
  }, [])

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}

export default App
