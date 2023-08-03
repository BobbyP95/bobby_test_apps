import React from 'react'
import FilterAndSearch from './FilterAndSearch/FilterAndSearch'

//
import {useContext} from 'react'
import { MainContext } from '../App'
import Content from './Content/Content'


export default function Countries() {
    const {theme} = useContext(MainContext)
  return (
    <div>
        <FilterAndSearch theme={theme}/>
        <Content/>
    </div>
  )
}
