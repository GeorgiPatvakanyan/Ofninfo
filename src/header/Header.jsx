import React from 'react'
import './Header.scss'
import  { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='wrapper'>
      <div className='contacts'>
        <a href="#"><div className='phon'></div></a>
        <a href="#"><p>7600003897</p></a>
        <a href="#"><div className='mail'></div></a>
        <a href="#"><p>info@ofniinfo.com</p></a>
      </div>
      <div className='vectors'>
        <div className='box'>
          <a href="#"><div className='google'></div></a>
          <a href="#"><div className='instagram'></div></a>
          <a href="#"><div className='linkdin'></div></a>
          <a href="#"><div className='whatsapp'></div></a>
        </div>
      </div>
      <div className='logodiv'>
        <div className="logo"></div>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div className="buttondiv">
          <button className='button'>Let's talk</button>
        </div>
      </div>
    </div>
  )
}
