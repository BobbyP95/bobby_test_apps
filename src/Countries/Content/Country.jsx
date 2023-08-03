// import React from 'react'
import {useContext,useState,useEffect} from 'react'
import { MainContext } from '../../App'
import {Link} from 'react-router-dom'





const Country = (props) => {
    const {theme,chosen,setChosen} = useContext(MainContext)
    const countryData = props.data
    const population = props.data?.population
    const work = ()=>{
        setChosen(countryData)
    }


    
    // console.log(countryData)
    return(
        <div key={props.myKey} onClick={work} className={theme + " rise"}>
            <Link to='/count'>
                <div className="one-country shadow">
                <div className="flag-div">
                    <img src={props.data?.flags.png} alt="" />
                </div>
                
                <h2>{props.data?.name.common}</h2>
                <div className="country-detail">
                    <h3>
                        Population: {population.toLocaleString("en-US")}
                    </h3>
                    <h3>
                        Region: {props.data.continents[0]}
                    </h3>
                    <h3>Capital: {props.data.hasOwnProperty('capital')?props.data.capital[0]:'null'}</h3>
                    
                </div>
                
                </div>
            </Link>
                
        </div>
        
    )
}

export default Country