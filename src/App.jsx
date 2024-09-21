import "./App.css"
import FooterComponent from "./components/FooterComponent"
import NavComponent from "./components/NavComponent"
import HomeComponent from "./components/HomeComponent"
import HeaderComponent from "./components/HeaderComponent"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import StoreComponent from "./components/StoreComponent"

function App() {
  return (
    <Router>
      <>
        <NavComponent />
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/store" element={<StoreComponent />} />
        </Routes>
        <FooterComponent />
      </>
    </Router>
  )
}

export default App
