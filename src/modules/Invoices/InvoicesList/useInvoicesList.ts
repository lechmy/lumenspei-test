import { useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom';
import { itemCount } from '../../../constants/common';
import { InvoiceDto } from '../../../types/dto/Invoice';
import { defaultInvoice } from '../../../constants/invoice';
import { deleteInvoice, getInvoices } from '../../../services/Invoice';

const useInvoicesList = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState<number>(itemCount[0])
  const [invoices, setInvoices] = useState<InvoiceDto[]>([defaultInvoice])

  const query = useQuery(['invoices'], () => getInvoices().then(data => setInvoices(data)))
  const { data, isLoading } = query

  const handleCreateNew = () => {
    navigate('/invoice/new');
  }

  const handleEdit = (invoice: InvoiceDto) => {
    navigate(`/invoice/${invoice.id}/edit`);
  }

  const handleDelete = (invoice: InvoiceDto) => {
    deleteInvoice(invoice.id)
  }

  return {
    invoices,
    isLoading,
    itemCount,
    selected,
    setSelected,
    handleCreateNew,
    handleEdit,
    handleDelete,
  }
}
  
export default useInvoicesList