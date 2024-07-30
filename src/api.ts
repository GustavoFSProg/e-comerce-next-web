import axios from 'axios'

const api = axios.create({
    baseURL: "https://e-comerce-next-api.vercel.app/"
})

export default api