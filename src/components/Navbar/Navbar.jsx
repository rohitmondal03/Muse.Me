import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import "./Navbar.css"
import logo_img from "../../assets/logo.png"



const Navbar = (props) => {

    const navigate = useNavigate();


    // NAVBAR ITEMS THAT ARE MAPPED.
    const navitems = [
        {
            title: 'Home',
            redirect: "/home",
        },

        {
            title: "Gallery",
            redirect: "/gallery"
        },
    ]



    return (
        <motion.nav
            className={`navbar ${props.pos} ${props.bgColor} ${props.textColor} px-10 py-5 flex flex-row justify-around items-center z-10`}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, }}
            exit={{ x: window.innerWidth, transition: { duration: 0.75 } }}
        >
            <div
                className='logo flex flex-row items-center justify-evenly cursor-pointer'
                onClick={() => { navigate("/") }}
            >
                <img
                    src={logo_img}
                    alt='logo-img'
                    className='h-20 mr-5'
                />
                <h5 className='text-4xl font-extrabold'>Muse.Me</h5>
            </div>

            <div className='nav_items'>
                <ul className='flex flex-row items-center justify-around'>
                    {navitems.map(data => {
                        return (
                            <li
                                key={data.title}
                                className={`px-8 text-2xl cursor-pointer transition ${props.hoverProps} first-letter:text-4xl first-letter:font-semibold`}
                                onClick={() => { navigate(data.redirect) } }
                            >
                                {data.title}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </motion.nav>
    )
}

export default Navbar