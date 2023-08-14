import {useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import './Link.css'
import {AiOutlineMenu} from 'react-icons/ai'
import { IconContext } from "react-icons";
import { MainContext } from '../App';





export const Navbar = (props) => {
  const [mobileMenu, setMobileMenu] = useState('off')
  const {theme,}= useContext(MainContext)
  const toggleMobileMenu = ()=>{
    mobileMenu === 'off'? setMobileMenu('on'): setMobileMenu('off')
    console.log(mobileMenu)
  } 
  const fixeMenu = ()=>{
    window.innerWidth > 690 && setMobileMenu('off')

  } 

  window.addEventListener('resize',fixeMenu)
  console.log(mobileMenu)
  return (
    <div className={'nav-bar'}>
        <div className='wide-menu'>
          <Link to='/'> Home</Link>
          <Link to='/excuse'> Excuse</Link>
          <Link to='/books'> Books</Link>
          {/* <Link to='/country'> Country</Link> */}
          <Link to='/countries'> Countries</Link>
          <Link to='/profile'> Profile</Link>
        </div>
       {mobileMenu === 'off'?<></>: <div className={theme}>
          <div className='narrow-menu'>
            <Link to='/'> Home</Link>
            <Link to='/excuse'> Excuse</Link>
            <Link to='/books'> Books</Link>
            <Link to='/countries'> Countries</Link>
            <Link to='/profile'> Profile</Link>
          </div>
          
        </div>
        
        }
        
        <div onClick={toggleMobileMenu}>
          <IconContext.Provider value={{ className: "Menu-icon" }}>
            <AiOutlineMenu size={30}/>
          </IconContext.Provider>
        </div>
        

    </div>
  )
}
