import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useMutation } from 'react-query'
import { editClient } from '../../../services/Client'
import { UserDto } from '../../../types/dto/User'
import { defaultClient } from '../../../constants/user'

const useClientEdit = () => {
  const { id } = useParams ()
  const [client, setClient] = useState<UserDto>(defaultClient)

  // const query = useQuery(['editClient'], () => getClient(id).then(data => setClient(data)))

  const clientMutation = useMutation({
    mutationFn: (formData: any) => {
      return editClient(formData)
    },
  })

  const onSubmit = (event: any) => {
    event.preventDefault()
    clientMutation.mutate(new FormData(event.target))
  }

  return {
    client,
    onSubmit
  }
}

export default useClientEdit