import ClientDetails from '../ClientDetails/ClientDetails'
import useClientNew from './useClientNew'

const ClientNew: React.FC = () => {
  const { onSubmit } = useClientNew()

  return(
    <ClientDetails onSubmit={onSubmit} />
  )
}

export default ClientNew