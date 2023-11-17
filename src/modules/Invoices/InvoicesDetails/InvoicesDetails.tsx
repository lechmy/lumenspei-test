import { InvoicesDetailsProps } from "../../../types/props/InvoicesDetailsProps"
import Input from "../../../components/Input/Input"
import Textarea from "../../../components/Textarea/Textarea"
import Button from "../../../components/Button/Button"
import useInvoicesDetails from "./useInvoicesDetails"

const InvoicesDetails: React.FC<InvoicesDetailsProps> = (props) => {
  const {
    invoice,
    invoiceStatus,
    paymentMethod,
    handleChange,
    handleCancel,
    onSubmit,
  } = useInvoicesDetails(props)

  return (
    <section className="mt-6">
      <form onSubmit={onSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-6">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Invoice Information</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="designation" className="block text-sm font-medium leading-6 text-gray-900">
                  Invoice designation
                </label>
                <div className="mt-2">
                  <Input
                    name="designation"
                    id="designation"
                    type="text"
                    placeholder="Invoice designation"
                    value={invoice?.designation}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="clientId" className="block text-sm font-medium leading-6 text-gray-900">
                  Client ID
                </label>
                <div className="mt-2">
                  <Input
                    name="clientId"
                    id="clientId"
                    type="text"
                    required
                    placeholder="client ID"
                    value={invoice?.clientId}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="note" className="block text-sm font-medium leading-6 text-gray-900">
                  Note
                </label>
                <div className="mt-2">
                  <Textarea 
                    id="note"
                    name="note"
                    rows={3}
                    placeholder="Note"
                    value={invoice?.note}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="issueDate" className="block text-sm font-medium leading-6 text-gray-900">
                  Issue date
                </label>
                <div className="mt-2">
                  <Input
                    id="issueDate"
                    name="issueDate"
                    type="text"
                    placeholder="Issue date"
                    value={invoice?.issueDate}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="arrivalDate" className="block text-sm font-medium leading-6 text-gray-900">
                  Arrival date
                </label>
                <div className="mt-2">
                  <Input
                    id="arrivalDate"
                    name="arrivalDate"
                    type="text"
                    placeholder="Arrival date"
                    value={invoice?.arrivalDate}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="paymentDate" className="block text-sm font-medium leading-6 text-gray-900">
                Payment date
                </label>
                <div className="mt-2">
                  <Input
                    id="paymentDate"
                    name="paymentDate"
                    type="text"
                    placeholder="Payment date"
                    value={invoice?.paymentDate}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                  Invoice status
                </label>
                <div className="mt-2">
                  <select
                    id="status"
                    name="status"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {invoiceStatus.map(status => {
                      return (<option key={status} selected={status === invoice?.status}>{status}</option>)
                    })}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="paymentMethod" className="block text-sm font-medium leading-6 text-gray-900">
                  Payment method
                </label>
                <div className="mt-2">
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {paymentMethod.map(method => {
                      return (<option key={method} selected={method === invoice?.paymentMethod}>{method}</option>)
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Button type="button" className="bg-red-400 hover:bg-red-600" onClick={handleCancel}>Cancel</Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </section>
  )
}

export default InvoicesDetails