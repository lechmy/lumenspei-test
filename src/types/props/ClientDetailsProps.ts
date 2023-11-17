import { UserDto } from "../dto/User"

export interface ClientDetailsProps {
  client?: UserDto
  onSubmit?: (ev: any) => void
};