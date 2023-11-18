import { INVOICE_STATUS, PAYMENT_METHOD } from "../../enums/Invoices"

export interface InvoiceModel {
  id: string,
  designation: string,
  clientId: string,
  note: string,
  issueDate: string,
  arrivalDate: string,
  paymentDate: string,
  status: INVOICE_STATUS,
  paymentMethod: PAYMENT_METHOD,
  invoiceItems: InvoiceItemModel[],
  createdAt: string,
  deletedAt: string,
  updatedAt: string,
}

export interface InvoiceItemModel {
  id: string
  createdAt: string
  deletedAt: string
  price: number
  productId: string
  productName: string
  quantity: number
  tax: number
  updatedAt: string
}