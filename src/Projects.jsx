import React from 'react'
import Navbar from './Navbar'
import { data } from './projectdata'

export default function Projects(){


    
let renderProject = '';
const mapoverproject = data.map((item,key)=>{
    return(
        <>
            <div className="box">
                    <div className="emoji">{item.emoji}</div>
                    <div className="name">{item.name}</div>
                    <div className="desc">{item.desc} </div>
                    <button className='blackbtn'><a href={item.link}>Try Now!</a></button>
                </div>
        </>
    )
})
renderProject = mapoverproject;


    return(
        <>
        <Navbar/>
        {renderProject}
        </>

    )
}
