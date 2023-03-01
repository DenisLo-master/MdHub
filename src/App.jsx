import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Home, 
  Services, 
  ServicesMentalHealth, 
  ServicesVirtualDoctor, 
  ServicesDiagnostics,
  ServicesNursingAndHomecare,
  ServicesOnlinePharmacy,
  ForYou,
  About,
  Contact,
  Dashboard,
  Pricing,
  CorporateOverview,
  ForBabies,
  Signup,
  Login,
  DashboardHome,
  BookAppointment,
  UpdateUserInfo,
  UpdateBillingInfo,
} from './pages'
import { Toaster } from "react-hot-toast"

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="overflow-x-hidden text-gray-800">
      <BrowserRouter>
      <Navbar/>
        <Toaster />
        <main className="sm:p-0 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="services" element={<Services />}>
              <Route index element={<ServicesVirtualDoctor />} />
              <Route path="mental-health" element={<ServicesMentalHealth />} />
              <Route path="diagnostics" element={<ServicesDiagnostics />} />
              <Route path="nursing-homecare" element={<ServicesNursingAndHomecare />} />
              <Route path="online-pharmacy" element={<ServicesOnlinePharmacy />} />
            </Route>
            <Route path="/for-you" element={<ForYou />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<DashboardHome />} />
              <Route path="book-appointment" element={<BookAppointment />} />
              <Route path="update-user" element={<UpdateUserInfo />} />
              <Route path="update-billing" element={<UpdateBillingInfo />} />
            </Route>
            <Route path="/rates" element={<Pricing />} />
            <Route path="/for-corporate" element={<CorporateOverview />} />
            <Route path="/for-family" element={<ForBabies />} />
            <Route path="/register" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </main>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
