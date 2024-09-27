import "./App.css"
import FooterComponent from "./components/Footer/FooterComponent"
import NavComponent from "./components/Nav/NavComponent"
import HomeComponent from "./components/Home/HomeComponent"
import HeaderComponent from "./components/Header/HeaderComponent"
import StoreComponent from "./components/Store/StoreComponent"

// pages
import Faqs from "./components/pages/Faqs"
import Terms from "./components/pages/Terms"
import Contact from "./components/pages/Contact"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom"
import ProductInfo from "./components/ProductInfo/ProductInfo"

function LayoutWrapper({ children }) {
  const location = useLocation() // Obtener la ruta actual

  // Definir las rutas donde NO quieres mostrar el HeaderComponent
  const hideHeaderRoutes = ["/pages/faqs", "/pages/terms", "/pages/contact"]

  return (
    <>
      <NavComponent />
      {/* Condicionar el renderizado del HeaderComponent */}
      {!hideHeaderRoutes.includes(location.pathname) && <HeaderComponent />}
      {children}
      <FooterComponent />
    </>
  )
}

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/store" element={<StoreComponent />} />
          {/* pages */}
          <Route path="/pages/faqs" element={<Faqs />} />
          <Route path="/pages/terms" element={<Terms />} />
          <Route path="/pages/contact" element={<Contact />} />

          {/* Detail product */}
          <Route path="/products/:id" element={<ProductInfo />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  )
}

export default App
