import React from 'react'
import {GoogleAuthProvider , getAuth,signInWithPopup } from 'firebase/auth';
import {app} from '../firebase.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInSuccess } from '../redux/user/userSlice';
export default function OAuth() {
    const dispatch = useDispatch();
     const navigate = useNavigate();

    const handleGoogleClick = async()=>{
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);
// console.log('user signed in with google');
const res = await fetch('/api/auth/google', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: result.user.displayName,
      email: result.user.email,
      photo: result.user.photoURL,
    }),
  });
  const data = await res.json();
  dispatch(signInSuccess(data));
  navigate('/');

        } catch (error) {
            console.log("could not sign in with google");
        }
    }

  return (
    <button onClick={handleGoogleClick} type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 *
    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-600 duration-300'>Continue to Google</button>
  )
}
