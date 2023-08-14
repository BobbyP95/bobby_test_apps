import {useContext} from 'react'
import { MainContext } from '../../App'
import {TbWorldSearch} from 'react-icons/tb'


const Search = (props) => {
  const {setSearchInput} = useContext(MainContext)
  return (
    <div className='Search-div shadow'>
        <div className='icon_div'><TbWorldSearch size={30}/> </div>
        
        <input onChange={(e)=>setSearchInput(e.target.value)} className='pick' type="text" placeholder='Type to search ...' />
    </div>
  )
}

export default Search