import React from 'react'
import {  NavLink } from 'react-router-dom/dist'
export default function Navbar(){
    return(
        <div>

                <NavLink to="/about" >
                About
                </NavLink>
                <NavLink to="/projects" >
                Projects
                </NavLink>
                <NavLink to="/more" >
                More
                </NavLink>

         
              
        </div>
  
    )
}