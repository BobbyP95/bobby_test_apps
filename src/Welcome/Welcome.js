import React from 'react'
import './Welcome.css'
import {useContext} from 'react'
import { MainContext } from '../App'
import {CatF} from '../CatFacts/CatF'
import { useToggle } from '../customHooks/useToggle'
export const Welcome = () => {
 const {user}=useContext(MainContext)
 const [see,setSee] = useToggle()
 let name = user.name

  return (

      <div >
        <div className="welcome">
          <h1 className='welcome-h1'>Welcome</h1>
          <button onClick={()=>setSee()}>{see?"Hide E-mail":"Show E-mail"}</button> 
          <h2>{name}</h2>
          {see?<h2>{user.email}</h2>:null}
          <CatF/>
        </div>
            
      </div>
    

      

  )
}
