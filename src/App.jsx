import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import SustainableLiving from './pages/SustainableLiving'
import Contact from './pages/Contact'
import OurStory from './pages/Ourstory'

function App() {

  return (
    <>
      <BrowserRouter>
         <Routes>
           <Route index element={<Home />}/>
           <Route path='/SustainableLiving' element={<SustainableLiving />}/>
           <Route path='/OurStory' element={<OurStory />}/>
           <Route path='/Contact' element={<Contact />}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
