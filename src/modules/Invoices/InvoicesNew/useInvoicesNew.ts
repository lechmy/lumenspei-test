import { useNavigate } from "react-router-dom"
import { useMutation } from "react-query"
import { newInvoice } from "../../../services/Invoice"
import { parseFormData } from "../../../utility/form"
import { invoiceItemID } from "../../../constants/invoice"

const useInvoicesNew = () => {
  const navigate = useNavigate()
  
  const newInvoiceMutation = useMutation({
    mutationFn: (formData: any) => newInvoice(formData),
    onSuccess: () => {
      navigate('/invoice')
    }
  })

  const onSubmit = (event: any) => {
    event.preventDefault()
    const data = parseFormData(new FormData(event.target))
    data.itemsId = data.itemsId ? (data.itemsId as string).split(',') : [invoiceItemID]
    newInvoiceMutation.mutate(data)
  }

  return {
    onSubmit
  }
}

export default useInvoicesNew