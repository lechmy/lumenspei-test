import { useMutation } from "react-query"
import { newClient } from "../../../services/Client"
import { FormEvent } from "react"

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

  // const newClientMutation = useMutation({
  //   mutationFn: (event) => {
  //     console.log('nesto')
  //     // event.preventDefault()
  //     return createNewClient(data)
  //   },
  // })
  return {
    onSubmit
  }
}

export default useClientNew