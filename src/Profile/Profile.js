import React,{useState,useContext,useEffect} from 'react'
import { MainContext } from '../App'
import { update } from '../App'
import './profile.css'
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const Profile = () => {
    const [name, setName] = useState('')

    const {setUser,user} = useContext(MainContext)

useEffect(() => {
    
    update(name,user)

},[user])
    
    // ...........REACT FORM HOOKS.................................
    // react-hook-form  || yup || @hookForm/resolvers
    
    const schema = yup.object().shape({
      fullName: yup.string('name must be a string').required("Please enter a name"),
      email: yup.string().email().required(),
      age: yup.number().positive().integer().min(11).required(),
      password: yup.string().min(6).max(20).required(),
      confirmPassword: yup.string().oneOf([yup.ref('password'),null],).required(),
    });

    const {register, handleSubmit, formState:{errors} } = useForm({
      resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
      console.log(data)
      setUser(update(data,user))
    };

    return (
    <div className='profile'>
       
        <div className="input-div">

          {/* <label>Name </label>
          <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder='Full-name'/> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder='Full Name'{...register('fullName')}/>
            <input type='text' placeholder='Email'{...register('email')}/>
            <input type='text' placeholder='Age'{...register('age')}/>
            <input type='password' placeholder='Password'{...register('password')}/>
            <input type='password' placeholder='Confirm Password'{...register('confirmPassword')}/>
            <input type='submit'/>
          </form>
        </div>
        <div className='error-div'>
          <h6>{errors.fullName?.message}</h6>
          <h6>{errors.email?.message}</h6>
          <h6>{errors.age?.message}</h6>
          <h6>{errors.password?.message}</h6>
          <h6>{errors.confirmPassword?.message}</h6>

        </div>
        {/* <button onClick={()=>{name.length >0 && setUser(update(name,user)); setName('')}} >Set-User</button> */}

        
    </div>
  )
}
