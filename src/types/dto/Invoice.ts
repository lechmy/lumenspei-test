import { INVOICE_STATUS, PAYMENT_METHOD } from '../../enums/Invoices'

export interface InvoiceDto {
  id: string,
  designation: string,
  clientId: string,
  note: string,
  issueDate: string,
  arrivalDate: string,
  paymentDate: string,
  status: INVOICE_STATUS,
  paymentMethod: PAYMENT_METHOD,
  itemsId: string[],
}
