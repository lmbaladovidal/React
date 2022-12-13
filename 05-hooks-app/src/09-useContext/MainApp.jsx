import React from 'react'
import {Navigate, Route, Routes } from 'react-router-dom'
import {HomePage} from './HomePage';
import {AboutPage} from './AboutPage';
import {LoginPage} from './LoginPage';
import { NavBar } from './NavBar';

export const MainApp = () => {
  return (
    <>
  
        <h1>MainApp</h1>
        <NavBar/>
        <hr />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/About' element={<AboutPage/>}/>
          <Route path='/Login' element={<LoginPage/>}/>
          {/* <Route path='/*' element={<LoginPage/>}/> */}
          <Route path='/*' element={<Navigate to={'/About'}/>}/>
        </Routes>
    </>
  )
}
