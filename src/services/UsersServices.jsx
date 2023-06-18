import apiClient from './AxiosHttp'

const getUsers = () => {
    return apiClient.get('/users')
}

const usersServices = {
    getUsers,
}

export default usersServices