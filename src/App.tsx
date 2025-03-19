import { Route, Routes } from "react-router"
import HomePage from "@/pages/Home"
import CheckoutPage from "./pages/Checkout"

function App() {
  return (
    <div className="bg-gray-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  )
}

export default App
