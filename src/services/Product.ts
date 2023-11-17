import { AxiosPromise } from 'axios'
import Axios from '../api'
import { GetProductsDto, ProductDto } from '../types/dto/Products'

export const getFilteredProducts = (data: GetProductsDto): Promise<ProductDto[]> => {
  return Axios.post<ProductDto[]>('/v1/products/client_filtered', data).then((response) => response.data)
}

export const newProduct = (data: ProductDto): AxiosPromise => {
  return Axios.post<ProductDto>('/v1/products', data)
}

export const editProduct = (data: ProductDto): AxiosPromise => {
  return Axios.put<ProductDto>('/v1/products', data)
}
