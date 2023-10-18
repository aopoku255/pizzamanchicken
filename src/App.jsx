import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Team from './Pages/Team'
import Member from './Pages/Member'
import Home from './Pages/Home'
import Branches from './Components/Branches/Branches'
import Contact from './Pages/Contact/Contact'
import BranchMap from './Components/BranchMap/BranchMap'
import MenuPage from './Pages/MenuPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about-us' element={<About/>}/>
          <Route exact path='/our-team' element={<Team/>}/>
          <Route exact path = '/team-member/:slug' element = {<Member />} />
          <Route exact path='/our-branches' element={<Branches/>}/>
          <Route exact path='/map' element={<BranchMap/>}/>
          <Route exact path='/contact-us' element={<Contact /> } />
          <Route exact path='/menu' element={<MenuPage /> } />
        </Routes>
      </Router>

    </>
  )
}

export default App
