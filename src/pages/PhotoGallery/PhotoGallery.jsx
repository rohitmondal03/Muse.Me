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
            className='my-10 mx-auto text-xl w-4/5 first-letter:text-3xl first-letter:font-bold'
          >
            Yes, I call it "Frames", because they are my picture close to my heart. I still remember, it was the December year '21 and I was really happy to make new friends, new bonds and of course new memories.
            I was selected at NIT Raipur, the very best college of not just my city, but the whole state Chhattisgarh. Firstly, I was not that happy as I will not be able to live in hostel, but tha haven't bothered me later, as my father's health condition is not that good. Our college first started at online mode due to pandemic. I still remembered the very first day and very first hour I have messaged "Ritik", whom we call <span className='italic font-bold'>"Selmon"</span> and he referred me <span className='italic font-bold'>"Shera"</span> (Salman's bodyguard). He was from Orissa. He is a kind of guy who is serious when it needs to be, and at other times, just like me. <br /> Then, as the days went by, we started having online meets so that we can know and interact with our mates well. And that's where I met all my other fellas. First one, "Rakesh", a very <span className="italic font-bold">"desi vibe vala banda"</span>, who is from Chhatttisgarh only. Then it was "Ravi". He was also from Chhattisgarh. He and Rakesh are specialized in abusing in native language, and why not their homes are nearer to each other. Afterthat, it is our very own "Aryan". The guy who knows everything about me and has also told many things about me. At last, it is "Chitransh", "Harsh" (called as "Nahar", his last name) and "Aman". Aman has charactersticks very siimilar to Rakesh and Ravi. Nahar is <span className="italic font-bold">amir gujju boy</span>, belonging to Surat, Gujarat. One thing about Nahar is that, the girls in our college has some different attraction towards him. I wish, I too has the superpower as he has. Now, Chitransh, a very good boy, belonging to Indore. 
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