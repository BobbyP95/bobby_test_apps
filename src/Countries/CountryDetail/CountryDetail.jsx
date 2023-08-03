
import {useContext,useState} from 'react'
import { MainContext } from '../../App'
import {Link} from 'react-router-dom'
import './countryDetail.css'

import  Axios  from 'axios'
import { useQuery } from '@tanstack/react-query'



const CountryDetail = () => {

  const {theme,chosen,api} = useContext(MainContext)
  
  const [cData, setCData] = useState(chosen)

  const {data,isError,isLoading} = useQuery(['countries'],async()=>{
    return Axios.get(api).then((res)=> res.data)
  })





  if(isLoading){
    return(<h1>Loading...</h1>)
  }
  if(isError){
    return(<h1>Error</h1>)
  }






  let keyNum = 0;
  const keyGen =()=>{
    const alpha = ['a','b','c','d','e','f','g','h','i']
    keyNum += 1
    const key= alpha[Math.floor(Math.random()*7)]+`${keyNum}`
    return key
}


  const findNation =(shortHand) => {
        const name = data.filter(data => data.cca3 === shortHand)[0].name.common;
    return name
  }


  const chooseCountry =(e)=>{
    const event= e.target.innerHTML
    const country = data.filter(data => data.name.common === event)[0]
    setCData(country)
    window.localStorage.setItem('localChosen', JSON.stringify(country))
    console.log(event)
    console.log(country)
  }





  console.log(cData)
  const flagSource = cData?.flags.png;
  const commonName = cData?.name.common;
  const nativeName =cData?.name.hasOwnProperty('nativeName')?Object.values(cData?.name.nativeName)[0].common:null;
  const population = cData?.population.toLocaleString("en-US");
  const region = cData?.region;
  const subRegion = cData?.subregion;
  const capital = cData?.hasOwnProperty('capital')?cData.capital[0]:null;
  const topLevelDomain = cData?.tld[0];
  const currency = cData?.hasOwnProperty('currencies')?Object.values(cData?.currencies)[0].name:null;
  const language = cData.hasOwnProperty('languages')?Object.values(cData?.languages)[0]:null;
  console.log(cData?.name.hasOwnProperty('nativeName'));  
  const borders = cData?.hasOwnProperty('borders')?cData?.borders:null;

  const languages = cData.hasOwnProperty('languages')?Object.values(cData?.languages):null;
  console.log(languages)
  return (
    <div className={theme}>
      <div className={'detail-div'}>
        <Link to='/countries'>
          <button className='rise'>Back</button>
        </Link>

        <div className='upper-detail-div'>
            <div className='big-flag-div rise'>
              <img src={flagSource} alt="" />
            </div>
            <div className='main-detail-div'>
            <h1>{commonName}</h1>
              <div className='info-div'>
                <div className='info-left'>
                  <h3><b>Native Name :  </b>{nativeName}</h3>
                  <h3><b>Population :</b> {population} </h3>
                  <h3><b>Region :</b> {region}</h3>
                  <h3><b>Sub Region :</b> {subRegion}</h3>
                  <h3><b>Capital :</b> {capital}</h3>
                </div>
                <div>
                  <h3 onClick={(e)=>chooseCountry(e)}><b>Top Level Domain :</b> {topLevelDomain}</h3>
                  <h3><b>Currency :</b> {currency} </h3>
                  {/* <h3><b>Languages 3:</b> {language} </h3> */}
                  <div id='languages'><b>Languages :</b> {languages?.map(item=><h3 key={keyGen()} >{item}</h3>)} </div>

                </div>
              </div>
              <div className='Boarder-info-div'>
                  <h3 className='border'>Border Countries</h3>
                  <div className='boarder-nations'>
                     {cData.hasOwnProperty('borders')?borders.map((info)=><button key={keyGen()} className='shadow rise'><h3 onClick={(e)=>chooseCountry(e)}  >{findNation(info)}</h3></button>):null}
                  </div>

              </div>
            </div>
        </div>

      </div>
    </div>
  )

}

export default CountryDetail