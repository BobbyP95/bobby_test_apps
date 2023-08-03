//Search ^ Filter Components
import Search from './Search'
import Filter from './Filter'

import './search.css'


const FilterAndSearch = (props) => {

  return (
    <div className='search-div'>
        <Search theme={props.theme}/>
        <Filter/>
    </div>
  )
}

export default FilterAndSearch;