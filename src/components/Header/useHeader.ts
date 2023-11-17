import { useState } from "react"
import { useAuth } from "../../providers/Auth"

const useHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  
  return {
    mobileMenuOpen,
    logout,
    setMobileMenuOpen
  }
}
  
export default useHeader