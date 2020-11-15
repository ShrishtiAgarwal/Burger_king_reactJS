import React from 'react'
import logo from '../../assets/images/burger-logo.png'
import './logo.css'

const Logo = (props) =>(
    <div className="logo" style={{height: props.height}}>
        <img className="imgi" src={logo} alt="My Burger"></img>
    </div>
)

export default Logo
{/* <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurger" />
    </div> */}