import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.svg'
import searchIcon from '../../assets/search.svg'
import chevronDownIcon from '../../assets/chevronDown.svg'

export default function NavBar() {
    return (
        <div className='NavBar'>
            <div className='NavBar_RightSide'>
                <a href='/'><img src={logo} alt='EDYODA' className='NavBar_Logo' /></a>
                <button>Courses <img src={chevronDownIcon} alt='>' /></button>
                <button>Programs <img src={chevronDownIcon} alt='>' /></button>
            </div>
            <div className='NavBar_LeftSide'>
                <img src={searchIcon} alt='search' className='NavBar_SearchBtn' />
                <button>Log In</button>
                <button className='NavBar_JoinNowButton'>Join Now</button>
            </div>
        </div>
    )
}
