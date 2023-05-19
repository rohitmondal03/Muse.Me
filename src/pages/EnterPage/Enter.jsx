import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import "./Enter.css"
import camera_img from "../../assets/camera_img.png"

const Enter = () => {

    return (
        <motion.div
            className='enter bg-black flex flex-col items-center justify-center'
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.75, }}
            exit={{ x: window.innerWidth, transition: {duration: 0.5} }}
        >

            <motion.img
                src={camera_img}
                alt='logo-img'
                className='h-96 w-96 mx-auto my-10'
                initial={{ opacity: 0, x: '-150rem' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 40 }}
            />

            <motion.button
                className='btn text-5xl font-bold mx-auto py-5 px-10 rounded-lg border hover:bg-slate-200 hover:text-black'
                initial={{ opacity: 0, x: '-150rem' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 80, duration: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
            >
                <Link
                    to='/home'
                >
                    Enter Muse.me
                </Link>
            </motion.button>

        </motion.div>
    )
}

export default Enter