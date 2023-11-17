import { PRODUCT_TYPE } from "../../enums/product";

export interface ProductDto {
  id?: string,
  name: string,
  sku: string,
  description?: string,
  price?: number,
  unit?: string,
  type?: PRODUCT_TYPE,
  quantity?: number,
  locations?: string,
  tax?: number
}

export interface GetProductsDto {
  clientId?: string,
  name?: string,
  sortItem?: string,
  sortOrder?: number,
  pageSize?: number,
  pageNumber?: number
}