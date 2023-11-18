import { AxiosPromise } from 'axios'
import Axios from '../api'
import { InvoiceDto } from '../types/dto/Invoice'
import { InvoiceModel } from '../types/model/Invoice'

export const getInvoices = (): Promise<InvoiceModel[]> => {
  return Axios.get<InvoiceModel[]>('/v1/invoices').then((response) => response.data)
}

export const getInvoice = (id: string): Promise<InvoiceModel[]> => {
  return Axios.get<InvoiceModel[]>(`/v1/invoices/${id}`).then((response) => response.data)
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