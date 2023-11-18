import { INVOICE_STATUS, PAYMENT_METHOD } from '../enums/Invoices'
import { InvoiceModel } from '../types/model/Invoice'

export const invoiceItemID = '88fbe584-5922-4076-98be-c605ca58185f'

export const defaultInvoice: InvoiceModel = {  
    id: '58622e72-2264-4427-ac5f-feed0c15016c',
    designation: '1/5/1/2023',
    clientId: 'e2e22e21-e516-4b80-9c3e-f6781566b3b2',
    note: '',
    issueDate: '2023-09-11T00:00:00',
    arrivalDate: '2023-09-12T00:00:00',
    paymentDate: '2023-09-12T00:00:00',
    status: INVOICE_STATUS.PAYED,
    paymentMethod: PAYMENT_METHOD.CARD,
    invoiceItems: [
      {
        id: '88fbe584-5922-4076-98be-c605ca58185f',
        productId: 'bcc69b5d-723c-4169-97d0-56d557feda48',
        productName: 'Kutija L',
        price: 19.99,
        quantity: 25,
        tax: 25,
        createdAt: '2023-09-11T10:38:51.781049',
        updatedAt: '2023-09-11T10:39:23.530252',
        deletedAt: ''
      },
      {
        id: 'e2983053-96e9-48a1-b259-909595de7601',
        productId: '125a2d4c-314f-4f6b-8813-880d90572ce2',
        productName: 'Kutija S',
        price: 9.99,
        quantity: 12,
        tax: 25,
        createdAt: '2023-09-11T10:38:41.309317',
        updatedAt: '2023-09-11T10:39:23.530331',
        deletedAt: ''
      }
    ],
    createdAt: '2023-09-11T10:39:23.528241',
    updatedAt: '2023-09-12T14:28:44.247096',
    deletedAt: ''
}

export const emptyInvoice: InvoiceModel = {
  id: '',
  designation: '',
  clientId: '',
  note: '',
  issueDate: '',
  arrivalDate: '',
  paymentDate: '',
  status: INVOICE_STATUS.PAYED,
  paymentMethod: PAYMENT_METHOD.CARD,
  invoiceItems: [],
  createdAt: '',
  updatedAt: '',
  deletedAt: ''
}