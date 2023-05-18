import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Enter from '../pages/EnterPage/Enter'
import Home from '../pages/Home/Home'
import PhotoGallery from '../pages/PhotoGallery/PhotoGallery'
import DynamicGalleryPage from "../pages/DynamicGalleryPage/DynamicGallery"

const AnimatedRoutes = () => {

    const location = useLocation();
    // const { slug } = useParams();

    return (
        <>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Enter />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/gallery' element={<PhotoGallery />} />
                    <Route path='/gallery/:slug' element={<DynamicGalleryPage />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default AnimatedRoutes