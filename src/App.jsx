import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/Agrixlanding';
import Marketplace from './pages/Marketplace'
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
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
        <Route path="/login" element={<SignIn />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
