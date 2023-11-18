import { useMutation } from 'react-query'
import { newClient } from '../../../services/Client'

const useClientNew = () => {
  const newClientMutation = useMutation({
    mutationFn: (formData: any) => {
      return newClient(formData)
    },
  })

  const onSubmit = (event: any) => {
    event.preventDefault()
    newClientMutation.mutate(new FormData(event.target))
  }

  return {
    onSubmit
  }
}

export default useClientNew
