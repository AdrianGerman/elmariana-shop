import "./App.css"
import FooterComponent from "./components/Footer/FooterComponent"
import NavComponent from "./components/Nav/NavComponent"
import HomeComponent from "./components/Home/HomeComponent"
import HeaderComponent from "./components/Header/HeaderComponent"
import StoreComponent from "./components/Store/StoreComponent"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

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
