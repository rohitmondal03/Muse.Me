import React from 'react'
import { useParams } from 'react-router-dom'
import galleryData from "../PhotoGallery/galleryData"
import ErrorPage from "../../components/ErrorPage"

const DynamicGallery = () => {

    const { slug } = useParams();
    const data = galleryData.find(item => item.dynamicLink === slug)

    return (
        data
            ?
            <>
                <div className='dyn_gallery_sec_text'>
                    <h1 className='text-black'>{data.title}</h1>
                </div>

                <div className='dyn_gallery_sec_img'>
                    <div>
                        {data.imagesArray.map(img => (
                            <img
                                src={img}
                                alt='gallery-photos'
                                className='h-96 w-fit'
                            />
                        ))}
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