import React from 'react'
import './SlideDrawer.css'
import Logo from '../../logo/logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const SlideDrawer = (props) => {
    return(
        <header>
        <div className="SideDrawer">
        <Logo/>
        
        </div>
        
        <nav>
        <NavigationItems/>
    </nav>
    </header>
   )
}

export default SlideDrawer