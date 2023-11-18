import InvoicesDetails from '../InvoicesDetails/InvoicesDetails'
import useInvoicesNew from './useInvoicesNew'

const InvoicesNew: React.FC = () => {
  const { onSubmit } = useInvoicesNew()

  return(
    <InvoicesDetails onSubmit={onSubmit} />
  )
}

export default InvoicesNew