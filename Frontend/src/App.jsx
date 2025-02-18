
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

import OrganisationDashboard from './components/Dashboard/OrganisationDashboard'
import ClientDashboard from './components/Dashboard/ClientDashboard'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Login from './components/Login'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/organisation/dashboard" element={<OrganisationDashboard />} />
        <Route path="/client/dashboard" element={<ClientDashboard />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
