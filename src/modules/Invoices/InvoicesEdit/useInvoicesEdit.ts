import { useMutation, useQuery } from 'react-query'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { defaultInvoice, invoiceItemID } from '../../../constants/invoice'
import { editInvoice, getInvoice } from '../../../services/Invoice'
import { InvoiceModel } from '../../../types/model/Invoice'
import { parseFormData } from '../../../utility/form'
import { InvoiceDto } from '../../../types/dto/Invoice'

const useInvoicesEdit = () => {
  const { id } = useParams ()
  const navigate = useNavigate()
  
  const [invoice, setInvoice] = useState<InvoiceModel | null>(null)
  // const query = useQuery(['editClient'], () => getClient(id).then(data => setClient(data)))

  useQuery(['invoices', id], () => getInvoice(id || ''), {
    onSuccess: (data) => setInvoice(invoice => ({...invoice, ...data.data}))
  })

  const newInvoiceMutation = useMutation({
    mutationFn: (formData: any) => editInvoice(formData),
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
    invoice,
    onSubmit
  }
}

export default useInvoicesEdit