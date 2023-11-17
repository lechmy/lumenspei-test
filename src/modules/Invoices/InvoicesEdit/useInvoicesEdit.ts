import { useMutation, useQuery } from 'react-query'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { defaultInvoice } from '../../../constants/invoice'
import { InvoiceDto } from '../../../types/dto/Invoice'
import { editInvoice } from '../../../services/Invoice'

const useInvoicesEdit = () => {
  const { id } = useParams ()
  const [invoice, setInvoice] = useState<InvoiceDto>(defaultInvoice)

  // const query = useQuery(['editClient'], () => getClient(id).then(data => setClient(data)))

  const newInvoiceMutation = useMutation({
    mutationFn: (formData: any) => {
      return editInvoice(formData)
    },
  })

  const onSubmit = (event: any) => {
    event.preventDefault()
    newInvoiceMutation.mutate(new FormData(event.target))
  }

  return {
    invoice,
    onSubmit
  }
}

export default useInvoicesEdit