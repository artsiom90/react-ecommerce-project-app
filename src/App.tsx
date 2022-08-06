import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HeroComponent } from "./components/HeroComponent"
import { NavbarComponent } from "./components/NavbarComponent"
import { MainContextProvider } from "./context/MainContextProvider"
import { AboutPage } from "./pages/AboutPage"
import { ContactPage } from "./pages/ContactPage"
import { HomePage } from "./pages/HomePage"

export const App = () => {
  return (
    <MainContextProvider>
      <BrowserRouter>
        <HeroComponent>
          <NavbarComponent />
        </HeroComponent>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </MainContextProvider>
  )
}
