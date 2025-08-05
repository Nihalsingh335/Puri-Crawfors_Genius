import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './components/Dashboard'
import ClaimTable from './components/ClaimTable'
import ClaimDetailsPage from './components/ClaimDetailsPage'
import { Routes, Route, useNavigate } from 'react-router-dom'
import AssignSurveyorPage from './components/AssignSurveyorPage'

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100" style={{ minWidth: '1439px', overflow: 'auto' }}>
      <Sidebar isExpanded={isSidebarExpanded} setIsExpanded={setIsSidebarExpanded} />
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarExpanded ? 'ml-[240px]' : 'ml-[66px]'}`} style={{ minWidth: '1260px', flexShrink: 0 }}>
        <Topbar />
        <main className="flex-1 overflow-auto scrollbar-hide p-2" style={{ marginTop: '80px', minWidth: '1260px', flexShrink: 0 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/claims" element={<ClaimTable />} />
            <Route path="/claim/:id" element={<ClaimDetailsPage />} />
            <Route path="/claim/:id/stage/:stage" element={<ClaimDetailsPage />} />
            <Route path="/claim/:id/stage/:stage/tab/:tab" element={<ClaimDetailsPage />} />
            <Route path="/claim/:id/timeline" element={<ClaimDetailsPage />} />
            <Route path="/assign-surveyor" element={<AssignSurveyorPage />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
