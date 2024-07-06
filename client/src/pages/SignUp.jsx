import React from 'react'
import { Link } from 'react-router-dom'
export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-5xl text-center font-semibold my-7 text-red-800'>
         Sign Up</h1>
         <form className='flex flex-col gap-4' >
          <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username'/>
          <input type="text" placeholder='email' className='border p-3 rounded-lg bg-' id='email'/>
          <input type="text" placeholder='password' className='border p-3 rounded-lg' id='password'/>
          <button className='bg-sky-800 text-black p-3 rounded-lg uppercase hover:opacity-50 disabled:opacity-80
             transition ease-in-out delay-150 bg-rose-500 hover:-translate-y-1 hover:scale-110 hover:bg-rose-300 duration-300 '>
                     Sign Up
          </button>
         </form>
         <div className='flex gap-2 mt-5'> 
          <p><b>Have an account? </b></p>
          <Link to= {'/sign-in'}>
          <span className='text-red-600  hover:underline '> <b> Sign in</b></span>
          </Link>
         </div>
    </div>
  )
}
