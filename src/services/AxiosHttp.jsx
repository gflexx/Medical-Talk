import axios from "axios"
import utils from "../utils"

const instance = axios.create({
    baseURL: utils.baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
})

export default instance