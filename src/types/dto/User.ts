import { STATUS } from '../../enums/common'
import { USER_ROLE } from '../../enums/user'

export interface UserDto {
  id?: string,
  firstName: string,
  lastName: string,
  username: string,
  address: string,
  zipCode: string,
  country?: string,
  email: string,
  workEmail?: string,
  phoneNumber: string,
  oib: string,
  notes?: string,
  status?: STATUS,
  role?: USER_ROLE,
  password: string,
  webShopCallback?: string,
  pickupAddress?: string,
  iban?: string,
  contactPersonPickup?: string,
  contactPersonFinancialOperations?: string,
  contactPersonOrganisationOperations?: string,
  invoiceEmail?: string,
  contactPersonOther1?: string,
  contactPersonOther2?: string,
} 

export interface GetUsersDto {
  name?: string
  userRole?: USER_ROLE
  sortItem?: string
  sortOrder?: number
  pageSize?: number
  pageNumber?: number
}
