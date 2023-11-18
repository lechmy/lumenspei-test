import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { InvoicesDetailsProps } from '../../../types/props/InvoicesDetailsProps'
import { emptyInvoice } from '../../../constants/invoice'
import { INVOICE_STATUS, PAYMENT_METHOD } from '../../../enums/Invoices'
import { InvoiceModel } from '../../../types/model/Invoice'
import { deleteInvoice } from '../../../services/Invoice'
import { useMutation } from 'react-query'

const useInvoicesDetails = (props: InvoicesDetailsProps) => {
  const { canEdit, invoice, onSubmit } = props
  const invoiceStatus = Object.values(INVOICE_STATUS)
  const paymentMethod = Object.values(PAYMENT_METHOD)

  const navigate = useNavigate()
  const { id } = useParams ()

  const [curentInvoice, setCurentInvoice] = useState<InvoiceModel>(invoice || emptyInvoice)

  const invoiceMutation = useMutation({
    mutationFn: (id: string) => deleteInvoice(id),
    onSuccess: () => {
      navigate('/invoice')
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const updatedValue = {[e.target.name]:e.target.value}
    setCurentInvoice(curentInvoice => ({
      ...curentInvoice,
      ...updatedValue
    }))
  }

  const handleDateChange = (key: string, value: Date | null): void => {
    setCurentInvoice(curentInvoice => ({
      ...curentInvoice,
      ...{[key]: value}
    }))
  }

  const handleDelete = (invoice: InvoiceModel) => {
    invoiceMutation.mutate(invoice.id || '')
  }

  const handleCancel = () => {
    navigate('/invoice')
  }

  return {
    canEdit,
    invoice: curentInvoice,
    invoiceStatus,
    paymentMethod,
    handleDateChange,
    handleChange,
    handleCancel,
    handleDelete,
    onSubmit,
  }
}
  
export default useInvoicesDetails