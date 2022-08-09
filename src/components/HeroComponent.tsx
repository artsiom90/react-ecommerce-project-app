import { ReactNode } from "react"
import { Container } from "react-bootstrap"
import { BasketComponent } from "./BasketComponent"

interface HeroComponentProps {
    children: ReactNode
}

export const HeroComponent = ({ children }: HeroComponentProps) => {
    return (
        <Container
            fluid
            className="text-center hero"
        >
            <BasketComponent />
            {children}
        </Container>
    )
}
