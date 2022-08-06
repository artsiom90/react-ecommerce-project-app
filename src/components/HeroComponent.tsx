import { ReactNode } from "react"

interface HeroComponentProps {
    children: ReactNode
}

export const HeroComponent = ({ children }: HeroComponentProps) => {
    return (
        <div className="text-center hero">
            {children}
        </div>
    )
}
