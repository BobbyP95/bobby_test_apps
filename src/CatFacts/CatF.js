import React from 'react'
import Axios from 'axios';
import {useQuery} from '@tanstack/react-query'
export const CatF = () => {
    // const [cat,setCat] = useState('')
    // const pushFact =() =>{
    //     Axios.get('https://catfact.ninja/fact').then((res)=>{
    //         setCat(res.data.fact)
    //     })
    // }

    // useEffect(()=>{
    //     pushFact()
        
    // },[])
    const { data,isLoading,isError, refetch } = useQuery(['01cats'],()=>{
          return  Axios.get('https://catfact.ninja/fact').then((res)=>res.data);
    })
   
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
    <div className='cat-div'>
        <h1>Cat Facts</h1>
        <button onClick={()=>refetch()} >Generate facts</button>
        <p>{data?.fact}</p>
    </div>
  )
}
