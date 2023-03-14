import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  AddUser,
  BillingHistory,
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
  AdminDashboard,
  Admin,
  AllUsers
} from './pages'
import { Toaster } from "react-hot-toast"
import AdminNav from './components/AdminNav'

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  const AdminLayout = ({ children }) => {
    return (
      <div className="overflow-x-hidden text-gray-800">
        <main className="w-full bg-white min-h-[calc(100vh-73px)]">
          <AdminNav />
          {children}
        </main>
      </div>
    );
  }

  const DefaultLayout = ({ children }) => {
    return (
      <div className="overflow-x-hidden text-gray-800">
        <Navbar />
        <main className="w-full bg-white min-h-[calc(100vh-73px)]">
          {children}
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden text-gray-800">
      <BrowserRouter>
        <Toaster />
        <main className="w-full bg-white min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
            <Route path="services" element={<DefaultLayout><Services /></DefaultLayout>}>
              <Route index element={<ServicesVirtualDoctor />} />
              <Route path="mental-health" element={<ServicesMentalHealth />} />
              <Route path="diagnostics" element={<ServicesDiagnostics />} />
              <Route path="nursing-homecare" element={<ServicesNursingAndHomecare />} />
              <Route path="online-pharmacy" element={<ServicesOnlinePharmacy />} />
            </Route>
            <Route path="/for-you" element={<DefaultLayout><ForYou /></DefaultLayout>} />
            <Route path="/about" element={<DefaultLayout><About /></DefaultLayout>} />
            <Route path="/contact" element={<DefaultLayout><Contact /></DefaultLayout>} />
            <Route path="/dashboard" element={<DefaultLayout><Dashboard /></DefaultLayout>}>
              <Route index element={<DashboardHome />} />
              <Route path="book-appointment" element={<BookAppointment />} />
              <Route path="update-user" element={<UpdateUserInfo />} />
              <Route path="update-billing" element={<UpdateBillingInfo />} />
            </Route>
            <Route path="/rates" element={<DefaultLayout><Pricing /></DefaultLayout>} />
            <Route path="/for-corporate" element={<DefaultLayout><CorporateOverview /></DefaultLayout>} />
            <Route path="/for-family" element={<DefaultLayout><ForYou /></DefaultLayout>} />
            <Route path="/register" element={<DefaultLayout><Signup /></DefaultLayout>} />
            <Route path="/login" element={<DefaultLayout><Login /></DefaultLayout>} />
            <Route path="/admin" element={<AdminLayout><Admin /></AdminLayout>}>
              <Route index element={<AdminDashboard />} />
              <Route path="all_users" element={<AllUsers />} />
              <Route path="add_user" element={<AddUser />} />
              <Route path="billing_history" element={<BillingHistory />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
