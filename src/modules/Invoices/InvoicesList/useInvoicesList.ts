import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { perPageItemCount } from '../../../constants/common'
import { defaultInvoice } from '../../../constants/invoice'
import { deleteInvoice, getInvoices } from '../../../services/Invoice'
import { InvoiceModel } from '../../../types/model/Invoice'
import { getAllClients } from '../../../services/Client'

const useInvoicesList = () => {
  const navigate = useNavigate()

  const [itemCount, setItemCount] = useState<number>(perPageItemCount[0])
  const [invoices, setInvoices] = useState<InvoiceModel[]>([defaultInvoice])
  const [clients, setClients] = useState<any[]>([])

  const invoiceQuery = useQuery(['invoices'], getInvoices, {
    // @ts-ignore
    onSuccess: (res) => setInvoices(res.data.slice(0, itemCount))
  })
  const { data: invoiceData, isLoading } = invoiceQuery

  const clientsQuery = useQuery(['clients'], getAllClients, {
    onSuccess: (res) => setClients(res)
  })

  const invoiceMutation = useMutation({
    mutationFn: (id: string) => deleteInvoice(id),
    onSuccess: () => {
      navigate('/invoice')
    }
  })

  const handleCreateNew = () => {
    navigate('/invoice/new')
  }

  const handleEdit = (invoice: InvoiceModel) => {
    navigate(`/invoice/${invoice.id}/edit`)
  }

  const handleDelete = (invoice: InvoiceModel) => {
    invoiceMutation.mutate(invoice.id)
  }

  const handlePerPageChange = (value: number) => {
    // @ts-ignore
    setInvoices(!!invoiceData ? invoiceData.data.slice(0, value) : [])
    setItemCount(value)
  }

  return {
    invoices,
    clients,
    isLoading: invoiceQuery.isLoading,
    itemCount,
    perPageItemCount,
    handlePerPageChange,
    handleCreateNew,
    handleEdit,
    handleDelete,
  }
}
  
export default useInvoicesList