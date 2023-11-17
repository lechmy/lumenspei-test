import { InvoiceDto } from '../dto/Invoice'

export interface InvoicesDetailsProps {
  invoice?: InvoiceDto
  onSubmit?: (ev: any) => void
}
