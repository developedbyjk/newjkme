import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faXmark } from "@fortawesome/free-solid-svg-icons";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

export default function Navbar(){

    // const [open,SetOpen] = React.useState(false)



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

        <a href="#home" className="navlink">Home</a>
      <a className="navlink" href="#about">About</a>
      <a  className="navlink" href="#skills">Skills</a>
      <a  className="navlink" href="#projects">Projects</a>
      <a  className="navlink" href="#contact">Contact</a>


             </div>


              
        </div>
  
    )
}