import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [captainData, setCaptainData] = useState({})


    const submitHandler = (e)=>{
        e.preventDefault()

        setCaptainData({
            fullName: {
                firstName:firstName,
                lastName:lastName
            },
            email:email,
            password:password
        })

        // console.log(captainData)
        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword('')
    }

  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between'>
    <div>
    <img className='w-20 mb-4' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
     <form onSubmit={(e)=>{
         submitHandler(e)
     }}>

     <h3 className='text-lg font-medium mb-2 w-full'>What's our captain's name</h3>
     <div className='flex gap-4 mb-6'>
     <input 
         required
         value={firstName}
         onChange={(e)=>{
            setFirstName(e.target.value)
         }}
         className='bg-[#eeee] w-1/2 rounded px-2 py-2 border text-base placeholder:text-base'
          type="text"
          placeholder='First name'
          />
          <input 
         required
         value={lastName}
         onChange={(e)=>{
            setLastName(e.target.value)
         }}
         className='bg-[#eeee]  w-1/2 rounded px-2 py-2 border text-lg placeholder:text-base'
          type="text"
          placeholder='Last name'
          />
     </div>

     <h3 className='text-lg font-medium mb-2'>What's our captain's email</h3>
     <input 
         required
         value={email}
         onChange={(e)=>{
            setEmail(e.target.value)
         }}
         className='bg-[#eeee] mb-6 rounded px-2 py-2 border w-full text-lg placeholder:text-base'

          type="email"
          placeholder='email@example.com'
          />

     <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

     <input
     required
     value={password}
     onChange={(e)=>{
        setPassword(e.target.value)
     }}
     className='bg-[#eeee] mb-6 rounded px-2 py-2 border w-full text-base 
     placeholder:text-base'

      type="password"
       placeholder='password'
        />
     <button className='bg-[#111] text-white font-semibold mb-3 rounded px-2 py-2 w-full text-lg'>Login</button>
     </form>

     <p className='text-center'>Already have a Account? <Link to={'/captain-login'} className='text-blue-600'>Log in here</Link> </p>
    </div>
    <div>
     <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the  <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms Of Service apply</span>.</p>
    </div>
 </div>
  )
}

export default CaptainSignup