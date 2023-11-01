import React from 'react'

export default function About(){
    return(
        <>        
       <h1 id="center">About</h1>
        <div className="intro" id="about">

        <div className="pic">
            <img src="https://i.postimg.cc/RZ4WxShv/myimg.jpg" alt="jkimg" />
        </div>
        <div className="line-up">
            
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
                {/* <button className='blackbtn'>Know more</button> */}
            </div>

       </div>
        </>

        )
}