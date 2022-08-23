import { BrowserRouter, Route, Routes } from "react-router-dom"
import { FooterComponent } from "./components/FooterComponent/FooterComponent"
import { NavbarComponent } from "./components/NavbarComponent.css/NavbarComponent"
// import { HeroComponent } from "./components/HeroComponent"
import { AppContextProvider } from "./context/AppContextProvider"
import { AboutPage } from "./pages/AboutPage/AboutPage"
import { ContactPage } from "./pages/ContactPage/ContactPage"
import { HomePage } from "./pages/HomePage/HomePage"

export const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <NavbarComponent />
        {/* <HeroComponent /> */}
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='about'
            element={<AboutPage />}
          />
          <Route
            path='contact'
            element={<ContactPage />}
          />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </AppContextProvider>
  )
}
