import React from 'react'
import Navbar from './Navbar'
import { data } from './projectdata'


export default function Home(){

        console.log(data);


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


console.log("render pojrec is" + renderProject)

    return(
        <div>

            <Navbar/>
            <div className='hero'>
                <h1>Building Awesome<br/>
                Things with code!
                </h1>
                <button className='blackbtn'>Explore</button>
            </div>

{/* THIS IS INTRO SECTION */}

            <div className="intro">

                <div className="pic">
                    <img src="https://i.postimg.cc/RZ4WxShv/myimg.jpg" alt="jkimg" />
                </div>

                <div className="info">
                    <h2>
                        Hi! i am <br/>Junedkhan
                    </h2>
                    <p>
                    Since  9 grade i was fascinated by  changing colors in html. Turn out that i love to develop cool stuff on web!  
                    </p>
                    <p>And here i am Messing around the physical 
                        world with digital Code!
                    </p>
                    <button className='blackbtn'>Know more</button>
                </div>
                
            </div>

            <div className="skills">
                <h1>Skills</h1>
                <div className="pts">
                    <div className="pt1">
                    <p>📙Html * * * *</p>
                    <p>📗Css * * * *</p>
                    <p>📕Js * * * *</p>
                    </div>
                    <div className="pt2">
                    <p>⚛️React * * * *</p>
                    <p>🔥Firebase * * * *</p>
                    <p>🎨Figma * * * *</p>
                    </div>
                </div>
                
            </div>
            
            <h1>Projects</h1>
            <div className="projects">
           

            {renderProject}
           
                {/* <div className="box">
                    <div className="emoji">😒</div>
                    <div className="name">Angry pill</div>
                    <div className="desc">Turn your  Anger into
amazing blue shie luster with our new </div>
                    <button className='blackbtn'>Try now</button>
                </div> */}
            </div>


              
        </div>
  
    )
}