import { createContext, ReactNode, useState } from "react"

interface MainContextProviderProps {
    children: ReactNode
}

interface DataType {
    id: number
    title: string
    img: string
    price: number
    description: string
    category: number
    rating: number
}

interface MainContextProviderType {
    category: number
    filteredMenuData: DataType[]
    fetchMenuData: () => void
    filterMenuData: () => void
    setCategory: (index: number) => void
}

export const MainContext = createContext({} as MainContextProviderType)

export const MainContextProvider = ({ children }: MainContextProviderProps) => {
    const [menuData, setMenuData] = useState<DataType[]>([])
    const [filteredMenuData, setFiltedMenuData] = useState<DataType[]>([])
    const [category, setCategory] = useState<number>(0)

    const fetchMenuData = () => {
        try {
            fetch('http://localhost:3001/meals')
                .then(response => response.json()
                    .then(menuData => setMenuData(menuData)))
        } catch (error) {
            console.error(error)
        }
    }

    const filterMenuData = () => {
        const newData = menuData.filter(item => category === item.category)
        setFiltedMenuData(newData)
    }

    return (
        <MainContext.Provider value={{
            filteredMenuData,
            category,
            fetchMenuData,
            filterMenuData,
            setCategory,
        }}>
            {children}
        </MainContext.Provider>
    )
}
