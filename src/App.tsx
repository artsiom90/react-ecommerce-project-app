import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavbarComponent } from "./components/NavbarComponent"
import { MainContextProvider } from "./context/MainContextProvider"
import { AboutPage } from "./pages/AboutPage"
import { ContactPage } from "./pages/ContactPage"
import { HomePage } from "./pages/HomePage"

export const App = () => {
  return (
    <MainContextProvider>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </MainContextProvider>
  )
}
