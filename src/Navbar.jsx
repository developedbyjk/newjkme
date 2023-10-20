import React from 'react'
import {  NavLink } from 'react-router-dom/dist'
export default function Navbar(){

    const activeStyle={
        color : 'green',
      
    }

    return(
        <div className='navbar'>

            <div className="logo">
                <h3>@developedbyjk</h3>
            </div>
            <div className="nav">
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

                </div>
              
        </div>
  
    )
}