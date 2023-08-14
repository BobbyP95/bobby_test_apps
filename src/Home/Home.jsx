import React from 'react'
import './Home.css'
import SocialMedia from './SocialMedia'
import Bottom from './Bottom'
import Skills from './Skills'
// import {CatF} from '../CatFacts/CatF'
import paint from './paint.png'
import responsive_img from './responsive web.png'
// import background from './background.png'

const Home = () => {

  return (

      <div className='main' >
        {/* <img src={background} alt='Backgound-pic'/> */}
        <section id="top">
            <div className="intro">
                <h4 className='Hello'>Hello, I'm</h4>
                <h2>Bobby Bruce Appiah</h2> 
                <h4>A Front-end Developer/Graphics Designer with a diverse range of skills including React,TypeScript, MySQL, Node, Python, Adobe Photoshop & Illustrator.</h4>  
         

            </div>
     
        </section>
        <section id="mid">
            
            <div className="left-side side">
                <img src={responsive_img} alt="Devices"/>
                <h4>
                    As a detail-oriented developer, I approach every project as an opportunity to blend aesthetic elegance with flawless functionality.
                    My commitment to responsive design ensures that each project caters to users on a range of devices and screen sizes.
                </h4>
                <div className="card"></div>
            </div>
            <div className="right-side side">
                <img src={paint} alt="Art"/>
                <h4>
                With a blend of artistic vision and technical prowess, I specialize in crafting user-centric graphics that not only catch the eye but also enhance the overall user experience. From sleek web interfaces to eye-catching illustrations, every project in this portfolio represents a unique challenge that I've had the pleasure of transforming into a visual masterpiece.
                </h4>
                <div className="card"></div>
                
            </div>
        </section>
        <section id='Skills'>
            <Skills/>
        </section>
        <section id='bottom'>
            <Bottom/>
        </section>
        <SocialMedia/>
      </div>
    

      

  )
}

export default Home;