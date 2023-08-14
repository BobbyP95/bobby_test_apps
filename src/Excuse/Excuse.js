import React,{useState,useEffect} from 'react'
import Axios from 'axios';

import './excuse.css'
import {useQuery} from '@tanstack/react-query'



export const Excuse = () => {
const [ type, setType ] = useState('gaming')
// const [excuse,setExcuse] = useState(null)
// useEffect(() =>{
//     Axios.get(`https://excuser-three.vercel.app/v1/excuse/${type}/`).then((res)=>{
//         setExcuse(res.data[0])
//         console.log(res.data[0])
//     })
// },[type,])

const {data,isError,isLoading,refetch} = useQuery(['01excuse'],()=>{
    return Axios.get(`https://excuser-three.vercel.app/v1/excuse/${type}/`).then((res)=>res.data[0])
})

useEffect(()=>{
    refetch()
},[type,refetch])

if (isLoading){
    return(  <div className="excuse-div error-div">
        <h1 className='error'>Loading...</h1>
    </div>)
}
if (isError){
    return(  <div className=" excuse-div error-div">
        <h1 className='error' >Sorry, there was an error</h1>
    </div>)
}

  return (
    <div className="excuse-div">
    <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className=''>
        <div >
            <button  onClick={()=>setType('gaming')}>Gaming</button>
            <button onClick={()=>setType('developers')}>Developers</button>
            <button onClick={()=>setType('office')}>Office</button>
            <button onClick={()=>setType('funny')}>Funny </button>
        </div>
        
        <div>
            <h1>Category: {data?.category}</h1>
            <h3>{data?.excuse}</h3>
        </div>
    </div>
  
    </header>

  </div>
  )
}
