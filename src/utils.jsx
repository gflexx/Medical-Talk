const baseUrl = "https://jsonplaceholder.typicode.com"

const searchName = (target, users) => {
    return users.name.lowwerCase().includes(target.lowwerCase())
}

const utils = [
    baseUrl,
    searchName
]

export default utils