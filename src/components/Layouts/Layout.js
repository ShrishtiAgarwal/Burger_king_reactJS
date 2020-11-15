
import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SlideDrawer from '../Navigation/SlideDrawer/Slidedrawer';
const Layout = (props) => (
   
        <Aux>
            <Toolbar/>
            <SlideDrawer/>
        {/* <div >Toolbar, SideDrawer, Backdrop</div> */}
        <main className="Content">
            {props.children}
        </main>
        </Aux>
    
)
export default Layout