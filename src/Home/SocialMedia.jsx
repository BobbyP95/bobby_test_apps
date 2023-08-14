import React from 'react'
import {BsTwitter} from 'react-icons/bs'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {AiFillLinkedin} from 'react-icons/ai'
import { IconContext } from "react-icons";

function SocialMedia() {
    const size = 50;

  return (
    <div className='social'>
        <IconContext.Provider value={{ className: "contactIcon" }}>
        <a href='https://twitter.com/BobbyBp95' target='_blank' rel="noreferrer"><BsTwitter size={size}/></a>
        <a href='https://www.instagram.com/bobbybp95/' target='_blank' rel="noreferrer"><BiLogoInstagramAlt size={size}/></a>
        <a href='https://www.linkedin.com/in/bobby-bruce-appiah-840358218/' target='_blank' rel="noreferrer"><AiFillLinkedin size={size}/></a>
         </IconContext.Provider>
 
    </div>
  )
}


export default SocialMedia