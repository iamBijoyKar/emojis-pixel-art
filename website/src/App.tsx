import './output.css';//! Tailwindcss output css file - Don't chane the file explicitly!!
import Header from './components/Header';// *Header element 
import Content from './components/Emojis';//* `./emojis` emojis page component 
import Footer from './components/Footer';
import Welcome from './components/Welcome';//*Home page component
import Pixilart from './components/Pixilart';//*`pixilart/emojis` emojis page component
import { BrowserRouter, Route , Routes } from "react-router-dom";



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
