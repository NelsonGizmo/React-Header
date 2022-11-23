import React from 'react'
import NavComp from '../Components/NavComp'
import SearchComp from '../SearchComp'
import logo from "../logo.svg"



const Header = () => {
  return (
    <div className='header'>
       <div>
       <img src={logo} alt="logo" className='App-logo' width="300px" height="150px"/>
       </div>
        <NavComp />
        <SearchComp />
    </div>
  )
}


export default Header