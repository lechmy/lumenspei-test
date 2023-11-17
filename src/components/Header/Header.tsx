import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline'
import useHeader from './useHeader';
import Button from '../Button/Button';

const Header: React.FC = () => {
  const {
    mobileMenuOpen,
    logout,
    setMobileMenuOpen
  } = useHeader()
  
  return (
    <header className="bg-cyan-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/">
            <span className="sr-only">Home</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="/client" className="text-sm font-semibold leading-6 text-gray-900">Clients</Link>
          <Link to="/product" className="text-sm font-semibold leading-6 text-gray-900">Products</Link>
          <Link to="/invoice" className="text-sm font-semibold leading-6 text-gray-900">Invoices</Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button onClick={logout} className="text-sm font-semibold leading-6 text-gray-900">
            Log out
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header