import { useMutation, useQuery } from 'react-query'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { editProduct } from '../../../services/Product'
import { ProductDto } from '../../../types/dto/Products'
import { defaultProduct } from '../../../constants/product'

const useProductEdit = () => {
  const { id } = useParams ()
  const [product, setProduct] = useState<ProductDto>(defaultProduct)

  // const query = useQuery(['editClient'], () => getClient(id).then(data => setClient(data)))

  const newProductMutation = useMutation({
    mutationFn: (formData: any) => {
      return editProduct(formData)
    },
  })

  const onSubmit = (event: any) => {
    event.preventDefault()
    newProductMutation.mutate(new FormData(event.target))
  }

  return {
    product,
    onSubmit
  }
}

export default useProductEdit