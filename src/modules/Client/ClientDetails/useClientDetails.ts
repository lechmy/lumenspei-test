import { useState } from "react"
import { STATUS } from "../../../enums/common"
import { USER_ROLE } from "../../../enums/user"
import { UserDto } from "../../../types/dto/User"
import { ClientDetailsProps } from "../../../types/props/ClientDetailsProps"
import { useNavigate } from "react-router-dom"
import { emptyClient } from "../../../constants/user"

const useClientDetails = (props: ClientDetailsProps) => {
  const { client, onSubmit } = props
  const clientStatusList = Object.values(STATUS)
  const clientRoleList = Object.values(USER_ROLE)

  const navigate = useNavigate()

  const [curentClient, setCurentClient] = useState<UserDto>(client || emptyClient)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e)
    const updatedValue = {[e.target.name]:e.target.value};

    setCurentClient(curentClient => ({
      ...curentClient,
      ...updatedValue
    }));
  }

  const handleCancel = () => {
    navigate('/client')
  }

  return {
    client: curentClient,
    clientStatusList,
    clientRoleList,
    handleChange,
    handleCancel,
    onSubmit,
  }
}
  
export default useClientDetails