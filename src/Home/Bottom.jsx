import {useContext} from 'react'
import { MainContext } from '../App'
import {BsTwitter} from 'react-icons/bs'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import bobby from './skill_icons/Bobby Bruce Appiah_Photo .jpg'



function Bottom() {
  const{theme,} = useContext(MainContext)
  return (
    
    <div className={theme} >
        <div className='bottom-div'>
          <div className='bottom-bio'>
            <div className='dp'>
              <img src={bobby} alt="Bobby Bruce-Appiah"/>
              <h2>Bobby Bruce-Appiah</h2>
            </div>
            <p>With a blend of artistic vision and technical prowess, I specialize in crafting user-centric graphics that not only catch the eye but also enhance the overall user experience. From sleek web interfaces to eye-catching illustrations, every project in this portfolio represents a unique challenge that I've had the pleasure of transforming into a visual masterpiece.</p>
          

            <div className='bottom-social-media'>
            <div className='bottom-sm-icon-div' >
              <a href='https://twitter.com/BobbyBp95' target='_blank' rel="noreferrer">< BsTwitter size={30}/>-Twitter</a>
              <h3>Follow for web design & development articles,opinions & links</h3>
            </div>
            <div className='bottom-sm-icon-div' >
              <a href='https://www.instagram.com/bobbybp95/' target='_blank' rel="noreferrer">< BiLogoInstagramAlt size={30}/> -Instagram</a>
              <h3>Follow for mor digital artworks</h3>
            </div>
            <div className='bottom-sm-icon-div' >
              <a href='https://www.linkedin.com/in/bobby-bruce-appiah-840358218/' target='_blank' rel="noreferrer"> < AiFillLinkedin size={30}/> -Linkedin</a>
              <h3>Let's connect on linkedin</h3>
            </div>
            <div className='bottom-sm-icon-div' >
              <a href='https://github.com/BobbyP95/' target='_blank' rel="noreferrer"> < BsGithub size={30}/> -GitHub</a>
              <h3>Follow for more open source projects</h3>
            </div>
          
          </div>

 

            
          
          </div>
          
          <h3 className='copyright'>Copyright © 2023 Bobby Bruce-Appiah</h3>
        </div>

    </div>
  )
}

export default Bottom