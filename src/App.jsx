// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import HealthCard from './components/HealthCard/HealthCard'
import ChatInterface from './components/Chat/ChatInterface'
import Timeline from './components/Timeline/Timeline'
import HealthSchemes from './components/HealthSchemes/HealthSchemes'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/health-card" element={<HealthCard />} />
          <Route path="/chat" element={<ChatInterface />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/schemes" element={<HealthSchemes />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;