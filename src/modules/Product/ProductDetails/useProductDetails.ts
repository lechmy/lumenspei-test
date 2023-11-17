import { useState } from "react"
import { PRODUCT_TYPE } from "../../../enums/product"
import { ProductDetailsProps } from "../../../types/props/ProductDetailsProps"
import { ProductDto } from "../../../types/dto/Products"
import { useNavigate } from "react-router-dom"
import { emptyProduct } from "../../../constants/product"

const useProductDetails = (props: ProductDetailsProps) => {
  const { product, onSubmit } = props
  const productType = Object.values(PRODUCT_TYPE)

  const navigate = useNavigate()

  const [curentProduct, setCurentProduct] = useState<ProductDto>(product || emptyProduct)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedValue = {[e.target.name]:e.target.value};

    setCurentProduct(curentProduct => ({
      ...curentProduct,
      ...updatedValue
    }));
  }

  const handleCancel = () => {
    navigate('/product')
  }

  return {
    product: curentProduct,
    productType,
    handleChange,
    handleCancel,
    onSubmit,
  }
}
  
export default useProductDetails