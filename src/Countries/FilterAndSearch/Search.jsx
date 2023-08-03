import {useContext} from 'react'
import { MainContext } from '../../App'



const Search = (props) => {
  const {setSearchInput} = useContext(MainContext)
  return (
    <div className='Search-div shadow'>
        <img src={"../../public/search "+props.theme+".svg"} alt="" />
        <input onChange={(e)=>setSearchInput(e.target.value)} className='pick' type="text" placeholder='Search for a country...' />
    </div>
  )
}

export default Search