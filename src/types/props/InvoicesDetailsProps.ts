import { InvoiceModel } from '../model/Invoice'

export interface InvoicesDetailsProps {
  canEdit?: boolean
  invoice?: InvoiceModel | null
  onSubmit?: (ev: any) => void
}
