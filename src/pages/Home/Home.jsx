import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Typed from 'typed.js'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import insta_img from "../../assets/instagram_logo.png"
import twitter_img from "../../assets/twitter_logo.png"
import linkedin_img from "../../assets/linkedin_logo.png"


const Home = () => {

    const navigate = useNavigate();

    //  REFERENCE FOR TYPING EFFECT
    const e = useRef(null);


    useEffect(() => {

        // TYPING EFFECT
        const typed = new Typed(e.current, {
            strings: ["developer.", "traveller.", "engineer.",],
            typeSpeed: 100,
            smartBackspace: true,
            startDelay: 100,
            backSpeed: 100,
            backDelay: 2000,
            shuffle: false,
            loop: true,
            loopCount: Infinity,
            cursorChar: ' |',
            showCursor: true,
        });

        return () => {
            typed.destroy();
        };

    },)


    // LOGO OF SOCIAL LINKS
    const socialLogo = [
        {
            src: twitter_img,
            alt: "twitter_logo",
            link: "https://twitter.com/RohitMo62534745"
        },

        {
            src: linkedin_img,
            alt: "linkedin_logo",
            link: "https://www.linkedin.com/in/rohit-mondal-61662a16b/"
        },

        {
            src: insta_img,
            alt: "insta_logo",
            link: "https://www.instagram.com/rohitmondallll/"
        }
    ]

    // FUNCTIONS FOR REDIRECTING TO NEW TAB, FOR SOCIAL LINKS
    function redirectToSocialLinks(link) {
        window.open(link, "_blank")
    }


    return (

        <>

            <Navbar 
                pos= "fixed"
                bgColor= "bg-transparent"
                textColor= "text-white"
                hoverColor= "hover:text-indigo-400"
            />

            <motion.div
                className='home p-28 text-white'
                initial={{ width: '0%', }}
                animate={{ width: '100%', }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                exit={{ x: window.innerWidth, transition: { duration: 0.75 } }}
            >

                <motion.div
                    className='home_page flex flex-row justify-between items-center'
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1.5, delay: 1.25 }}
                    animate={{ opacity: 1 }}
                >

                    {/* LEFT SCTIONS */}
                    <div className='home_text mr-5 w-1/2'>

                        <h1
                            className='small_text text-green-500 font-bold mt-20 sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl'
                        >
                            #<span ref={e}></span>
                        </h1>

                        <h1
                            className='text-white font-bold my-8 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
                        >
                            It's only worth it,
                            if you can enjoy it.
                        </h1>

                        <button
                            className='home_btn text-yellow-400 bg-transparent lg:mt-40 sm:text-xl md:text-xl lg:text-2xl xl:text-3xl hover:text-slate-200'
                            onClick={() => { navigate('/gallery') }}
                        >
                            Start Now
                        </button>

                    </div>

                    {/* RIGHT SECTIONS */}
                    <div className='home_abt px-5 py-3 w-1/2 h-96 text-zinc-100 overflow-y-scroll overflow-auto border-4 border-red-300 rounded-xl'>

                        <h1
                            className='text-5xl my-3 font-bold text-yellow-500'
                        >
                            Welcome to Muse.Me
                        </h1>

                        <p
                            className='text-lg'
                        >
                            Welcome to my personal gallery website! Here, you will find a diverse collection of my artwork, showcasing my passion for creativity and expression. From paintings and drawings to digital art and photography, I aim to explore various mediums and styles to create something unique and captivating.

                            My journey as an artist has been shaped by a variety of influences, including the natural world, different cultures, and the people around me. Each piece of artwork is a reflection of my personal experiences and emotions, and I hope that it resonates with those who view it.

                            In addition to traditional painting and drawing, I also enjoy exploring digital art. With technology constantly evolving, it opens up new possibilities for creativity and experimentation. Through digital art, I can create intricate designs and manipulate images in ways that would not be possible with traditional mediums.

                            Photography is also an important aspect of my artwork. I love to capture the beauty and essence of the world around me through my camera lens. Whether it's the vibrant colors of a sunset or the intricate details of a flower, photography allows me to freeze a moment in time and share it with others.

                            As you browse through my gallery, I hope that you find inspiration and joy in my artwork. Whether you are a fellow artist, art enthusiast, or simply appreciate the beauty of creativity, I welcome you to explore my collection and experience the world through my eyes.

                            Thank you for visiting my personal gallery website, and I hope that you enjoy the journey through my artwork as much as I have enjoyed creating it.
                        </p>
                    </div>

                </motion.div>

                <motion.div
                    className='social_links py-5 px-4  mt-40 border-transparent rounded-3xl flex flex-row justify-between items-center'
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{once: true}}
                >
                    <h1 className='text-4xl text-white '>Social Links</h1>

                    <div className='social_logo flex flex-row'>
                        {socialLogo.map(imgs => (
                            <div
                                id={imgs.alt}
                                className="social_logo_img mr-36 last-of-type:mr-0"
                            >
                                <img
                                    src={imgs.src}
                                    alt={imgs.alt}
                                    className='social_logo_img h-10 ml-2  cursor-pointer '
                                    onClick={() => { redirectToSocialLinks(imgs.link) }}
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>


            </motion.div>

        </>
    )
}

export default Home