import React from 'react'
import './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../logo/logo'
const toolbar = () => (
    <header className="toolbar">
    <div>Menu</div>
    <div><Logo></Logo></div>
    <nav>
        <NavigationItems/>
    </nav>
    </header>
)

export default toolbar