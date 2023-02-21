import { useState } from 'react'
import './output.css';
import Header from './components/Header';
import Content from './components/Emojis';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Pixilart from './components/Pixilart';
import { BrowserRouter, Route, Link , Routes } from "react-router-dom";



function App() {
  
  return (
    <div className="App min-h-screen">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/emoji' element={<Content/>}/>
          <Route path='/pixilart' element={<Pixilart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
