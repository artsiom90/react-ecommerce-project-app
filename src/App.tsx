import { Container } from "react-bootstrap"
import { NavbarComponent } from "./components/NavbarComponent"
import { AboutPage } from "./pages/AboutPage"
import { ContactPage } from "./pages/ContactPage"
import { HomePage } from "./pages/HomePage"

export const App = () => {
  return (
    <>
      <NavbarComponent />
      <Container fluid>
        <HomePage />
        <AboutPage />
        <ContactPage />
      </Container>
    </>
  )
}
