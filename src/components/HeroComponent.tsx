import { ReactNode } from "react"
import { BasketComponent } from "./BasketComponent"

interface HeroComponentProps {
    children: ReactNode
}

export const HeroComponent = ({ children }: HeroComponentProps) => {
    return (
        <div className="text-center hero">
            <BasketComponent />
            {children}
        </div>
    )
}
