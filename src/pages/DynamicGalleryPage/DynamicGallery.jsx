import React from 'react'
import { useParams } from 'react-router-dom'
import "./DynamicGalleryPage.css"
import galleryData from "../PhotoGallery/galleryData"
import ErrorPage from "../../components/ErrorPage"
import Navbar from "../../components/Navbar/Navbar"

const DynamicGallery = () => {

    const { slug } = useParams();
    const data = galleryData.find(item => item.dynamicLink === slug)

    return (
        data
            ? <>
                <Navbar 
                    pos= "static"
                    bgColor= "bg-white"
                    hoverProps= "hover:text-red-600 hover:scale-110"
                />

                <div className='dyn_gallery_sec text-center flex flex-col items-center justify-center'>
                    <div className='dyn_gallery_sec_text mb-32'>
                        <h1 className='text-black text-7xl font-bold my-16'>{data.title}</h1>
                        <p className='text-xl px-20'>{data.abt}</p>
                    </div>

                    <div className='dyn_gallery_sec_img'>
                        <h1 className='text-5xl mb-10 font-bold underline'>{data.title} gallery...</h1>
                        <div className='flex flex-row items-center justify-center flex-wrap'>
                            {data.imagesArray.map(img => (
                                <img
                                    src={img}
                                    alt='gallery-photos'
                                    className='h-96 w-fit m-10 rounded-xl'
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </>
            :
            <>
                <ErrorPage />
            </>
    )
}

export default DynamicGallery;