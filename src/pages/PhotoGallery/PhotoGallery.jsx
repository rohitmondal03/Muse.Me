import React from 'react'
import { motion } from 'framer-motion'
import "./PhotoGallery.css"
import Navbar from "../../components/Navbar/Navbar"

const PhotoGallery = () => {


  // FOR BG COLOR OF BOTH NAVBAR AND MAIN COMPONENT
  const bgColor= "bg-slate-500"


  return (
    <>

      <Navbar 
        pos= "static"
        bgColor= {bgColor}
        textColor= "text-red-400"
        hoverColor= "hover:text-orange-100"
      />

      <motion.div
        className={`gallery_sec ${bgColor} text-center  text-white h-screen py-20`}
      >
        <h1 className='text-6xl'>Rohit's Gallery !!!</h1>

        <p>Welcome peeps</p>
      </motion.div>

    </>
  )
}

export default PhotoGallery