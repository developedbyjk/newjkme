import React from 'react'
import Navbar from './Navbar'
export default function Home(){
    return(
        <div>

            <Navbar/>
            <div className='hero'>
                <h1>Building Awesome<br/>
                Things with code!
                </h1>
                <button>Explore</button>
            </div>

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
                </div>
                
            </div>
              
        </div>
  
    )
}