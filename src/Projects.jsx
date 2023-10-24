import React from 'react';
import Navbar from './Navbar';
import { data } from './projectdata';
import './App.css'; 

export default function Projects(){


    
let renderProject = '';
const mapoverproject = data.map((item,key)=>{
    console.log("because " + item.name);
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
        <h1 id="center">Projects</h1>
        <div className="projects">
            

            {renderProject}
           

            </div>
       
        </>

    )
}
