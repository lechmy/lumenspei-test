import { useState } from "react"
import { PRODUCT_TYPE } from "../../../enums/product"
import { ProductDetailsProps } from "../../../types/props/ProductDetailsProps"
import { ProductDto } from "../../../types/dto/Products"
import { useNavigate } from "react-router-dom"
import { emptyProduct } from "../../../constants/product"
import { useMutation } from "react-query"
import { deleteProduct } from "../../../services/Product"

const useProductDetails = (props: ProductDetailsProps) => {
  const { canEdit, product, onSubmit } = props
  const productType = Object.values(PRODUCT_TYPE)

  const navigate = useNavigate()
  const [curentProduct, setCurentProduct] = useState<ProductDto>(product || emptyProduct)

  const productMutation = useMutation({
    mutationFn: (id: string) => deleteProduct(id),
    onSuccess: () => {
      navigate('/product')
    }
  })

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

  const handleDelete = (product: ProductDto) => {
    productMutation.mutate(product.id || '')
  }

  return {
    canEdit,
    product: curentProduct,
    productType,
    handleChange,
    handleCancel,
    handleDelete,
    onSubmit,
  }
}
  
export default useProductDetails