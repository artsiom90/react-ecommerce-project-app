import { ReactNode } from "react"
import { Container } from "react-bootstrap"
import { CartComponent } from "./CartComponent"

interface HeroComponentProps {
    children: ReactNode
}

export const HeroComponent = ({ children }: HeroComponentProps) => {
    return (
        <Container
            fluid
            className="text-center hero"
        >
            <CartComponent />
            {children}
        </Container>
    )
}
