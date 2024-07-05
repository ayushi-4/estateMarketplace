import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className='bg-red-200 shadow-lg'> 
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1  className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-rose-700'><b> Dwellings </b> </span>
            <span className='text-sky-700'>  estate</span>
        </h1>
        <form className='bg-sky-100 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder='search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
            <FaSearch className='text-slate-600'/>
        </form>
        <ul className='flex gap-4'> 
            <Link to='/'> 
            <li className='hidden sm:inline text-sky-800 hover:underline'><b>Home </b></li>
            </Link>
            <Link to='/about'> 
            <li className='hidden sm:inline text-sky-800 hover:underline'><b> About</b></li>
            </Link>
            <Link to='/sign-in'>
            <li className=' text-sky-800 hover:underline'><b> Sign in</b></li>
            </Link>
        </ul>
        </div>
    </header>
  )
}
