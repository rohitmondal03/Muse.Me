import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Rellax from 'rellax'

const GalleryTemplate = (props) => {
  return (
    <Link to={`/gallery/${props.dynamicLink}`}>
      <div
        className='gallery_sec_indivisual mx-5 my-12 border-zinc-300 border-4 rounded-2xl p-10 transition duration-300 hover:scale-105'
      >
        <img
          src={props.src}
          className='main_img h-96 w-auto mx-auto rounded-2xl'
          alt='head-img'
        />
        <h1 className='text-5xl text-amber-400 mt-12'>{props.title}</h1>
        {/* <button>Open {props.title} gallery</button> */}
      </div>
    </Link>
  )
}

export default GalleryTemplate