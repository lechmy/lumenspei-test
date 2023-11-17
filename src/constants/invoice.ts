import { INVOICE_STATUS, PAYMENT_METHOD } from '../enums/Invoices'
import { PRODUCT_TYPE } from '../enums/product'
import { InvoiceDto } from '../types/dto/Invoice'
import { ProductDto } from '../types/dto/Products'

export const defaultInvoice: InvoiceDto = {
  id: '2',
  designation: 'Some Designation',
  clientId: '10384',
  note: 'Nothing to note',
  issueDate: '19/2/2023',
  arrivalDate: '19/2/2023',
  paymentDate: '19/2/2023',
  status: INVOICE_STATUS.SEMI_PAYED,
  paymentMethod: PAYMENT_METHOD.OTHER,
  itemsId: ['1','2'],
}

export const emptyInvoice: InvoiceDto = {
  id: '',
  designation: '',
  clientId: '',
  note: '',
  issueDate: '19/2/2023',
  arrivalDate: '19/2/2023',
  paymentDate: '19/2/2023',
  status: INVOICE_STATUS.NOT_PAYED,
  paymentMethod: PAYMENT_METHOD.CARD,
  itemsId: [],
}