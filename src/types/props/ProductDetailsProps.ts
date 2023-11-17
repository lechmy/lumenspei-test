import { ProductDto } from "../dto/Products"

export interface ProductDetailsProps {
  product?: ProductDto
  onSubmit?: (ev: any) => void
};