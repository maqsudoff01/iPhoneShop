import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Phones from './pages/Phones'
import Ipads from './pages/Ipads'
import Imacs from './pages/Imacs'
import Contact from './pages/Contact'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/ipads' element={<Ipads />} />
          <Route path='/phones' element={<Phones />} />
          <Route path='/imacs' element={<Imacs/>} />
          <Route path='/contact' element={<Contact/>} />        
        </Routes>
    </div>
  )
}

export default App