import { useMutation } from "react-query"
import { newProduct } from "../../../services/Product"

const useProductNew = () => {
  const newProductMutation = useMutation({
    mutationFn: (formData: any) => {
      return newProduct(formData)
    },
  })

  const onSubmit = (event: any) => {
    event.preventDefault()
    newProductMutation.mutate(new FormData(event.target))
  }

  return {
    onSubmit
  }
}

export default useProductNew