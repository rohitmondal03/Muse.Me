import React from 'react'
import { useParams } from 'react-router-dom'
import galleryData from '../PhotoGallery/galleryData';

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
                />
            </>
            :
            <>
                <h1>No data found</h1>
            </>
    )
}

export default DynamicGallery;