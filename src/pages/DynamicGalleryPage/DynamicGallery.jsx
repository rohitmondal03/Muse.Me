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
                <h1 className='text-black'>{data.title}</h1>
                <img
                    src={data.imgSrc}
                    alt='head-img'
                />
                <div>
                    <div>{data.imagesArray.map(img => (
                        <img 
                            src={img}
                            alt='gallery-photos'
                        />
                    ))}</div>
                </div>
            </>
            :
            <>
                <ErrorPage />
            </>
    )
}

export default DynamicGallery;