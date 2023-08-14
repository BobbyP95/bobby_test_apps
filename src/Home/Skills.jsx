import React from 'react'
import html from './skill_icons/html.svg'
import css from './skill_icons/css3.svg'
import js from './skill_icons/js.svg'
import reactPic from './skill_icons/react.svg'
import typescript from './skill_icons/typescript.svg'
import node from './skill_icons/node.svg'
import illustrator from './skill_icons/illustrator.svg'
import photoshop from './skill_icons/photoshop.svg'
import mysql from './skill_icons/mysql.svg'


function Skills() {


    // List of skill SVG logos & respective name in objects
    const skillsArray =[{ name:'HTML',img:html},{ name:'CSS',img:css},{ name:'Javascript',img:js},{ name:'Typescript',img:typescript},{ name:'Node',img:node},{ name:'React',img:reactPic},{ name:'Adobe Photoshop',img:photoshop},{ name:'Adobe Illustrator',img:illustrator},{ name:'MySQL',img:mysql}]



  return (

    <div className='skills'>
             
        <h2>Skills</h2>
   
        <div >
            <div className='side big-side'>

            { skillsArray.map((obj,index)=><div key={index}>
                    <img src={obj.img} alt={obj.name} height="100" width="100" />
                    <h3>{obj.name}</h3>
                </div>)}

                
            </div>
        </div>
    </div>
  )
}

export default Skills