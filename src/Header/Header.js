
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import "./header.css"
import bob from '../bob.png'
import {Navbar} from './Navbar'


const Header = (props) => {

  return (
    <div className={props.theme}>
      <div className={`header shadow`}>
        <div   className={"main-header shadow"}>
              <div className='logo'>
                <img src={bob} alt='logo' />
              </div>
              <div className='Navbar'>
                <Navbar/>
              </div>
              <div onClick={props.handleClick} className='dark-mode '>
                  
                 {props.theme === 'dark'?< BsMoonStarsFill/>:<BsSunFill/> }
                 {props.theme === 'dark'?<h3 className='mode'>Dark Mode</h3>:<h3 className='mode'>light Mode</h3> } 

              </div>
          </div>

      </div>

    </div>
  )
}


export default Header