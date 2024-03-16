import React from 'react'
import logo from "../images/logo.png"
function Footer() {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h1><img src={logo} alt="" /></h1>
                <p>Chooe your favourite destination.</p>
            </div>
            <div>
                <a href='/'>
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-behance-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-twitter-square'></i>
                </a>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <h4>Projects</h4>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
            </div>
            <div>
                <h4>Projects</h4>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
            </div>
            <div>
                <h4>Projects</h4>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
            </div>
        </div>

    </div>
  )
}

export default Footer