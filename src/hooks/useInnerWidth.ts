import { useEffect, useState } from "react"

export const useInnerWidth = (): number => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    useEffect(() => {
        const defineInnerWidth = () => setInnerWidth(window.innerWidth)
        window.addEventListener('resize', defineInnerWidth)
        return () => window.removeEventListener('resize', defineInnerWidth)
    }, [])
    return innerWidth
}
