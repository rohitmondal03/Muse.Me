import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import "./PhotoGallery.css"
import Navbar from "../../components/Navbar/Navbar"
import galleryData from './galleryData'
import GalleryTemplate from './GalleryTemplate'
import Rellax from 'rellax'


const PhotoGallery = () => {

  useEffect(() => {
    var rellax = new Rellax('.rellax');
  })



  return (
    <>

      <Navbar
        pos="fixed"
        bgColor="bg-transparent"
        textColor="text-slate-300"
        hoverProps="hover:text-amber-300"
      />


      <motion.div
        className={`gallery_sec rellax bg-slate-500 text-white text-center py-40`}
        initial={{ width: '0%', }}
        animate={{ width: '100%', }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.75 } }}
      >



        {/* TEXT SECTION */}

        <motion.div
          className='gallery_sec_text rellax border-2 border-slate-300 rounded-xl'
          data-rellax-speed="6"
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          animate={{ opacity: 1 }}
        >

          <h1
            className='text-7xl my-10 text-red-500 font-bold spacin'
          >
            Frames...
          </h1>

          <p
            className='my-10 mx-auto text-xl w-4/5'
          >

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at varius ipsum. Quisque vel est sollicitudin lectus sollicitudin varius. Aliquam diam ante, placerat vitae leo eget, tincidunt luctus ligula. Ut mi nibh, finibus vitae lobortis iaculis, elementum in lectus. Suspendisse potenti. Ut id ligula elit. Sed posuere risus urna, vitae luctus metus ullamcorper tincidunt.

            Duis vitae enim nisi. Proin feugiat eros non nisi ultrices, et condimentum mi maximus. Morbi purus leo, dictum ut neque vitae, molestie luctus velit. Mauris vehicula sagittis arcu sed semper. Nunc quis venenatis est. Curabitur non erat fermentum, cursus arcu eu, vulputate odio. Praesent vel eros non nisl dictum auctor vitae non justo. Maecenas tincidunt in turpis ac sodales. Maecenas vitae nunc arcu. Nam accumsan sem ultrices felis vestibulum, eu porta urna vestibulum. Pellentesque a arcu eget tellus semper luctus ac fermentum metus. Aliquam in massa id lorem volutpat pellentesque quis ac nisi. Sed cursus lacus in turpis tincidunt, sed faucibus quam blandit. Vivamus convallis iaculis erat, et ornare ante.

            Morbi sit amet sem sodales, eleifend est non, porta felis. Cras tempor lacus ac ligula dignissim, ac pretium odio sollicitudin. Proin fringilla urna quis luctus sollicitudin. Cras ac maximus massa. Proin at bibendum nisi. Nullam sed.
          </p>

        </motion.div>



        {/* GALLERY SECTION */}

        <div>

          <h1
            className='gallery_sec_heading rellax text-6xl text-orange-400 text-center font- mt-28 mb-8 first-letter:text-7xl font'
            data-rellax-speed="2"
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 1.75 }}
            animate={{ opacity: 1 }}
          >
            Welcome to Gallery
          </h1>

          <div
            className='gallery_sec_photos rellax flex flex-row flex-wrap justify-center items-center'
            data-rellax-speed="10"
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 1.75 }}
            animate={{ opacity: 1 }}
          >

            {galleryData.map(data => (
              <GalleryTemplate
                title={data.title}
                src={data.imgSrc}
                dynamicLink={data.dynamicLink}
              />
            ))}

          </div>

        </div>

      </motion.div>

    </>
  )
}

export default PhotoGallery