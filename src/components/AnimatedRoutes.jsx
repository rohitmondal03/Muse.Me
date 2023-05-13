import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Enter from '../pages/EnterPage/Enter'
import Home from '../pages/Home/Home'
import Memory from '../pages/Memory/Memory'
import PhotoGallery from '../pages/PhotoGallery/PhotoGallery'

const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Enter />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/memories' element={<Memory />} />
                    <Route path='/gallery' element={<PhotoGallery />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default AnimatedRoutes