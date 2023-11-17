import { useMutation } from "react-query"
import { newInvoice } from "../../../services/Invoice"

const useInvoicesNew = () => {
  const newInvoiceMutation = useMutation({
    mutationFn: (formData: any) => {
      return newInvoice(formData)
    },
  })

  const onSubmit = (event: any) => {
    event.preventDefault()
    newInvoiceMutation.mutate(new FormData(event.target))
  }

  return {
    onSubmit
  }
}

export default useInvoicesNew