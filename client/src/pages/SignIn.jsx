import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess,signInFailure } from '../redux/user/userSlice.js';
 import OAuth  from '../components/OAuth.jsx';
export default function SignIn() {
  const [formData, setFormData] = useState({});
  const {loading , error } = useSelector((state) => state.user);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = null;
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      data = await res.json();
      console.log(data);
      if (data.success == false) {
        dispatch(signInFailure(data.message))
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(Data.message));
    }
    
    console.log(data);
  };

  console.log(formData);

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-5xl text-center font-semibold my-7 text-blue-900'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type="text"
          placeholder='Email'
          className='border p-3 rounded-lg bg-'
          id='email'
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder='Password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className='bg-rose-400 text-black p-3 rounded-lg uppercase hover:opacity-50 disabled:opacity-80 transition ease-in-out delay-150 bg-rose-500 hover:-translate-y-1 hover:scale-110 hover:bg-sky-300 duration-300'
        >
          {loading ? 'Loading...' : 'Sign In' }
        </button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p><b> Dont have an account?</b></p>
        <Link to={'/sign-up'}>
          <span className='text-blue-900 hover:underline'><b>Sign up</b></span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}
