import Input from "../../../components/Input/Input"
import Textarea from "../../../components/Textarea/Textarea"
import useClientDetails from "./useClientDetails"
import { ClientDetailsProps } from "../../../types/props/ClientDetailsProps"
import Button from "../../../components/Button/Button"

const ClientDetails: React.FC<ClientDetailsProps> = (props) => {
  const {
    client,
    clientStatusList,
    clientRoleList,
    handleChange,
    handleCancel,
    onSubmit,
  } = useClientDetails(props)

  return (
    <section className="mt-6">
      <form onSubmit={onSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-6">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                  First name *
                </label>
                <div className="mt-2">
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    placeholder="First name"
                    value={client?.firstName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                  Last name *
                </label>
                <div className="mt-2">
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    placeholder="Last name"
                    value={client?.lastName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={client?.username}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              
              <div className="sm:col-span-3">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password *
                </label>
                <div className="mt-2">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    value={client?.password}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="repeatPassword" className="block text-sm font-medium leading-6 text-gray-900">
                  Repeat Password *
                </label>
                <div className="mt-2">
                  <Input
                    id="repeatPassword"
                    name="repeatPassword"
                    type="password"
                    required
                    placeholder="Repeat password"
                    value={client?.password}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address *
                </label>
                <div className="mt-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Last name"
                    value={client?.email}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="workEmail" className="block text-sm font-medium leading-6 text-gray-900">
                  Work Email address
                </label>
                <div className="mt-2">
                  <Input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    placeholder="Work email address"
                    value={client?.workEmail}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
                  Phone Number *
                </label>
                <div className="mt-2">
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    required
                    placeholder="Phone number"
                    value={client?.phoneNumber}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="oib" className="block text-sm font-medium leading-6 text-gray-900">
                  OIB
                </label>
                <div className="mt-2">
                  <Input
                    id="oib"
                    name="oib"
                    type="text"
                    placeholder="OIB"
                    value={client?.oib}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                  Address
                </label>
                <div className="mt-2">
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="address"
                    value={client?.address}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="zipCode" className="block text-sm font-medium leading-6 text-gray-900">
                  Zip Code
                </label>
                <div className="mt-2">
                  <Input
                    id="zipCode"
                    name="zipCode"
                    type="text"
                    placeholder="Zip Code"
                    value={client?.zipCode}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Country
                </label>
                <div className="mt-2">
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Country"
                    value={client?.country}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="notes" className="block text-sm font-medium leading-6 text-gray-900">
                  Notes
                </label>
                <div className="mt-2">
                  <Textarea 
                    id="notes"
                    name="notes"
                    rows={3}
                    placeholder="Notes"
                    value={client?.notes}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
   

            </div>
          </div>
          <div className="border-b border-gray-900/10 pb-6">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Additional Information</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                  Client Status
                </label>
                <div className="mt-2">
                  <select
                    id="status"
                    name="status"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {clientStatusList.map(status => {
                      return (<option key={status} selected={status === client?.status}>{status}</option>)
                    })}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                  Client Role
                </label>
                <div className="mt-2">
                  <select
                    id="role"
                    name="role"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {clientRoleList.map(role => {
                      return (<option key={role} selected={role === client?.role}>{role}</option>)
                    })}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="pickupAddress" className="block text-sm font-medium leading-6 text-gray-900">
                  Pickup address
                </label>
                <div className="mt-2">
                  <Input
                    id="pickupAddress"
                    name="pickupAddress"
                    type="text"
                    placeholder="Pickup address"
                    value={client?.pickupAddress}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="iban" className="block text-sm font-medium leading-6 text-gray-900">
                  IBAN
                </label>
                <div className="mt-2">
                  <Input
                    id="iban"
                    name="iban"
                    type="text"
                    placeholder="IBAN"
                    value={client?.iban}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="contactPersonPickup" className="block text-sm font-medium leading-6 text-gray-900">
                  Contact person for pickup
                </label>
                <div className="mt-2">
                  <Input
                    id="contactPersonPickup"
                    name="contactPersonPickup"
                    type="text"
                    placeholder="Contact person for pickup"
                    value={client?.contactPersonPickup}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="contactPersonFinancialOperations" className="block text-sm font-medium leading-6 text-gray-900">
                  Contact person for financial operations
                </label>
                <div className="mt-2">
                  <Input
                    id="contactPersonFinancialOperations"
                    name="contactPersonFinancialOperations"
                    type="text"
                    placeholder="Contact person for financial operations"
                    value={client?.contactPersonFinancialOperations}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="contactPersonOrganisationOperations" className="block text-sm font-medium leading-6 text-gray-900">
                  Contact person organisation operations
                </label>
                <div className="mt-2">
                  <Input
                    id="contactPersonOrganisationOperations"
                    name="contactPersonOrganisationOperations"
                    type="text"
                    placeholder="Contact person organisation operations"
                    value={client?.contactPersonOrganisationOperations}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="contactPersonOther1" className="block text-sm font-medium leading-6 text-gray-900">
                  Other Contact person 1
                </label>
                <div className="mt-2">
                  <Input
                    id="contactPersonOther1"
                    name="contactPersonOther1"
                    type="text"
                    placeholder="Other contact person"
                    value={client?.contactPersonOther1}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="contactPersonOther2" className="block text-sm font-medium leading-6 text-gray-900">
                Other Contact person 2
                </label>
                <div className="mt-2">
                  <Input
                    id="contactPersonOther2"
                    name="contactPersonOther2"
                    type="text"
                    placeholder="Other contact person"
                    value={client?.contactPersonOther2}
                    onChange={(e) => handleChange(e)}
                  />
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

export default ClientDetails