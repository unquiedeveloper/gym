import React from 'react'
import Navbar from "../components/Navbar"
import { Link } from 'react-scroll'
import video from "../images/vedio.mp4"

export default function Header() {
    return (
        <>    
         <Navbar />
            <div id='main'>
                <div className='overlay'>
                    <video src={video} autoPlay loop muted  />
                </div>
                <div className='name'>
                    <h2>STEP UP YOUR</h2>
                    <h1><span>FITNESS</span>WITH US</h1>
                    <p className='details'>Build Your Body And Fitness With Professional</p>
                    <div className='header-btns'>
                        <Link to='#' className='header-btn'>JOIN US</Link>
                    </div>
                </div>


            </div>
        </>

    )
}
