import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../modules/Dashboard/Dashboard'
import Login from '../modules/Login/Login'
import MainLayout from '../layouts/MainLayout'
import ClientList from '../modules/Client/ClientList/ClientList'
import ClientDetails from '../modules/Client/ClientDetails/ClientDetails'
import { AuthGuard } from './components/AuthGuard'
import ResetPassword from '../modules/ResetPassword/ResetPassword'
import AuthLayout from '../layouts/AuthLayout'
import NewPassword from '../modules/NewPassword/NewPassword'
import Register from '../modules/Register/Register'
import ClientNew from '../modules/Client/ClientNew/ClientNew'
import ClientEdit from '../modules/Client/ClientEdit/ClientEdit'
import ProductList from '../modules/Product/ProductList/ProductList'
import ProductEdit from '../modules/Product/ProductEdit/ProductEdit'
import ProductDetails from '../modules/Product/ProductDetails/ProductDetails'
import ProductNew from '../modules/Product/ProductNew/ProductNew'
import InvoicesList from '../modules/Invoices/InvoicesList/InvoicesList'
import InvoicesEdit from '../modules/Invoices/InvoicesEdit/InvoicesEdit'
import InvoicesDetails from '../modules/Invoices/InvoicesDetails/InvoicesDetails'
import InvoicesNew from '../modules/Invoices/InvoicesNew/InvoicesNew'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthGuard><MainLayout /></AuthGuard>,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "client",
        element: <ClientList />,
      },
      {
        path: "client/new",
        element: <ClientNew />,
      },
      {
        path: "client/:id",
        element: <ClientDetails />,
      },
      {
        path: "client/:id/edit",
        element: <ClientEdit />,
      },
      {
        path: "product",
        element: <ProductList />,
      },
      {
        path: "product/new",
        element: <ProductNew />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "product/:id/edit",
        element: <ProductEdit />,
      },
      {
        path: "invoice",
        element: <InvoicesList />,
      },
      {
        path: "invoice/new",
        element: <InvoicesNew />,
      },
      {
        path: "invoice/:id",
        element: <InvoicesDetails />,
      },
      {
        path: "invoice/:id/edit",
        element: <InvoicesEdit />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "new-password",
        element: <NewPassword />,
      },
    ],
  },
])
