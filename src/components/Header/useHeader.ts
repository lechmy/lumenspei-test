import { useAuth } from '../../providers/Auth'

const useHeader = () => {
  const { logout } = useAuth()
  
  return {
    logout
  }
}
  
export default useHeader