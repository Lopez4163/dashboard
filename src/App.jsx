import { useState } from 'react'
import Navbar from './components/Navbar'
import ProfileInfo from './components/ProfileInfo'
import DashboardView from './components/DashboardView'
import './Styling/App.css'


function App() {

  return (
    <div className='dashboard-container'>
      <section className='navbar'>
        <Navbar />
      </section>
      <section className='profile-info'>
        <ProfileInfo/>
      </section>
      <section className='dashboard-view'>
        <DashboardView />
      </section>
    </div>
  )
}

export default App
