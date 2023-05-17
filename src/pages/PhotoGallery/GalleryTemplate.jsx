import React from 'react'

const GalleryTemplate = (props) => {
  return (
    <div className='gallery_sec_indivisual'>
        <img 
            src={props.src}
            className='main_img'
            alt='head-img'
        />
        <h1>Title</h1>
        <button>Open {props.title} gallery</button>
    </div>
  )
}

export default GalleryTemplate