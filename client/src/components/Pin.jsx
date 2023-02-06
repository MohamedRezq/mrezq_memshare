import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Pin = ({ pin }) => {
  const navigate = useNavigate()
  const [pinHovered, setPinHovered] = useState(false)
  const [savingPost, setSavingPost] = useState(false)
  const { postedBy, image, _id, destination } = pin

  return (
    <div className="m-2">
      <div
        onMouseEnter={() => setPinHovered(true)}
        onMouseLeave={() => setPinHovered(false)}
        onClick={() => navigate(`/pin/${id}`)}
        className="relative cursor-zoom-in rounded-lg overflow-hidden transition-all hover:shadow-lg duration-500 ease-in-out"
      ></div>
    </div>
  )
}

export default Pin
