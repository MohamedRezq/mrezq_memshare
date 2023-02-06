import React, { useRef, useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'
import logo from './../assets/logo.png'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const loggedUser = localStorage.getItem('user')
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const [user, setUser] = useState()
  const scrollRef = useRef(null)
  useEffect(() => {
    console.log(loggedUser)
  }, [])
  useEffect(() => {
    scrollRef.current.scrrollTo(0,0);
  }, [])
  
  return (
    <div className="">
      <Sidebar />
    </div>
  )
}

export default Home
