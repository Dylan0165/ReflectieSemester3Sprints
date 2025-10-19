import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Sprint1Page from './pages/Sprint1Page'
import Sprint2Page from './pages/Sprint2Page'
import AssignmentPage from './pages/AssignmentPage'
import './App.css'

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sprint1" element={<Sprint1Page />} />
        <Route path="/sprint2" element={<Sprint2Page />} />
        <Route path="/assignment" element={<AssignmentPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
