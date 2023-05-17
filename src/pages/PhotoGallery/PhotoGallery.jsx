import React from 'react'
import { motion } from 'framer-motion'
import "./PhotoGallery.css"
import Navbar from "../../components/Navbar/Navbar"

const PhotoGallery = () => {


  // FOR BG COLOR OF BOTH NAVBAR AND MAIN COMPONENT
  const bgColor = "bg-slate-500"


  return (
    <>

      <Navbar
        pos="fixed"
        bgColor="bg-transparent"
        textColor="text-yellow-400"
        hoverColor="hover:text-rose-400"
        className='hidden'
      />


      <motion.div
        className={`gallery_sec ${bgColor} text-center h-screen py-40`}
      >



        {/* TEXT SECTION */}

        <div className='gallery_sec_text'>

          <h1
            className='text-7xl my-10 text-rose-600 font-bold'
          >
            Momentos...
          </h1>

          <p
            className='my-10 mx-auto text-xl text-white w-4/5'
          >

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at varius ipsum. Quisque vel est sollicitudin lectus sollicitudin varius. Aliquam diam ante, placerat vitae leo eget, tincidunt luctus ligula. Ut mi nibh, finibus vitae lobortis iaculis, elementum in lectus. Suspendisse potenti. Ut id ligula elit. Sed posuere risus urna, vitae luctus metus ullamcorper tincidunt.

            Duis vitae enim nisi. Proin feugiat eros non nisi ultrices, et condimentum mi maximus. Morbi purus leo, dictum ut neque vitae, molestie luctus velit. Mauris vehicula sagittis arcu sed semper. Nunc quis venenatis est. Curabitur non erat fermentum, cursus arcu eu, vulputate odio. Praesent vel eros non nisl dictum auctor vitae non justo. Maecenas tincidunt in turpis ac sodales. Maecenas vitae nunc arcu. Nam accumsan sem ultrices felis vestibulum, eu porta urna vestibulum. Pellentesque a arcu eget tellus semper luctus ac fermentum metus. Aliquam in massa id lorem volutpat pellentesque quis ac nisi. Sed cursus lacus in turpis tincidunt, sed faucibus quam blandit. Vivamus convallis iaculis erat, et ornare ante.

            Morbi sit amet sem sodales, eleifend est non, porta felis. Cras tempor lacus ac ligula dignissim, ac pretium odio sollicitudin. Proin fringilla urna quis luctus sollicitudin. Cras ac maximus massa. Proin at bibendum nisi. Nullam sed.
          </p>

        </div>



        {/* GALLERY SECTION */}

        <div className='gallery_sec_photos'>
          // HERE GALLERY TEMPLATE WILL COMPONENT
        </div>

      </motion.div>


    </>
  )
}

export default PhotoGallery