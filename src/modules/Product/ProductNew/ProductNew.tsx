import ProductDetails from "../ProductDetails/ProductDetails"
import useProductNew from "./useProductNew"

const ProductNew: React.FC = () => {
  const { onSubmit } = useProductNew()

  return(
    <ProductDetails onSubmit={onSubmit} />
  )
}

export default ProductNew