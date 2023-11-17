import { useMutation, useQuery } from "react-query"
import { editClient } from "../../../services/Client"
import { useState } from "react"
import { UserDto } from "../../../types/dto/User"

import { useParams, useSearchParams } from "react-router-dom"
import { defaultClient } from "../../../constants/user"

const useClientEdit = () => {
  const { id } = useParams ()
  const [client, setClient] = useState<UserDto>(defaultClient)

  // const query = useQuery(['editClient'], () => getClient(id).then(data => setClient(data)))

  const newClientMutation = useMutation({
    mutationFn: (formData: any) => {
      return editClient(formData)
    },
  })

  const onSubmit = (event: any) => {
    event.preventDefault()
    newClientMutation.mutate(new FormData(event.target))
  }

  return {
    client,
    onSubmit
  }
}

export default useClientEdit