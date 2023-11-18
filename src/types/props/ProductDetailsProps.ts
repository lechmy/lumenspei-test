import { ProductDto } from "../dto/Products"

export interface ProductDetailsProps {
  canEdit?: boolean
  product?: ProductDto
  onSubmit?: (ev: any) => void
};