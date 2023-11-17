import ClientDetails from "../ClientDetails/ClientDetails"
import useClientEdit from "./useClientEdit"

const ClientEdit: React.FC = () => {
  const { client, onSubmit } = useClientEdit()

  return(
    <ClientDetails client={client} onSubmit={onSubmit} />
  )
}

export default ClientEdit