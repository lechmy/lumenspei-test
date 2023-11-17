import { PRODUCT_TYPE } from '../enums/product'
import { ProductDto } from '../types/dto/Products'

export const defaultProduct: ProductDto = {
  id: '2',
  name: 'Nice Product',
  sku: '16903457',
  description: 'Very nice Product',
  price: 99,
  unit: 'piece',
  type: PRODUCT_TYPE.SERVICE,
  quantity: 2,
  locations: 'Nice location',
  tax: 10
}

export const emptyProduct: ProductDto = {
  id: '',
  name: '',
  sku: '',
  description: '',
  price: 0,
  unit: '',
  type: PRODUCT_TYPE.PACKAGE,
  quantity: 0,
  locations: '',
  tax: 0
}
