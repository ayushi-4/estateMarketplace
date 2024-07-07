import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home'; // Import Home component
import About from './pages/About'; // Import About component
import Profile from './pages/Profile'; // Import Profile component
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';

export default function App() {
  return (
    <BrowserRouter>
    <Header/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route element ={<PrivateRoute/>}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-listing" element={<CreateListing />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}
