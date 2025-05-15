import { useState } from 'react'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import SustainableLiving from './pages/SustainableLiving'
import Contact from './pages/Contact'
import OurStory from './pages/OurStory'
import MenuPage from './components/MenuPage'
function App() {

  return (
    <>
      <BrowserRouter>
         <Routes>
           <Route index element={<Home />}/>
           <Route path='/SustainableLiving' element={<SustainableLiving />}/>
           <Route path='/OurStory' element={<OurStory />}/>
           <Route path='/Contact' element={<Contact />}/>
           <Route path='/menu' element={<MenuPage/>}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
