import { AxiosPromise } from 'axios'
import Axios from '../api'
import { InvoiceDto } from '../types/dto/Invoice'

export const getInvoices = (): Promise<InvoiceDto[]> => {
  return Axios.get<InvoiceDto[]>('/v1/invoices').then((response) => response.data)
}

export const newInvoice = (data: InvoiceDto): AxiosPromise => {
  return Axios.post<InvoiceDto>('/v1/invoices', data)
}

export const editInvoice = (data: InvoiceDto): AxiosPromise => {
  return Axios.put<InvoiceDto>('/v1/invoices', data)
}

export const deleteInvoice = (id: string): AxiosPromise => {
  return Axios.delete<InvoiceDto>(`/v1/invoices/${id}`)
}