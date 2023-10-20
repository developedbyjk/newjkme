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
                to="/"
                style={({isActive})=> isActive ? activeStyle : null} >
                Home
                </NavLink>
                <NavLink 
                to="/about"
                style={({isActive})=> isActive ? activeStyle : null} >
                About
                </NavLink>
                <NavLink to="/projects" >
                Projects
                </NavLink>
                <NavLink to="/more" >
                More
                </NavLink>

                </div>
              
        </div>
  
    )
}