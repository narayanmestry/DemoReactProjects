import { useState } from 'react'
import './App.css'
import MainLayout from './layout/MainLayout'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Setting from './pages/Setting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
      <Routes>
        <Route to="/" element={<Dashboard/>}/>
        <Route to="/profile" element={<Profile/>}/>
        <Route to="/settings" element={<Setting/>}/>
      </Routes>
    </MainLayout>
  )
}

export default App
