import ProductDetails from "../ProductDetails/ProductDetails"
import useProductEdit from "./useProductEdit"

const ProductEdit: React.FC = () => {
  const { product, onSubmit } = useProductEdit()

  return(
    <ProductDetails product={product} onSubmit={onSubmit} />
  )
}

export default ProductEdit