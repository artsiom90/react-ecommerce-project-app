import axios from "axios"

export class API {
    static async fetchData(category: number, sortBy: string, searchValue: string) {
        try {
            const { data } = await axios
                .get(`http://localhost:3001/meals?&category=${category}&q=${searchValue}&_sort=${sortBy}&_order=asc`)
            return data
        } catch (error) {
            console.error(error)
        }
    }
}
