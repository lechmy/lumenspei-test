import InvoicesDetails from "../InvoicesDetails/InvoicesDetails"
import useClientEdit from "./useInvoicesEdit"

const InvoicesEdit: React.FC = () => {
  const { invoice, onSubmit } = useClientEdit()

  return(
    <InvoicesDetails invoice={invoice} onSubmit={onSubmit} />
  )
}

export default InvoicesEdit