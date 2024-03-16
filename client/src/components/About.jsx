import React from 'react'
import aboutimage from "../images/about.png"

function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt="" data-aos="fade-left" data-aos-duration="1500" />
        </div>
        <div className='about-text' data-aos="fade-right" data-aos-duration="1500">
            <h1>LEARN MORE ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, beatae!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolores ratione
                 maiores quo nemo vel voluptatem nostrum cumque natus aliquam!
            </p>
            <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About