import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { InvoiceDto } from "../../../types/dto/Invoice"
import { InvoicesDetailsProps } from "../../../types/props/InvoicesDetailsProps"
import { emptyInvoice } from "../../../constants/invoice"
import { INVOICE_STATUS, PAYMENT_METHOD } from "../../../enums/Invoices"

const useInvoicesDetails = (props: InvoicesDetailsProps) => {
  const { invoice, onSubmit } = props
  const invoiceStatus = Object.values(INVOICE_STATUS)
  const paymentMethod = Object.values(PAYMENT_METHOD)

  const navigate = useNavigate()

  const [curentInvoice, setCurentInvoice] = useState<InvoiceDto>(invoice || emptyInvoice)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedValue = {[e.target.name]:e.target.value};

    setCurentInvoice(curentInvoice => ({
      ...curentInvoice,
      ...updatedValue
    }));
  }

  const handleCancel = () => {
    navigate('/invoice')
  }

  return {
    invoice: curentInvoice,
    invoiceStatus,
    paymentMethod,
    handleChange,
    handleCancel,
    onSubmit,
  }
}
  
export default useInvoicesDetails