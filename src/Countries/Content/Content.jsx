import {useContext,useState,useEffect} from 'react'
import { MainContext } from '../../App'
import Country from './Country'
import  Axios  from 'axios'
import { useQuery } from '@tanstack/react-query'
import './content.css'


const Content = () => {
  const {filterValue,api,searchInput,setNationsData} = useContext(MainContext)

  const [content, setContent] = useState(0)

  let keyNum = 0;
  const {data,isError,isLoading} = useQuery(['countries'],async()=>{
    return Axios.get(api).then((res)=> res.data)
    
  })


  useEffect(() =>{
    setNationsData(data)
    const cont = document.getElementsByClassName("one-country").length
    setContent(cont)

  },[data,filterValue,searchInput])
 




  if(isLoading){
    return(<h1>Loading...</h1>)
  }
  if(isError){
    return(<h1>Error</h1>)
  }
  const keyGen =()=>{
    const alpha = ['a','b','c','d','e','f','g','h','i']
    keyNum += 1
    const key= alpha[Math.floor(Math.random()*7)]+`${keyNum}`

    return key
}


  const worldData = data.filter(info=>info.name.common.toLowerCase().includes(searchInput))


  const continentData = worldData.filter(data =>data.continents[0] === filterValue )


  return (
    <div  className='content-div'>
        {
          filterValue ==='All'?worldData?.map((data)=>(<Country key={keyGen()} myKey={keyGen()} data={data}/>
          )):continentData?.map((data)=>(<Country key={keyGen()} myKey={keyGen()}  data={data}/>
          ))
        }
        {
         content < 1 &&<h1>Sorry no results found 😥😥😥</h1>
        }
    </div>
  )
}

export default Content