import Home from "./components/Home"
import Login from "./components/Login"
import { Route, Routes } from "react-router-dom"
import Signup from "./components/Signup"
import Otp from "./components/Otp"
import Success from "./components/Success"
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="bg-[#171717]">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/otp/:id" element={<Otp />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home/:id" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
