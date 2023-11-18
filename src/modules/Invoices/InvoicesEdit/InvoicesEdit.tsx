import InvoicesDetails from "../InvoicesDetails/InvoicesDetails"
import useClientEdit from "./useInvoicesEdit"

const InvoicesEdit: React.FC = () => {
  const { invoice, onSubmit } = useClientEdit()

  return(
    !!invoice && <InvoicesDetails canEdit invoice={invoice} onSubmit={onSubmit} />
  )
}
export default InvoicesEdit