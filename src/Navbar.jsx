import React from 'react'
import {  NavLink } from 'react-router-dom/dist'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){

    // const [open,SetOpen] = React.useState(false)

    const activeStyle={
        color : 'aliceblue',
        backgroundColor:'black',
        borderRadius : '5px',
        padding:'10px',
        textDecoration : 'none'
      
    }

    const [showNavbar, setShowNavbar] = React.useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }



    return(

        // <div className={navClass}>
        <div className='navbar'>


            <div className="logo">
                <h3>@developedbyjk</h3>
            </div>
            
        <div className="menu-icon" onClick={handleShowNavbar}>
        <FontAwesomeIcon icon={showNavbar ? faXmark  : faBars} />
        </div>


            {/* <div className="nav " style={style}> */}
            <div className={`nav  ${showNavbar && 'active'}`}>
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

                {/* <button onClick={()=>SetOpen(prev=>!prev)}>X</button> */}

             </div>

            {/* <button id="wave" onClick={()=>SetOpen(prev=>!prev) }> 👋</button> */}
            {/* <button id='wave' onClick={toggleNavbar}>👋</button> */}
              
        </div>
  
    )
}