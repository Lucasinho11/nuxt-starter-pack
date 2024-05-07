import { request } from '../services/fetchServices'

export const getUsers = async () => {
  const route = '/users'
  return request({ service: 'api', method: 'GET', route })
}

export default {
  getUsers
}
