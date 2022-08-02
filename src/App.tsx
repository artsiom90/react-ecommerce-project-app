import { Container } from "react-bootstrap"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavbarComponent } from "./components/NavbarComponent"
import { AboutPage } from "./pages/AboutPage"
import { ContactPage } from "./pages/ContactPage"
import { HomePage } from "./pages/HomePage"

export const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Container fluid>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
