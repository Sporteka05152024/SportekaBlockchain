import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/SportekaLanding';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import ClubRegistration from './pages/ClubRegistration';
import Invest from './pages/InvestClub'
import MancityDashboard from './pages/Mdashbord';
import Clubs from './pages/Clubs';
import UserDashboard from './pages/Userdashboard';
import TradePlayers from './pages/Trade';
import SportekaUser from './pages/SportekaUser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
AOS.init();
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route index element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/trade" element={<TradePlayers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clubreg" element={<ClubRegistration />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/mdashboard" element={<MancityDashboard />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/sportekauser" element={<SportekaUser />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
