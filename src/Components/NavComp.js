import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
  return (
    <nav className='nav'>
      {/* <a href='#'><span className='span1'>Home</span> </a>
      <a href='#'><span className='span2'>About</span></a>
      <a href='#'><span className='span3'>Blog</span></a> */}
      <Link to={"/"}>Home</Link>
      <Link to={"/About"}>About</Link>
      <Link to={"/Contact"}>Contact</Link>
      <Link to={"/Profile"}>Profile</Link>
      <Link to={"/Blog"}>Blog</Link>


    </nav>
  )
}

export default NavComp