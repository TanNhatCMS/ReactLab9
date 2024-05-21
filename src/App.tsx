import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './scss/bootstrap.scss'
import './fontawesome'
import './App.css'
import initProfiles from './database/profile'
import { Profiles } from './utils/types'
import User from './components/User'
import NotFound from './components/NotFound'
import ListProfiles from './components/ListProfiles'
import Search from './components/Search'
import Home from './components/Home'
import EmailSearch from './components/EmailSearch'

const App = () => {
  const [dataProfile, setDataProfile] = useState<Profiles[]>(() => initProfiles)
  useEffect(() => {
    setDataProfile([...initProfiles])
  }, [])

  return (
    <section className="vh-100%" style={{ backgroundColor: '#f4f5f7' }}>
      <div className="container py-5 h-100">
        <BrowserRouter>
          <Routes>
            <Route path="/index.html" element={<Home />} />
            <Route path="/user/:id" element={<User data={dataProfile} />} />
            <Route path="/tim-kiem" element={<Search data={dataProfile} />} />
            <Route
              path="/list-users"
              element={<ListProfiles data={dataProfile} />}
            />
            <Route
              path="/email/:email?"
              element={<EmailSearch data={dataProfile} />}
            />
            <Route path="/404.html" element={<NotFound />} />
            <Route path="/" element={<Navigate to="/index.html" />} />
            <Route path="*" element={<Navigate to="/404.html" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </section>
  )
}
export default App
