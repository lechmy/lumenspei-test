import { AxiosPromise } from 'axios'
import Axios from '../api'
import { GetUsersDto } from '../types/dto/User'
import { UserDto } from '../types/dto/User'

export const getAllClients = (): Promise<any[]> => {
  return Axios.get<any[]>('/v1/users').then((response) => response.data)
}

export const getFilteredClients = (data: GetUsersDto): Promise<UserDto[]> => {
  return Axios.post<UserDto[]>('/v1/users/all_filtered', data).then((response) => response.data)
}

export const newClient = (data: UserDto): AxiosPromise => {
  return Axios.post<UserDto>('/v1/users', data)
}

export const editClient = (data: UserDto): AxiosPromise => {
  return Axios.put<UserDto>('/v1/users', data)
}
