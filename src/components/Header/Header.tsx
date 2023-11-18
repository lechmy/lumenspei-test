import { Link } from 'react-router-dom'
import useHeader from './useHeader'
import Button from '../Button/Button'

const Header: React.FC = () => {
  const {
    logout,
  } = useHeader()
  
  return (
    <header className="bg-cyan-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex">
          <Link to="/">
            <span className="sr-only">Home</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </Link>
        </div>
        <div className="flex gap-x-12 ml-6">
          <Link to="/client" className="text-sm font-semibold leading-6 text-gray-900">Clients</Link>
          <Link to="/product" className="text-sm font-semibold leading-6 text-gray-900">Products</Link>
          <Link to="/invoice" className="text-sm font-semibold leading-6 text-gray-900">Invoices</Link>
        </div>
        <div className="flex flex-1 justify-end">
          <Button onClick={logout} className="text-sm font-semibold leading-6 text-gray-900">
            Log out
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header