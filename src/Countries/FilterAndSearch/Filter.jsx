
import {useContext} from 'react'
import { MainContext } from '../../App'
// type Props = {}

const Filter = () => {
  const {setFilterValue} = useContext(MainContext)

  return (
    <div className=' filter-div shadow'>
        <select className='pick' onChange={(e)=>setFilterValue(e.target.value)} name="Region-filter" id="">
                <option key='01'>All</option>
                <option key='02' >Africa</option>
                <option key='03' >Asia</option>
                <option key='08' >Antarctica</option>
                <option key='04' >Europe</option>
                <option key='05' >North America</option>
                <option key='06' >South America</option>
                <option key='07' >Oceania</option>
        </select>
    </div>
  )
}

export default Filter