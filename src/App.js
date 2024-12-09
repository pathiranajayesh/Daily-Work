import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import About from './About';



function App() {
  return (
    <div>

      <h1>Static Content</h1>

      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<Home/>}>
            </Route>

            <Route path='/profile' element={<Profile/>}>
            </Route>

            <Route path='/about' element={<About/>}>
            </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App