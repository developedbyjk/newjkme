import React from 'react'


export default function Home(){
    return(
        <div>

          
            <div className='home' id="home">
                {/* <h1>Building Awesome<br/>
                Things with code!
                </h1>
                <button className='blackbtn'>Explore</button> */}
                <div className="info">

                    <p>
                        Hi👋 <br/>
                        i am 
                        <span id="awesome">
                        Juned khan
                        </span>👨‍💻
                         <br/>
                        I love to create <br/>
                        <span id="awesome">
                        Awesome 
                         </span>✨
                          things on Web 🌎
                    </p>

                </div>
                <div className="pic">
                    <img src="https://i.postimg.cc/kgpXT9PL/myimg.jpg" alt="me"  />
                </div>
            </div>
            </div>       
  
    )
}