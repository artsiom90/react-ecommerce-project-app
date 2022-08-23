export class API {
    static async fetchData(category: number, sortBy: string, searchVale: string) {
        try {
            const response = await fetch(`http://localhost:3001/meals?&category=${category}&q=${searchVale}&_sort=${sortBy}&_order=asc`)
            const data = await response.json()
            return data
        } catch (error) {
            console.error(error)
        }
    }
}
