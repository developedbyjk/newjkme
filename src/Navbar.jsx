import React from 'react'
import {  NavLink } from 'react-router-dom/dist'
export default function Navbar(){

    const [open,SetOpen] = React.useState(false)

    const activeStyle={
        color : 'green',
      
    }

    const toggleNavbar = () => {
        SetOpen(!open);
      };
    const style = {
        // display:open ? "block" : "none"
    }

    const navClass = open ? 'navbar open' : 'navbar';

    return(

        <div className={navClass}>


            <div className="logo">
                <h3>@developedbyjk</h3>
            </div>

            <div className="nav " style={style}>
             <NavLink 
                className="navlink"
                to="/"
                style={({isActive})=> isActive ? activeStyle : null} >
                Home
                </NavLink> 
                <NavLink 
                 className="navlink"
                to="/about"
                style={({isActive})=> isActive ? activeStyle : null} >
                About
                </NavLink>
                <NavLink 
                to="/projects"
                className="navlink"
                style={({isActive})=> isActive ? activeStyle : null}
                >
                Projects
                </NavLink>
                <NavLink to="/more"
                className="navlink"
                style={({isActive})=> isActive ? activeStyle : null}  
                   >
                More
                </NavLink>

                <button onClick={()=>SetOpen(prev=>!prev)}>X</button>

             </div>

            {/* <button id="wave" onClick={()=>SetOpen(prev=>!prev) }> 👋</button> */}
            <button id='wave' onClick={toggleNavbar}>👋</button>
              
        </div>
  
    )
}